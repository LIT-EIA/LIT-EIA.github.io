define(['jquery', 'logger'], function($, logger) {
  'use strict';

  var directory = 'content/module1/scenarios/',
      scenarioBankLevel1 = {
        // non-phishing scenarios with immediate feedback
        nonPhishingScenariosWithImmediateFeedback: ['2.11', '2.15', '2.35'],
        // phishing scenarios with immediate feedback
        phishingScenariosWithImmediateFeedback: ['2.19', '2.23', '2.24', '2.32'],
        // non-phishing scenarios without feedback
        nonPhishingScenariosWithoutFeedback: ['3.1', '3.2', '3.4', '3.9', '3.13', '3.16'],
        // phishing scenarios without feedback
        phishingScenariosWithoutFeedback: ['3.21', '3.22', '3.24', '3.25', '3.27', '3.29', '3.30', '3.34']
      },
      scenarioBankLevel2 = {
        // non-phishing scenarios with immediate feedback
        nonPhishingScenariosWithImmediateFeedback: ['2.14', '2.16', '2.34'],
        // phishing scenarios with immediate feedback
        phishingScenariosWithImmediateFeedback: ['2.20', '2.21', '2.29', '2.30'],
        // non-phishing scenarios without feedback
        nonPhishingScenariosWithoutFeedback: ['3.3', '3.5', '3.6', '3.7', '3.14'],
        // phishing scenarios without feedback
        phishingScenariosWithoutFeedback: ['3.18', '3.20', '3.23', '3.26', '3.31', '3.32', '3.36', '3.40']
      },
      scenarioBankLevel3 = {
        // non-phishing scenarios with immediate feedback
        nonPhishingScenariosWithImmediateFeedback: ['2.17', '2.18'],
        // phishing scenarios with immediate feedback
        phishingScenariosWithImmediateFeedback: ['2.1', '2.10', '2.22', '2.31'],
        // non-phishing scenarios without feedback
        nonPhishingScenariosWithoutFeedback: ['3.8', '3.10', '3.11', '3.12', '3.15', '3.17'],
        // phishing scenarios without feedback
        phishingScenariosWithoutFeedback: ['3.19', '3.28', '3.33', '3.35', '3.37', '3.38', '3.39']
      },
      scenarioBanks = [scenarioBankLevel1, scenarioBankLevel2, scenarioBankLevel3],
      _getScenarios = function(ids, levelOfDifficulty, lang) {
        if (!ids) {
          levelOfDifficulty = parseInt(levelOfDifficulty);
          
          if (levelOfDifficulty === 1) {
            ids = selectScenarios(scenarioBankLevel1);
          } else if (levelOfDifficulty === 2) {
            ids = selectScenarios(scenarioBankLevel2);
          } else if (levelOfDifficulty === 3) {
            ids = selectScenarios(scenarioBankLevel3);
          } else {
            alert("Scenario Bank, level of difficulty not valid. Level specified: '" + levelOfDifficulty + "'");
          }
        }
        
        var scenarios = [];
        
        for (var i = 0; i < ids.length; i++) {
          scenarios.push({
            id: ids[i],
            lang: lang,
            loadContent: function(callback) {
              return loadSlideHtml(this.id, this.lang, callback);
            },
            loadFeedback: function(feedbackId, callback) {
              return loadSlideHtml(feedbackId, this.lang, callback);
            }
          });
        }
        return scenarios;
      };
  
  function _getScenarioBankForLevel(level) {
    return scenarioBanks[parseInt(level) - 1];
  }
  
  function _getScenarioBankSource(slideId) {
    var banks = scenarioBanks,
        subBanks = ["nonPhishingScenariosWithImmediateFeedback", "phishingScenariosWithImmediateFeedback", "nonPhishingScenariosWithoutFeedback", "phishingScenariosWithoutFeedback"];
    
    for (var level = 0; level < banks.length; level++) {
      var scenarioBank = banks[level];
      
      for (var s = 0; s < subBanks.length; s++) {
        var subBankName = subBanks[s],
            subBank = scenarioBank[subBankName];
        
        for (var i = 0; i < subBank.length; i++) {
          if (slideId === subBank[i]) {
            var bankNumber = subBankName.indexOf("Without") > -1 ? 2 : 1,
                subBankNumber = (level + 1),
                safeOrPhishing = subBankName.indexOf("nonPhishing") > -1 ? "Safe" : "Phishing";
            
            return "Bank " + bankNumber + "-" + subBankNumber + " (" + safeOrPhishing + ")";
          }
        }
      }
    }
  }
  
  function loadSlideHtml(slideId, lang, callback) {
    $.ajax(directory + 'slide_' + slideId + '_' + lang + '.html', {dataType: 'html'})
     .done(function(html, status, jqxhr) {
       window.loadedHtml = html;
        var pattern = /<body[^>]*>[\r\n]*([\s\S]*?)[\s\r\n]*<\/body>/im,
            matches = pattern.exec(html),
            body = matches && matches.length > 1 && matches[1];
            
        callback && callback(body || html);
     })
     .fail(function(xhr, status, err) {
       logger.warn('Message unable to load, return placeholder, error: ' + err);
     });
     
     return true;
  }

  /*function selectScenarios(scenarioBank) {
    // The first 5 scenarios consist of 2 non-phishing scenarios and 3 phishing scenarios with immediate feedback
    var set1_subSet1 = selectRandomElements(scenarioBank.nonPhishingScenariosWithImmediateFeedback, 2),
        set1_subSet2 = selectRandomElements(scenarioBank.phishingScenariosWithImmediateFeedback, 3),
        set1 = randomizeArray(set1_subSet1.concat(set1_subSet2), 5),
        //set1 = [], // for testing/development - get rid of first 5 email scenarios
        
    // The last 5 scenarios consist of 1 non-phishing scenario, 1 phishing scenario, and 3 phishing or non-phishing scenarios without immediate feedback
        set2_subSubSet1 = selectRandomElements(scenarioBank.nonPhishingScenariosWithoutFeedback, 1),
        set2_subSubSet2 = selectRandomElements(scenarioBank.phishingScenariosWithoutFeedback, 1),
        set2_subSet1 = set2_subSubSet1.concat(set2_subSubSet2),
        allScenariosWithoutFeedback = scenarioBank.nonPhishingScenariosWithoutFeedback.concat(scenarioBank.phishingScenariosWithoutFeedback),
        remainingScenariosWithoutFeedback = removeMatchingElements(allScenariosWithoutFeedback, set2_subSet1),
        set2_subSet2 = selectRandomElements(remainingScenariosWithoutFeedback, 3),
        set2 = randomizeArray(set2_subSet1.concat(set2_subSet2), 5);

    return set1.concat(set2);
  }*/
  function selectScenarios(scenarioBank) {
    // The first 3 scenarios consist of 1 non-phishing scenarios and 2 phishing scenarios with immediate feedback
    var set1_subSet1 = selectRandomElements(scenarioBank.nonPhishingScenariosWithImmediateFeedback, 1),
        set1_subSet2 = selectRandomElements(scenarioBank.phishingScenariosWithImmediateFeedback, 2),
        set1 = randomizeArray(set1_subSet1.concat(set1_subSet2), 3),
        //set1 = [], // for testing/development - get rid of first 3 email scenarios
        
    // The last 2 scenarios consist of 1 non-phishing scenario and 1 phishing scenario without immediate feedback
        set2_subSet1 = selectRandomElements(scenarioBank.nonPhishingScenariosWithoutFeedback, 1),
        set2_subSet2 = selectRandomElements(scenarioBank.phishingScenariosWithoutFeedback, 1),
        set2 = randomizeArray(set2_subSet1.concat(set2_subSet2), 2);

    return set1.concat(set2);
  }

  function selectRandomElements(elementArray, quantity) {
    var indices = getRandomIndices(elementArray.length, quantity),
      ilen = indices.length,
      randomElements = [];
    
    for (var i = 0; i < ilen; i++) {
      randomElements[i] = elementArray[indices[i]];
    }
    
    return randomElements;
  }

  function removeMatchingElements(elementArray, elementsToRemove) {
    var tempArray = elementArray.slice(0);
    
    for (var i = 0; i < elementsToRemove.length; i++) {
      for (var j = 0; j < tempArray.length; j++) {
        if (tempArray[j] === elementsToRemove[i]) {
          tempArray.splice(j, 1);
          break;
        }
      }
    }
    return tempArray;
  }


  // Returns a random selection of numbers representing array indices.
  // Optionally limits the number of indices.
  function getRandomIndices(arrayLength, quantity) {
    var indices = getArrayOfConsecutiveNumbers(arrayLength);
    
    randomizeArray(indices);
    
    if (quantity && quantity > 0 && quantity < arrayLength) {
      // select the desired quantity of indices
      indices = indices.slice(0, quantity);
    }
    
    return indices;
  }

  // Returns an array of consecutive numbers starting at zero.
  function getArrayOfConsecutiveNumbers(arrayLength) {
    var ary = [];

    for (var i = 0; i < arrayLength; i++) {
      ary[i] = i;
    }
    
    return ary;
  }

  // Randomizes the order of elements in an array.
  function randomizeArray(ary) {
    ary.sort(sortRandom);
    return ary;
  }

  // A function for Array.sort() for randomly sorting arrays.
  function sortRandom(a, b) {
    return Math.random() - 0.5;
  }
  
  return {
    getScenarios: _getScenarios,
    getScenarioBankSource: _getScenarioBankSource,
    getScenarioBankForLevel: _getScenarioBankForLevel
  };
});