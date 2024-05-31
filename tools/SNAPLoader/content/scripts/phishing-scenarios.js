define([
  'jquery',
  'underscore',
  'utils', 
  './phishing-scenarios-settings', 
  './phishing-data',
  './narration-controller',
  './sound-effects-controller',
  './phishing-scenarios-labels',
  'hbs!./templates/ui-game',
  'hbs!./templates/ui-scenario',
  'hbs!./templates/ui-results',
  'hbs!./templates/feedback-alert',
  //'hbs!./templates/qa-game'
  'hbs!./templates/qa-scenarios'
], function($, _, Utils, settings, PhishingData, NarrationController, SFXController, Labels, gameTemplate, scenarioTemplate, resultsTemplate, feedbackAlertTemplate, qaTemplate) {
  'use strict';
  
  var CONSTANTS = {
        SERIALIZE_SEPARATOR: '|',
        ARRAY_SEPARATOR: ',',
        NOT_ATTEMPTED: -1,
        MODE: {
          IDENTIFY_TYPE: 0,
          IDENTIFY_CLUES: 1
        },
        TYPE: {
          SAFE: 0,
          PHISHING: 1
        },
        CSS: {
          MODE_IDENTIFY_TYPE: 'mode-identify-type',
          MODE_IDENTIFY_CLUES: 'mode-identify-clues',
          MODE_TYPE_FEEDBACK: 'mode-type-feedback',
          MODE_CLUE_FEEDBACK: 'mode-clue-feedback',
          NO_MORE_GUESSES: 'no-more-guesses',
          NO_MORE_SCENARIOS: 'no-more-scenarios',
          GOLD_STAR: 'gold-star'
        }
      },
      jqueryHandles = {
        $uiTarget: null
      },
      $target = null,
      scenarios = null,
      trackingData = null,
      isSavedAttempt = false,
      _initialize = function(overridenSettings) {
        init(overridenSettings);
      };
  
  function init(overridenSettings) {
    _.extend(settings, overridenSettings);
    
    trackingData = getInitialTrackingObject();
    
    if (settings.reset && settings.reset === true) {
      // Next time the phishing scenarios activity is launched, start with a fresh set of data
      resetSavedData();
      return;
    }
    
    // Store a reference to the host element (saved as a jQuery reference)
    jqueryHandles.$uiTarget = $(settings.uiTarget).empty();
    
    loadSavedData();
    
    if (settings.scenarioBank !== null) {
      var levelOfDifficulty = PhishingData.getLevelOfDifficulty();
      
      if (trackingData.scenarioIds && trackingData.scenarioIds.length) {
        // Continue a saved attempt
        isSavedAttempt = true;
        scenarios = settings.scenarioBank.getScenarios(trackingData.scenarioIds, levelOfDifficulty, Utils.lang);
      } else {
        // Start a new attempt, save the data, then continue
        scenarios = settings.scenarioBank.getScenarios(null, levelOfDifficulty, Utils.lang);
        // ******* TEMPORARY FOR TESTING RESULTS SCREEN *********
        //scenarios = scenarios.slice(scenarios.length - 1, levelOfDifficulty, Utils.lang); // Take only the last randomly selected email, so we get to results faster
        // ******* TEMPORARY FOR TESTING SPECIFIC EMAIL *********
        //scenarios = settings.scenarioBank.getScenarios(["2.35"], levelOfDifficulty, Utils.lang); // Load a specific email, by slide number
        // ***********************************************
        trackingData.scenarioIds = extractScenarioIds(scenarios);
        saveData();
        setCMIObjective(true);
      }
    }
    
    // Display the UI
    renderGameUI();
    render();
    
    // Set up event handlers on the host element
    attachEventHandlers();
  }
  
  function renderGameUI() {
    
    var labels = settings.labels,
        gameLabels = labels.game,
        identifyTypeLabels = labels.identifyType,
        identifyCluesLabels = labels.identifyClues,
        feedbackLabels = labels.feedback,
        gameUIData = {
          sectionTitleClues: identifyCluesLabels.sectionTitleClues,
          sectionTitlePoints: gameLabels.sectionTitlePoints,
          sectionTitleButtons: gameLabels.sectionTitleButtons,
          labelReportThisEmail: identifyTypeLabels.labelReportThisEmail,
          labelSafe: identifyTypeLabels.labelSafe,
          labelNextEmail: identifyCluesLabels.labelNextEmail,
          labelContinue: feedbackLabels.labelContinue,
          labelBack: feedbackLabels.labelBack,
          labelResults: feedbackLabels.labelResults
        },
        gameUI = gameTemplate(gameUIData);
    
    jqueryHandles.$uiTarget.html(gameUI);
    
    var $gameUI = jqueryHandles.$gameUI = jqueryHandles.$uiTarget.find('#gameUI').hide();
    jqueryHandles.$clueIndicators = $gameUI.find('#clueIndicators').hide();
    jqueryHandles.$pointsIndicators = $gameUI.find('#pointsIndicators');
    jqueryHandles.$scenarioWrapper = $gameUI.find('#scenarioWrapper').hide();
    jqueryHandles.$feedbackWrapper = $gameUI.find('#feedbackWrapper').hide();
    jqueryHandles.$feedbackAlert = $gameUI.find('#feedbackAlert').hide();
    jqueryHandles.$allButtons = $gameUI.find('.game-ui-button-wrapper').hide();
    jqueryHandles.$identifyTypeButtons = $gameUI.find('#identifyTypeButtons');
    jqueryHandles.$nextEmailButton = $gameUI.find('#nextEmailButton');
    jqueryHandles.$continueButton = $gameUI.find('#continueButton');
    jqueryHandles.$backToScenarioButton = $gameUI.find('#backToScenarioButton');
    jqueryHandles.$resultsButton = $gameUI.find('#resultsButton');
    
    
    
    
    //// QA Addition ============================================================================= *** ============
    //// Uncomment the following line to display a button that opens a QA Tools popup 
    //// for reviewing email scenarios, feedback, and randomization logic.
    //jqueryHandles.$uiTarget.append(qaTemplate());
    
    
    
    if (isSavedAttempt) {
      updatePoints(calculateTotalPoints());
    }
    
    $gameUI.show();
  }
  
  function render() {
    if (trackingData.quizFinished) {
      renderResults();
    } else {
      renderScenario();
    }
  }
  
  function renderResults() {
      var resultsLabels = settings.labels.results,
          totalCorrect = trackingData.totalCorrect,
          levelOfDifficulty = parseInt(PhishingData.getLevelOfDifficulty()),
          CSS = CONSTANTS.CSS,
          resultsData = {
            lang: Utils.lang,
            resultsScreenTitle: resultsLabels.sectionTitleResults,
            guardianUrl: settings.guardianUrl,
            congratulationsMessage: resultsLabels.congratulationsMessage,
            labelRetry: resultsLabels.labelRetry,
            resultTitle: resultsLabels.sectionTitleResult,
            labelEmails: resultsLabels.labelEmails,
            valueEmails: totalCorrect,
            emailCount: trackingData.scenarioIds.length,
            labelClues: resultsLabels.labelClues,
            valueClues: calculatePointsForCluesIdentified(trackingData.totalCluesIdentified),
            labelBonus: resultsLabels.labelBonus,
            valueBonus: calculateBonusPoints(trackingData.totalBonusesEarned),
            labelTotal: resultsLabels.labelTotal,
            valueTotal: calculateTotalPoints(),
            unitPoints: resultsLabels.unitPoints,            
            starCount: totalCorrect >= 5 ? 3 : (totalCorrect >= 4 ? 2 : (totalCorrect >= 3 ? 1 : 0)),
            resultFlasherLabel: getResultFlasherLabel(totalCorrect),
            resultNextLevel: totalCorrect >= 5 && levelOfDifficulty < 3 ? resultsLabels.resultNextLevel : '',
            labelNext: resultsLabels.labelNext
          },
          resultsUI = resultsTemplate(resultsData);
      
      jqueryHandles.$uiTarget.hide().html(resultsUI).fadeIn("slow"); //, function() {jqueryHandles.$uiTarget.focus()});
  }
  
  function getResultFlasherLabel(totalCorrect) {
    var resultsLabels = settings.labels.results,
        label,
        resultNextLevel = "";
    
    if (totalCorrect < 3) {
      label = resultsLabels.result0to2;
    } else if (totalCorrect === 3) {
      label = resultsLabels.result3;
    } else if (totalCorrect === 4) {
      label = resultsLabels.result4;
    } else if (totalCorrect >= 5) {
      label = resultsLabels.result5;
    }
    
    return label;
  }
  
  function renderScenario() {
    var labels = settings.labels,
        currentScenario = scenarios[trackingData.currentScenario.index];
    
    if (_.isUndefined(currentScenario.content)) {
      currentScenario.loadContent(scenarioContentLoaded);
    } else {
      scenarioContentLoaded(currentScenario.content);
    }
  }
  
  function scenarioContentLoaded(content) {
    var labels = settings.labels,
        gameLabels = labels.game,
        currentScenario = trackingData.currentScenario,
        mode = currentScenario.mode,
        scenarioNumber = (currentScenario.index + 1),
        scenarioCount = trackingData.scenarioIds.length,
        isLastScenario = scenarioNumber >= scenarioCount,
        instructions = mode === CONSTANTS.MODE.IDENTIFY_CLUES ? labels.identifyClues.instructions : labels.identifyType.instructions,
        templateData = {
          questionNumber: gameLabels.email + ' ' + scenarioNumber + ' ' + gameLabels.emailOf + ' ' + scenarioCount,
          instructions: instructions,
          content: content
        },
        processedContent = scenarioTemplate(templateData),
        wasSavedAttempt = isSavedAttempt;
    
    jqueryHandles.$scenarioWrapper.html(processedContent);
    
    initializeScenario();
    
    if (mode === CONSTANTS.MODE.IDENTIFY_TYPE) {
      jqueryHandles.$clueIndicators.hide();
      hideAllButtons();
      
      // Show feedback, if resuming from Quit and that is where we left off (answer selected, but mode is still identify type)
      if (isSavedAttempt) {
        isSavedAttempt = false;
        
        if (currentScenario.typeSelected !== CONSTANTS.NOT_ATTEMPTED) {
          showIdentifyTypeFeedback();
        } else {
          // If not showing feedback, then show buttons
          jqueryHandles.$identifyTypeButtons.slideDown('fast');
        }
      } else {
        // If not showing feedback, then show buttons
        jqueryHandles.$identifyTypeButtons.slideDown('fast');
      }
    } else if (mode === CONSTANTS.MODE.IDENTIFY_CLUES) {
      jqueryHandles.$clueIndicators.slideDown('fast');
      showIdentifyCluesButton();
      
      
      
      // Mark previously selected items, and even disable the interaction, if applicable
      if (isSavedAttempt) {
        isSavedAttempt = false;
        
        var $mailDialog = $('#mailDialog'),
            $potentialClues = $mailDialog.find(".potential-clue");
        
        // Loop through previously selected clues, displaying feedback classes and remove their button properties
        for (var i = 0; i < currentScenario.cluesSelected.length; i++) {
          var clueSelectedIndex = parseInt(currentScenario.cluesSelected[i]),
              $clueElement = null,
              isCorrect = false;
          
          $potentialClues.each(function() {
            var $potentialClue = $(this);
            
            if ($potentialClue.data('index') === clueSelectedIndex) {
              $clueElement = $potentialClue;
            }
          });
          
          if ($clueElement.length) {
            isCorrect = $clueElement.data('clue') === true;
            
            disableSelectedPotentialClue($clueElement);
          }
          updateFindClueAttempts(i + 1, isCorrect);
        }
        
        // Ensure the clue found indicators are accurate
        for (var j = 0; j < currentScenario.numCluesIdentified; j++) {
          updateCluesFound(j + 1);
        }
        
        // Disable Identify-Clues Mode, if applicable
        disableIdentifyCluesModeIfApplicable();
        showIdentifyCluesDisabledFeedbackIfApplicable();
      }
    }
    
    if (jqueryHandles.$feedbackWrapper.is(':visible')) {
      jqueryHandles.$feedbackWrapper.slideUp('fast');
    }
    jqueryHandles.$scenarioWrapper.slideDown('fast', function() {
      //jqueryHandles.$scenarioWrapper.focus();
      if (mode === CONSTANTS.MODE.IDENTIFY_CLUES && !wasSavedAttempt) {
        showScenarioInstructions();
      }
    });
  }
  
  function showIdentifyCluesButton() {
    var currentScenario = trackingData.currentScenario,
        scenarioNumber = (currentScenario.index + 1),
        scenarioCount = trackingData.scenarioIds.length,
        isLastScenario = scenarioNumber >= scenarioCount;
    
    hideAllButtons();
    
    if (isLastScenario) {
      jqueryHandles.$resultsButton.slideDown('fast');
    } else {
      jqueryHandles.$nextEmailButton.slideDown('fast');
    }
  }
  
  function identifyTypeFeedbackLoaded(content) {
    jqueryHandles.$scenarioWrapper.slideUp('fast');
    jqueryHandles.$feedbackWrapper.html(content).slideDown('fast'); //, focusOnFeedback);
    hideAllButtons();
  }
  
  function identifyClueFeedbackLoaded(content) {
    jqueryHandles.$scenarioWrapper.slideUp('fast');
    jqueryHandles.$feedbackWrapper.html(content).slideDown('fast'); //, focusOnFeedback);
    hideAllButtons();
  }
  
  //function focusOnFeedback() {
  //  jqueryHandles.$feedbackWrapper.focus();
  //}
  
  function showCorrectFeedbackAlert(message, callback) {
    showFeedbackAlert("correct", message, callback);
  }
  
  function showIncorrectFeedbackAlert(message, callback) {
    showFeedbackAlert("incorrect", message, callback);
  }
  
  function showFeedbackAlert(type, message, callback) {
    var data = {
          alertType: type === "correct" ? "success" : "danger",
          feedbackType: type,
          message: message
        };
    
    
    jqueryHandles.$feedbackAlert.html(feedbackAlertTemplate(data));
    
    if (jqueryHandles.$feedbackAlert.is(":visible")) {
      var $alert = jqueryHandles.$feedbackAlert.find(".alert").addClass("highlight");
      setTimeout(function() {
        $alert.removeClass("highlight");
      }, 200);
    } else {      
      jqueryHandles.$feedbackAlert.slideDown("fast", function() {
        callback && callback();
      });
    }
    //clearFeedbackAlert();
  }
  
  function clearFeedbackAlert(callback) {
    if (jqueryHandles.$feedbackAlert.is(":visible")) {
      var $alert = jqueryHandles.$feedbackAlert.slideUp("fast", function() {
        callback && callback();
      });
    }
    //jqueryHandles.$feedbackAlert.hide().find(".alert").remove();
    //callback && callback();
  }
  
  function hideScenarioInstructions() {
    jqueryHandles.$scenarioWrapper.find('.instructions').slideUp("fast");
  }
  
  function showScenarioInstructions() {
    var $instructions = jqueryHandles.$scenarioWrapper.find('.instructions').hide();
    
    setTimeout(function() {
      $instructions.slideDown("fast");
    }, 500);
  }
  
  function hideAllButtons() {
    jqueryHandles.$allButtons.hide();
  }
  
  function attachEventHandlers() {
    jqueryHandles.$uiTarget.on('click', '#btnContinue', function(e) {
      // This button is used in feedback during Identify Type mode
      var currentScenario = trackingData.currentScenario,
          isPhishingEmail = currentScenario.isPhishingEmail,
          hasSelectedPhishing = currentScenario.typeSelected === CONSTANTS.TYPE.PHISHING,
          isCorrect = (isPhishingEmail && hasSelectedPhishing) || (!isPhishingEmail && !hasSelectedPhishing);
      
      // Hide the audio transcript, if applicable
      NarrationController.hidePlayer();
      
      if ((isCorrect && !isPhishingEmail) || !isCorrect) {
        nextScenario();
      } else {
        identifyCluesMode();
      }
    }).on('click', '#btnBackToScenario', function(e) {
      // This button is used in feedback during Identify Clues mode
      jqueryHandles.$feedbackWrapper.slideUp('fast');
      jqueryHandles.$scenarioWrapper.slideDown('fast');
      showIdentifyCluesButton();
      
      // Hide the audio transcript, if applicable
      NarrationController.hidePlayer();
    }).on('click', '#btnNextEmail', function(e) {
      // This button is only visible during Identify Clues mode
      clearFeedbackAlert();
      setCMIInteractionForIdentifyClues();
      nextScenario();
      jqueryHandles.$uiTarget.focus();
    }).on('click', '#btnResults', function(e) {
      // This button is only visible during Identify Clues mode
      clearFeedbackAlert();
      setCMIInteractionForIdentifyClues();
      nextScenario();
      jqueryHandles.$uiTarget.focus();
    }).on('click', '#btnRetry', function(e) {
      // This button is only visible on the Results screen
      settings.onRetry && settings.onRetry();
    }).on('click', '#btnNext', function(e) {
      // This button is only visible on the Results screen
      settings.onNext && settings.onNext();
    }).on('click', '.identify-type-button', function() {
      var currentScenario = trackingData.currentScenario,
          isPhishingEmail = currentScenario.isPhishingEmail,
          isReportThisEmailButton = this.id === "btnReportThisEmail",
          isCorrect = (isPhishingEmail && isReportThisEmailButton) || (!isPhishingEmail && !isReportThisEmailButton),
          feedbackId = isReportThisEmailButton ? currentScenario.phishingFeedbackId : currentScenario.safeFeedbackId;
      
      // Catch multiple submits, in attempt to squash bug where totalCorrect goes above max number of questions
      if (currentScenario.typeSelected === CONSTANTS.NOT_ATTEMPTED) {
        currentScenario.typeSelected = isReportThisEmailButton ? CONSTANTS.TYPE.PHISHING : CONSTANTS.TYPE.SAFE;
        currentScenario.isCorrect = isCorrect;
        
        if (isCorrect) {
          trackingData.totalCorrect += 1;
          trackingData.correctInARow += 1;
          
          if (trackingData.totalCorrect > scenarios.length) { // Limit totalCorrect, in attempt to squash bug where totalCorrect goes above max number of questions
            trackingData.totalCorrect = 5;
          }
          
          if (trackingData.correctInARow >= 3 && trackingData.correctInARow <= scenarios.length) { // Changed bonus threshold from 5 to 3, after changing number of emails from 10 to 5.
            trackingData.totalBonusesEarned += 1;
            currentScenario.bonusEarned = true;
          }
          SFXController.playCorrect();
          
        } else {
          trackingData.correctInARow = 0;
          SFXController.playIncorrect();
        }
        
        saveData();
    
        setCMIInteractionForIdentifyType();
      }
      
      updatePoints(calculateTotalPoints());
      
      showIdentifyTypeFeedback();
      
      jqueryHandles.$pointsIndicators.focus();
    }).on('click keypress', '#mailDialog .potential-clue', function(event) {
      
        // Debug Enter keypress event in IE
        // Findings: Enter is fired first one or several times, but then stops work.  Spacebar is consistent method of activiating buttons on IE.
        //console.log("event type " + event.type);
        //console.log("event.which " + event.which);
      if (event.type === "keypress") {
        if (event.which !== 32 && event.which !== 13) {
          return;
        }
      }
      
      var currentScenario = trackingData.currentScenario,
          $this = $(this),
          clueIndex = $this.data('index');
      
      if (currentScenario.mode === CONSTANTS.MODE.IDENTIFY_CLUES) {
        if (currentScenario.numCluesIdentified < 3 && currentScenario.clueAttempts.length < 5 && currentScenario.cluesSelected.indexOf(clueIndex) === -1) { // Added check to ensure clue wasn't already selected
          var feedbackId = $this.data('feedbackId'),
              //clueIndex = $this.data('index'),
              isCorrect = $this.data('clue'),
              labels = settings.labels,
              identifyCluesLabels = labels.identifyClues,
              isLastScenario = currentScenario.index >= scenarios.length - 1,
              buttonToClickFeedback = isLastScenario ? identifyCluesLabels.feedbackResultsButton : identifyCluesLabels.feedbackNextEmailButton;
          
          disableSelectedPotentialClue($this);
          
          hideTooltip();
          
          currentScenario.clueAttempts.push(isCorrect ? 1 : 0);
          currentScenario.numCluesIdentified += isCorrect ? 1 : 0;
          trackingData.totalCluesIdentified += isCorrect ? 1 : 0;
          currentScenario.cluesSelected.push(clueIndex);
          
          saveData();
          
          if (isCorrect) {
            SFXController.playCorrect();
          } else {
            SFXController.playIncorrect();
          }

          disableIdentifyCluesModeIfApplicable();
          
          updatePoints(calculateTotalPoints());
          updateCluesFound(currentScenario.numCluesIdentified);
          updateFindClueAttempts(currentScenario.clueAttempts.length, isCorrect);
          
          if (feedbackId) {
            showIdentifyCluesDisabledFeedbackIfApplicable();
            scenarios[currentScenario.index].loadFeedback(feedbackId, identifyClueFeedbackLoaded);
          } else {
            // Show feedback alert
            var feedbackLabels = labels.feedback,
                feedbackMessage = isCorrect ? feedbackLabels.labelCorrect : feedbackLabels.labelIncorrect;
            
            if (currentScenario.numCluesIdentified >= 3) {
              // Enough clues found
              feedbackMessage = feedbackMessage + ' ' + identifyCluesLabels.feedbackFoundThreeClues + ' ' + buttonToClickFeedback;
            } else if (currentScenario.clueAttempts.length >= 5) {
              // No more attempts
              feedbackMessage = feedbackMessage + ' ' + identifyCluesLabels.feedbackNoMoreAttempts + ' ' + buttonToClickFeedback;
            }
            
            if (isCorrect) {
              showCorrectFeedbackAlert(feedbackMessage);
            } else {
              showIncorrectFeedbackAlert(feedbackMessage);
            }
          }
        }
      }
      
      jqueryHandles.$clueIndicators.focus();
      
      return false;
    }).on("click", ".alert-feedback .mfp-close", function(event) {
      clearFeedbackAlert();
    })
      .on("mouseenter focusin", ".sample-external-link", showTooltipSampleLink)
      .on("mouseleave focusout", ".sample-external-link", hideTooltip);
  }
  
  function showIdentifyTypeFeedback() {
    var currentScenario = trackingData.currentScenario,
        isPhishingEmail = currentScenario.isPhishingEmail,
        isReportThisEmailButton = currentScenario.typeSelected === CONSTANTS.TYPE.PHISHING,
        isCorrect = (isPhishingEmail && isReportThisEmailButton) || (!isPhishingEmail && !isReportThisEmailButton),
        feedbackId = isReportThisEmailButton ? currentScenario.phishingFeedbackId : currentScenario.safeFeedbackId;
    
    currentScenario.isCorrect = isCorrect;
    
    if (feedbackId) {
      // Show separate feedback
      scenarios[currentScenario.index].loadFeedback(feedbackId, identifyTypeFeedbackLoaded);
    } else {
      // Show feedback alert
      var labels = settings.labels,
          feedbackLabels = labels.feedback,
          identifyCluesLabels = labels.identifyClues,
          feedbackMessage = isCorrect ? feedbackLabels.labelCorrect : feedbackLabels.labelIncorrect,
          isLastScenario = currentScenario.index >= scenarios.length - 1,
          nextButtonMessage = isLastScenario ? identifyCluesLabels.feedbackResultsButton : identifyCluesLabels.feedbackNextEmailButton;
      
      if (isCorrect) {
        if (isPhishingEmail) {
          identifyCluesMode();
        } else {
          feedbackMessage = feedbackMessage + " " + nextButtonMessage;
          showIdentifyCluesButton();
        }
        showCorrectFeedbackAlert(feedbackMessage);
      } else {
        feedbackMessage = feedbackMessage + " " + nextButtonMessage;
        showIncorrectFeedbackAlert(feedbackMessage);
        showIdentifyCluesButton();
      }
      
      // Always hide the instructions
      hideScenarioInstructions();
    }
  }
  
  function disableSelectedPotentialClue($potentialClue) {
    var isCorrect = $potentialClue.data('clue'),
        spanClass = isCorrect ? 'clue-found' : 'clue-missed';
    
    $potentialClue.removeClass("potential-clue")
         .removeClass("sample-external-link")
         .addClass("disabled " + spanClass)
         .attr("aria-disabled", "true")
         .attr("tabindex", "-1")
         .find(".sample-external-link")
           .removeClass("sample-external-link")
           .removeAttr("role")
           .attr("aria-disabled", "true")
           .attr("tabindex", "-1");
  }
  
  function showIdentifyCluesDisabledFeedbackIfApplicable() {
    var currentScenario = trackingData.currentScenario,
        labels = settings.labels,
        identifyCluesLabels = labels.identifyClues,
        isLastScenario = currentScenario.index >= scenarios.length - 1,
        buttonToClickFeedback = isLastScenario ? identifyCluesLabels.feedbackResultsButton : identifyCluesLabels.feedbackNextEmailButton;
    
    if (currentScenario.numCluesIdentified >= 3) {
      // Enough clues found
      addScenarioSuccessAlert(identifyCluesLabels.feedbackFoundThreeClues + ' ' + buttonToClickFeedback);
    } else if (currentScenario.clueAttempts.length >= 5) {
      // No more attempts
      addScenarioInfoAlert(identifyCluesLabels.feedbackNoMoreAttempts + ' ' + buttonToClickFeedback);
    }
  }
  
  function disableIdentifyCluesModeIfApplicable() {
    var currentScenario = trackingData.currentScenario;
    
    if (currentScenario.numCluesIdentified >= 3 || currentScenario.clueAttempts.length >= 5) {
      // Enough clues found OR No more attempts available
      disableIdentifyCluesMode();
      hideScenarioInstructions();
    }
  }
  
  function findSampleLinkHref($el) {
    if ($el.hasClass("sample-external-link")) {
      return $el.data("href");
    }
    
    return $el.closest('.sample-external-link').data("href");
  }
  
  function showTooltipSampleLink(event) {
    var $el = $(event.target),
        tooltipContent = findSampleLinkHref($el),
        isKeyboardFocus = event.type === "focusin",
        offset = $el.offset(),
        tooltipX = isKeyboardFocus ? offset.left : event.pageX,
        tooltipY = isKeyboardFocus ? offset.top + $el.height() : event.pageY,
        windowWidth = $(window).width() - 8, // Allow a bit of space between the tooltip and the edge
        minWidth = windowWidth < 400 ? windowWidth : 400,
        maxWidth = windowWidth - tooltipX;
    
    if (maxWidth < minWidth) {
      tooltipX = tooltipX - (minWidth - maxWidth);
      maxWidth = minWidth;
    }
    
    $('div.sample-tooltip').remove();
    $('<div class="sample-tooltip dont-break-out"></div>').text(tooltipContent).appendTo('body').css({top: tooltipY + "px", left: tooltipX + "px", maxWidth: maxWidth + "px"});
  }
  
  function hideTooltip(event) {
    $('div.sample-tooltip').remove();
  }
  
  function addScenarioSuccessAlert(message) {
    addScenarioAlert('success', message);
  }
  
  function addScenarioInfoAlert(message) {
    addScenarioAlert('info', message);
  }
  
  function addScenarioAlert(type, message) {
    setTimeout(function() {
      var $alert = $('<div class="alert alert-' + type + '" role="alert"><p>' + message + '</p></div>');
      
      $alert.insertAfter('#scenarioWrapper .instructions').hide().slideDown("slow");
    }, 1000);
  }
  
  function nextScenario() {
    if (trackingData.currentScenario.index >= scenarios.length - 1) {
      trackingData.quizFinished = true;
      setCMIObjective(false, true);
      settings.onComplete && settings.onComplete();
    } else {
      var currentScenario = trackingData.currentScenario;
      
      // Reset current scenario tracking data and game UI
      currentScenario.index = currentScenario.index + 1;
      currentScenario.mode = CONSTANTS.MODE.IDENTIFY_TYPE;
      currentScenario.typeSelected = CONSTANTS.NOT_ATTEMPTED;
      currentScenario.clueAttempts = [];
      resetFindClueAttempts();
      currentScenario.numCluesIdentified = 0;
      resetCluesFound();
      currentScenario.cluesSelected = [];
      currentScenario.bonusEarned = false;
      delete currentScenario.isPhishingEmail;
      delete currentScenario.numClues;
      delete currentScenario.phishingFeedbackId;
      delete currentScenario.safeFeedbackId;
      delete currentScenario.isCorrect;
      delete currentScenario.activityStart;
      delete currentScenario.clueIndexes;
    }
    
    saveData();
    render();
  }
  
  function identifyCluesMode() {
    trackingData.currentScenario.mode = CONSTANTS.MODE.IDENTIFY_CLUES;
    saveData();
    render();
  }
  
  function initializeScenario() {
    var $clueElements = jqueryHandles.$scenarioWrapper.find('[data-clue="true"]'),
        $potentialClueElements = jqueryHandles.$scenarioWrapper.find('[data-feedback-id], [data-potential-clue]'),
        potentialClueCount = $potentialClueElements.length,
        isPhishingEmail = potentialClueCount > 0,
        currentScenario = trackingData.currentScenario,
        mode = currentScenario.mode,
        isIdentifyTypeMode = mode === CONSTANTS.MODE.IDENTIFY_TYPE,
        $mailDialog = $('#mailDialog');
    
    // Save data in scenario object
    currentScenario.isPhishingEmail = isPhishingEmail;
    currentScenario.numClues = $clueElements.length;
    currentScenario.phishingFeedbackId = $mailDialog.data('feedbackIdPhishing');
    $mailDialog.removeAttr('data-feedback-id-phishing');
    currentScenario.safeFeedbackId = $mailDialog.data('feedbackIdSafe');
    $mailDialog.removeAttr('data-feedback-id-safe');
    trackingData.scenarioTypes[currentScenario.index] = isPhishingEmail ? CONSTANTS.TYPE.PHISHING : CONSTANTS.TYPE.SAFE;
    currentScenario.activityStart = getTimestamp();
    currentScenario.clueIndexes = [];
    
    if (isIdentifyTypeMode) {
      $mailDialog.addClass(CONSTANTS.CSS.MODE_IDENTIFY_TYPE);
      $potentialClueElements.not("a").contents().unwrap();
      $potentialClueElements.filter("a").removeAttr("data-feedback-id").removeAttr("data-potential-clue").removeAttr("data-clue");
      replaceSampleLinks($mailDialog);
    } else {
      $mailDialog.addClass(CONSTANTS.CSS.MODE_IDENTIFY_CLUES);
      $potentialClueElements.each(function(index, el) {
        var $el = $(el),
            feedbackId = $el.data("feedbackId"),
            isCorrect = $el.data("clue") === true,
            isLink = $el.is("a"),
            $clueButton = $('<span></span>')
                            .addClass("potential-clue")
                            .attr({
                              role: "button",
                              "aria-disabled": "false",
                              tabindex: "0"
                            })
                          .data('feedbackId', feedbackId)
                          .data('clue', isCorrect)
                          .data('index', index);
            
        if (isCorrect) {
          currentScenario.clueIndexes.push(index);
        }
        
        if (isLink) {
          var label = $el.html(),
              href = $el.attr("href");
          
          sampleLinkSetup($clueButton, label, href);
          $el.replaceWith($clueButton);
        } else {
          $el.wrap($clueButton).contents().unwrap();
        }
      });
      
      replaceSampleLinks($mailDialog.find(".potential-clue"));
    }
  }
  
  function replaceSampleLinks($potentialClues) {
    $potentialClues.find("a").each(function() {
      var $link = $(this),
          label = $link.html(),
          href = $link.attr("href"),
          $newLink = $('<span></span>')
                        .attr({
                          role: "button",
                          "aria-disabled": "false",
                          tabindex: "0"
                        });
      
      sampleLinkSetup($newLink, label, href);
      $newLink.insertBefore($link);
      $link.remove();
    });
  }
  
  function sampleLinkSetup($el, label, href) {
    var ariaLabel = Labels.game.sampleLinkAria.replace("{{linkLabel}}", label).replace("{{linkHref}}", href),
        hiddenText = '<span class="wb-inv"> ' + ariaLabel + '</span>';
    
    $el.html(label + hiddenText)
       .addClass("sample-external-link")
       .data("href", href);
  }
  
  function disableIdentifyCluesMode() {
    var $potentialClueElements = jqueryHandles.$scenarioWrapper.find('.potential-clue').removeClass('potential-clue').removeClass('disabled').removeAttr("role").removeAttr("aria-disabled").attr("tabindex","-1"),
        $sampleLinks = jqueryHandles.$scenarioWrapper.find('.sample-external-link').removeClass('sample-external-link').removeClass('disabled').removeAttr("role").removeAttr("aria-disabled").attr("tabindex","-1");
  }
  
  function getCMIObjectiveId(attemptNumber) {
    return "Phish_Defenders_Attempt_" + ((attemptNumber !== null) ? attemptNumber : getCMIObjectiveIndex() + 1);
  }
  
  function getCMIObjectiveIndex(isNewAttempt) {
    // If this is a new attempt use cmi.objectives._count, otherwise return count - 1, as long as it is > 0.
    var count = PhishingData.getObjectiveCount(),
        objectiveIndex = isNewAttempt === true || count === 0 ? count : count - 1;
    
    return objectiveIndex;
  }
  
  function setCMIObjective(isNewAttempt, isComplete) {
    var index = getCMIObjectiveIndex(isNewAttempt);
    
    if (isComplete === true) {
      // For SCORM score data elements, the raw score value must be normalized between 0 and 100
      // Bonus points allow the score to go higher than the maximum score
      var scoreRatio = 100 / calculateMaxPointsExcludingBonuses(),
          normalizedScore = calculateTotalPoints() * scoreRatio,
          rawScore = normalizedScore > 100 ? 100 : normalizedScore,
          minScore = 0,
          maxScore = 100;
      
      PhishingData.completeObjective(index, rawScore, minScore, maxScore);
    } else {
      PhishingData.initializeObjective(index, getCMIObjectiveId(index + 1));
    }
  }
  
  function setCMIInteractionForIdentifyType() {
    var idSuffix = '_Identify_Type',
        currentScenario = trackingData.currentScenario,
        type = 'true-false',
        correctResponses = [currentScenario.isPhishingEmail ? 't' : 'f'],
        studentResponse = currentScenario.typeSelected === CONSTANTS.TYPE.PHISHING ? 't' : 'f',
        result = calculateCurrentScenarioIdentifyTypePoints() + '.0';
    
    setCMIInteraction(idSuffix, type, correctResponses, studentResponse, result);
  }
  
  function getIdentifyCluesStudentResponse() {
    var currentScenario = trackingData.currentScenario,
        cluesSelected = currentScenario.cluesSelected,
        clueIndexes = currentScenario.clueIndexes,
        studentCorrectResponseArray = [];
        
    for (var i = 0; i < clueIndexes.length; i++) {
      for (var j = 0; j < cluesSelected.length; j++) {
        if (cluesSelected[j] === clueIndexes[i]) {
          studentCorrectResponseArray.push(String.fromCharCode(97 + i));
        }
      }
    }
    
    return studentCorrectResponseArray.join(',');
  }
  
  function setCMIInteractionForIdentifyClues() {
    var idSuffix = '_Identify_Clues',
        type = 'choice',
        correctResponses = getIdentifyCluesCorrectResponsePatterns(),
        studentResponse = getIdentifyCluesStudentResponse(),
        result = calculateCurrentScenarioIdentifyCluesPoints() + '.0';
    
    setCMIInteraction(idSuffix, type, correctResponses, studentResponse, result);
  }
  
  function setCMIInteraction(idSuffix, type, correctResponses, studentResponse, result) {
    var currentScenario = trackingData.currentScenario,
        id = 'Slide_' + trackingData.scenarioIds[currentScenario.index] + idSuffix,
        objectiveIds = [getCMIObjectiveId(null)],
        weighting = 1,
        time = formatTime(new Date()),
        latency = formatTimespan(getTimestamp() - trackingData.currentScenario.activityStart);
    
    PhishingData.recordInteraction(id, objectiveIds, type, weighting, correctResponses, studentResponse, result, latency, time);
  }
  
  function getIdentifyCluesCorrectResponsePatterns() {
    var arrayOfLetters = getArrayOfLetters(trackingData.currentScenario.clueIndexes.length),
        subsets = getSubArrays(arrayOfLetters, 3);
    
    return _.map(subsets, function(value, index, list) {
      return value.join(',');
    });
  }
  
  // The following is a tweaked version of https://stackoverflow.com/questions/5752002/find-all-possible-subset-combos-in-an-array#5752056
  function getSubArrays(a, size) {
    var fn = function(n, src, got, all) {
          if (n == 0) {
            if (got.length > 0) {
              all[all.length] = got;
            }
            return;
          }
          for (var j = 0; j < src.length; j++) {
            fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
          }
          return;
        },
        all = [];
    
    for (var i = size; i < a.length; i++) {
      fn(i, a, [], all);
    }
    if (a.length === size) {
      all.push(a);
    }
    return all;
  }
  
  function getArrayOfLetters(arrayLength) {
    var arrayOfLetters = [];
    
    for (var i = 0; i < arrayLength; i++) {
      arrayOfLetters.push(String.fromCharCode(97 + i));
    }
    
    return arrayOfLetters;
  }
  
  function saveData() {
    var data = serializeData();
    
    PhishingData.setData(settings.suspendDataId, data);
  }
  
  function loadSavedData() {
    var savedData = PhishingData.getData(settings.suspendDataId);
    
    if (savedData) {
      deserializeData(savedData);
    }
  }
  
  function deserializeData(data) {
    var dataArray = data.split(CONSTANTS.SERIALIZE_SEPARATOR);
    
    if (dataArray.length > 0) {
      trackingData.scenarioIds = dataArray[0].length ? dataArray[0].split(CONSTANTS.ARRAY_SEPARATOR) : [];
      trackingData.currentScenario.index = parseInt(dataArray[1]);
      trackingData.currentScenario.mode = parseInt(dataArray[2]);
      trackingData.currentScenario.typeSelected = parseInt(dataArray[3]);
      trackingData.currentScenario.clueAttempts = dataArray[4].length ? convertArrayOfStringsToArrayOfInts(dataArray[4].split(CONSTANTS.ARRAY_SEPARATOR)) : [];
      trackingData.currentScenario.numCluesIdentified = parseInt(dataArray[5]);
      trackingData.currentScenario.cluesSelected = dataArray[6].length ? convertArrayOfStringsToArrayOfInts(dataArray[6].split(CONSTANTS.ARRAY_SEPARATOR)) : [];
      trackingData.currentScenario.bonusEarned = dataArray[7] === '1';
      trackingData.totalCorrect = parseInt(dataArray[8]);
      trackingData.correctInARow = parseInt(dataArray[9]);
      trackingData.totalBonusesEarned = parseInt(dataArray[10]);
      trackingData.totalCluesIdentified = parseInt(dataArray[11]);
      trackingData.quizFinished = dataArray[12] === '1';
      trackingData.scenarioTypes = dataArray[13].length ? convertArrayOfStringsToArrayOfInts(dataArray[13].split(CONSTANTS.ARRAY_SEPARATOR)) : [];
    }
  }
  
  function convertArrayOfStringsToArrayOfInts(stringArray) {
    var intArray = [];
    
    for (var i = 0; i < stringArray.length; i++) {
      if (stringArray[i] !== '') {
        intArray.push(parseInt(stringArray[i]));
      }
    }
    
    return intArray;
  }
  
  function serializeData() {
    var dataArray = [
      trackingData.scenarioIds.join(CONSTANTS.ARRAY_SEPARATOR),
      trackingData.currentScenario.index,
      trackingData.currentScenario.mode,
      trackingData.currentScenario.typeSelected,
      trackingData.currentScenario.clueAttempts.join(CONSTANTS.ARRAY_SEPARATOR),
      trackingData.currentScenario.numCluesIdentified,
      trackingData.currentScenario.cluesSelected.join(CONSTANTS.ARRAY_SEPARATOR),
      trackingData.currentScenario.bonusEarned ? 1 : 0,
      trackingData.totalCorrect,
      trackingData.correctInARow,
      trackingData.totalBonusesEarned,
      trackingData.totalCluesIdentified,
      trackingData.quizFinished ? 1 : 0,
      trackingData.scenarioTypes.join(CONSTANTS.ARRAY_SEPARATOR)
    ];
    
    return dataArray.join(CONSTANTS.SERIALIZE_SEPARATOR);
  }
  
  function getInitialTrackingObject() {
    return  {
              scenarioIds: [],
              currentScenario: {
                index: 0,
                mode: CONSTANTS.MODE.IDENTIFY_TYPE, 
                typeSelected: CONSTANTS.NOT_ATTEMPTED,
                clueAttempts: [], // 0 or 1 for each attempt made
                numCluesIdentified: 0,
                cluesSelected: [], // indexes
                bonusEarned: false
              },
              totalCorrect: 0,
              correctInARow: 0,
              totalBonusesEarned: 0,
              totalCluesIdentified: 0,
              quizFinished: false,
              scenarioTypes: []
            };
  }
  
  function extractScenarioIds(scenarios) {
    var scenarioIds = [];
    
    for (var i = 0; i < scenarios.length; i++) {
      scenarioIds.push(scenarios[i].id);
    }
    
    return scenarioIds;
  }
  
  function calculateMaxPointsExcludingBonuses() {
    var numPhishingScenarios = 0;
	
    for (var i = 0; i < trackingData.scenarioTypes.length; i++) {
	  if (trackingData.scenarioTypes[i] === CONSTANTS.TYPE.PHISHING) {
        numPhishingScenarios = numPhishingScenarios + 1;
      }
    }
	
    return calculatePointsForTypesIdentified(numPhishingScenarios) + calculatePointsForCluesIdentified(numPhishingScenarios * 3);
  }
  
  function calculateTotalPoints() {
    return calculatePointsForTypesIdentified(trackingData.totalCorrect) + calculateBonusPoints(trackingData.totalBonusesEarned) + calculatePointsForCluesIdentified(trackingData.totalCluesIdentified);
  }
  
  function calculateCurrentScenarioPoints() {
    return calculateCurrentScenarioIdentifyTypePoints() + calculateCurrentScenarioIdentifyCluesPoints();
  }
  
  function calculateCurrentScenarioIdentifyTypePoints() {
    var currentScenario = trackingData.currentScenario,
        hasAttempted = currentScenario.typeSelected !== CONSTANTS.NOT_ATTEMPTED,
        points = 0;
    
    if (hasAttempted) {
      var phishingSelected = currentScenario.typeSelected === CONSTANTS.TYPE.PHISHING,
          safeSelected = currentScenario.typeSelected === CONSTANTS.TYPE.SAFE,
          isPhishingEmail = currentScenario.isPhishingEmail,
          isTypeIdentified = (isPhishingEmail && phishingSelected) || (!isPhishingEmail && safeSelected);
      
      if (isTypeIdentified) {
        points += calculatePointsForTypesIdentified(1);
        points += calculateBonusPoints(currentScenario.bonusEarned ? 1 : 0);
      }
    }
    
    return points;
  }
  
  function calculateCurrentScenarioIdentifyCluesPoints() {
    var currentScenario = trackingData.currentScenario;
    
    if (currentScenario.numCluesIdentified > 0) {
      return calculatePointsForCluesIdentified(currentScenario.numCluesIdentified);
    }
    
    return 0;
  }
  
  function calculatePointsForTypesIdentified(numTypesIdentified) {
    return numTypesIdentified * settings.pointsPerTypeIdentified;
  }
  
  function calculateBonusPoints(numBonusesEarned) {
    return numBonusesEarned * settings.pointsPerFiveCorrectTypesInARow;
  }
  
  function calculatePointsForCluesIdentified(numCluesIdentified) {
    return numCluesIdentified * settings.pointsPerClueIdentified;
  }
  
  function resetSavedData() {
    // Tracking object has just been initialized, so just save the data
    saveData();
  }
  
  // Return a time in milliseconds since Jan 1, 1970
  function getTimestamp() {
    var d = new Date(),
      timestamp = d.getTime();

    return timestamp;
  }
  
  // Return the standard time format expected by SCORM.
  function formatTime(dateObject) {
    var d = dateObject || new Date(),
        hours = d.getHours(),
        minutes = d.getMinutes(),
        seconds = d.getSeconds();
    
    return formatTimeHMS(hours, minutes, seconds);
  }
  
  // Return the standard time format expected by SCORM.
  function formatTimeHMS(hours, minutes, seconds) {
    var hh = Utils.pad(hours, 2),
        mm = Utils.pad(minutes, 2),
        ss = Utils.pad(seconds, 2);
    
    return hh + ":" + mm + ":" + ss;
  }

  // Return a timespan into the standard format expected by SCORM.
  function formatTimespan(timespan) {
    var secondsFactor = 1000,
      minutesFactor = secondsFactor * 60,
      hoursFactor = minutesFactor * 60,
      hours = Math.floor(timespan / hoursFactor),
      afterHours = timespan - (hours * hoursFactor),
      minutes = Math.floor(afterHours / minutesFactor),
      afterMinutes = afterHours - (minutes * minutesFactor),
      seconds = Math.floor(afterMinutes / secondsFactor);
    
    return formatTimeHMS(hours, minutes, seconds);
  }
  
  function updatePoints(points) {
    $('#totalPoints').html(points);
  }
  
  function updateCluesFound(numCluesIdentified) {
    var labels = Labels.identifyClues;
    
    $('#clueFoundIndicator' + numCluesIdentified).addClass('found').attr('title', getTextForIndex(numCluesIdentified, "masculin") + ' ' + labels.clue + ' ' + labels.clueFound);
  }
  
  function resetCluesFound() {
    var labels = Labels.identifyClues;
    
    $('.clue-found-indicator').removeClass('found').each(function(index, el) {
      $(this).attr('title', getTextForIndex((index + 1), "masculin") + ' ' + labels.clue + ' ' + labels.clueNotFound);
    });
  }
  
  function getTextForIndex(index, masculinOuFeminin) {
    var labels = Labels.identifyClues;
    
    if (index === 1) {
        return masculinOuFeminin === "masculin" ? labels.firstM : labels.firstF;
    } else if (index === 2) {
        return labels.second;
    } else if (index === 3) {
        return labels.third;
    } else if (index === 4) {
        return labels.fourth;
    } else if (index === 5) {
        return labels.fifth;
    }
  }
  
  function updateFindClueAttempts(findClueAttempts, isCorrect) {
    var labels = Labels.identifyClues,
        indicatorClass = isCorrect ? 'success' : 'fail',
        foundNotFound = isCorrect ? labels.clueFound : labels.clueNotFound,
        title = getTextForIndex(findClueAttempts, "féminin") + ' ' + labels.guess + ', ' + labels.clue + ' ' + foundNotFound;
      
    $('#guessIndicator' + findClueAttempts).addClass(indicatorClass).attr('title', title);
  }
  
  function resetFindClueAttempts() {
    var labels = Labels.identifyClues;
    
    $('.guess-indicator').removeClass('success fail').each(function(index, el) {
      $(this).attr('title', getTextForIndex((index + 1), "féminin") + ' ' + labels.guess + ', ' + labels.notAttempted);
    });
  }
  
  return {
    initialize: _initialize,
    getCurrentScenarios: function() { return scenarios; },
    getScenarioBank: function() { return settings.scenarioBank; }
  };
});