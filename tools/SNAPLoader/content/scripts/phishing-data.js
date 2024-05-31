define(['app'], function(DataController) {
  'use strict';
  
  // Since app is loaded via requirejs, then window.trackingObj and window.scorm have been created
  var trackingObj = window.trackingObj,
      scorm = window.scorm,
      CONSTANTS = {
        CMI: {
          INTERACTIONS: {
            COUNT: 'cmi.interactions._count',
            CORRECT_RESPONSE: 'cmi.interactions.n.correct_responses.m.pattern',
            ID: 'cmi.interactions.n.id',
            LATENCY: 'cmi.interactions.n.latency',
            OBJECTIVE_ID: 'cmi.interactions.n.objectives.m.id',
            RESULT: 'cmi.interactions.n.result',
            STUDENT_RESPONSE: 'cmi.interactions.n.student_response',
            TIME: 'cmi.interactions.n.time',
            TYPE: 'cmi.interactions.n.type',
            WEIGHTING: 'cmi.interactions.n.weighting'
          },
          STUDENT_PREFERENCE: {
            AUDIO: "cmi.student_preference.audio",
            TEXT: "cmi.student_preference.text"
          },
          OBJECTIVES: {
            COUNT: 'cmi.objectives._count',
            ID: 'cmi.objectives.n.id',
            STATUS: 'cmi.objectives.n.status',
            SCORE: {
              RAW: 'cmi.objectives.n.score.raw',
              MIN: 'cmi.objectives.n.score.min',
              MAX: 'cmi.objectives.n.score.max'
            }
          }
        }
      };
  
  // Set up click handlers for buttons in Help Settings tab, since they wouldn't work in the in-page script tag
  $(document).on("click", "#btnEnableSoundEffects", function(e) {
    setSoundEffectsOn(true);
    $(this).hide();
    $("#btnDisableSoundEffects").show().get(0).focus();
  }).on("click", "#btnDisableSoundEffects", function(e) {
    setSoundEffectsOn(false);
    $(this).hide();
    $("#btnEnableSoundEffects").show().get(0).focus();
  });
  
  function setSoundEffectsOn(setOn) {
      saveData("sfx", setOn ? "1" : "0");
  };
  
  function addGuardianClass(guardianIndex) {
    $('body').removeClass('guardian-0 guardian-1 guardian-2 guardian-3').addClass('guardian-' + guardianIndex);
  }
  
  function checkGuardianIndex() {
    var index = getData("guardian");
    
    if (index !== "") {
      addGuardianClass(index);
    }
  }
  
  function scormGetValue(cmiElement, defaultValue) {
			if (scorm.getStatus() == "online") {
				return window.opener.doLMSGetValue(cmiElement);
			} else {
				scorm.checkStatusChange();
				return defaultValue !== null ? defaultValue : "";
			}
  }
  
  function scormSetValue(cmiElement, value) {
    //console.log('scormSetValue("' + cmiElement + '", "' + value + '")');
    if (scorm.getStatus() == "online") {
      window.opener.doLMSSetValue(cmiElement, value);
    } else {
      scorm.checkStatusChange();
    }
  }
  
  function replaceN(cmiElement, value) {
    return replaceIndexLetter(cmiElement, 'n', value);
  }
  
  function replaceM(cmiElement, value) {
    return replaceIndexLetter(cmiElement, 'm', value);
  }
  
  function replaceIndexLetter(cmiElement, indexLetter, value) {
    return cmiElement.replace('.' + indexLetter + '.', '.' + value + '.');
  }
  
  function getData(key, value) {
    return trackingObj.getData(key) || "";
  }
  
  function saveData(key, value) {
    return trackingObj.saveData(key, value);
  }
  
  checkGuardianIndex();
  
  return {
    getLevelOfDifficulty: function() {
      return getData("level") || "1";
    },
    setLevelOfDifficulty: function(level) {
      return saveData("level", level);
    },
    getGuardianIndex: function() {
      return getData("guardian");
    },
    setGuardianIndex: function(index) {
      addGuardianClass(index);
      return saveData("guardian", index);
    },
    getData: function(key) {
      return getData(key);
    },
    setData: function(key, value) {
      return saveData(key, value);
    },
    getVolume: function() {
      var value = getData('vol');
      
      value = value !== "" ? parseInt(value) : 100;
      
      return value;
    },
    setVolume: function(value) {
      return saveData('vol', value);
    },
    getMuted: function() {
      return getData("mute") === "1";
    },
    setMuted: function(isMuted) {
      return saveData("mute", isMuted === true ? "1" : "0");
    },
    isPageViewed: function(pageId) {
      return this.getData(pageId) === "1";
    },
    setPageViewed: function(pageId) {
      this.setData(pageId, "1");
    },
    hasSetMutedOption: function() {
      return this.getData("mute") !== "";
    },
    areSoundEffectsOn: function() {
      return this.getData("sfx") !== "0"; // On by default
    },
    setSoundEffectsOn: function(setOn) {
      setSoundEffectsOn(setOn);
    },
    getObjectiveCount: function() {
			return parseInt(scormGetValue(CONSTANTS.CMI.OBJECTIVES.COUNT, "0"));
		},
    initializeObjective: function(n, id) {
      var idElement = replaceN(CONSTANTS.CMI.OBJECTIVES.ID, n),
          statusElement = replaceN(CONSTANTS.CMI.OBJECTIVES.STATUS, n);
          
			scormSetValue(idElement, id);
      scormSetValue(statusElement, 'incomplete');
		},
    completeObjective: function(n, rawScore, minScore, maxScore) {
      var rawScoreElement = replaceN(CONSTANTS.CMI.OBJECTIVES.SCORE.RAW, n),
          minScoreElement = replaceN(CONSTANTS.CMI.OBJECTIVES.SCORE.MIN, n),
          maxScoreElement = replaceN(CONSTANTS.CMI.OBJECTIVES.SCORE.MAX, n),
          statusElement = replaceN(CONSTANTS.CMI.OBJECTIVES.STATUS, n);
			
      scormSetValue(rawScoreElement, rawScore);
			scormSetValue(minScoreElement, minScore);
			scormSetValue(maxScoreElement, maxScore);
			scormSetValue(statusElement, 'completed');
		},
    recordInteraction: function(id, objectiveIds, type, weighting, correctResponses, studentResponse, result, latency, time) {
      var n = parseInt(scormGetValue(CONSTANTS.CMI.INTERACTIONS.COUNT, "0")),
          cmiElement,
          m;
      
      cmiElement = replaceN(CONSTANTS.CMI.INTERACTIONS.ID, n);
      scormSetValue(cmiElement, id);
      
      for (m = 0; m < objectiveIds.length; m++) {
        cmiElement = replaceM(replaceN(CONSTANTS.CMI.INTERACTIONS.OBJECTIVE_ID, n), m);
        scormSetValue(cmiElement, objectiveIds[m]);
      }
      
      cmiElement = replaceN(CONSTANTS.CMI.INTERACTIONS.TYPE, n);
      scormSetValue(cmiElement, type);
      
      cmiElement = replaceN(CONSTANTS.CMI.INTERACTIONS.WEIGHTING, n);
      scormSetValue(cmiElement, weighting);
      
      for (m = 0; m < correctResponses.length; m++) {
        cmiElement = replaceM(replaceN(CONSTANTS.CMI.INTERACTIONS.CORRECT_RESPONSE, n), m);
        scormSetValue(cmiElement, correctResponses[m]);
      }
      
      cmiElement = replaceN(CONSTANTS.CMI.INTERACTIONS.STUDENT_RESPONSE, n);
      scormSetValue(cmiElement, studentResponse);
      
      cmiElement = replaceN(CONSTANTS.CMI.INTERACTIONS.RESULT, n);
      scormSetValue(cmiElement, result);
      
      cmiElement = replaceN(CONSTANTS.CMI.INTERACTIONS.LATENCY, n);
      scormSetValue(cmiElement, latency);
      
      cmiElement = replaceN(CONSTANTS.CMI.INTERACTIONS.TIME, n);
      scormSetValue(cmiElement, time);
    }
  }
});