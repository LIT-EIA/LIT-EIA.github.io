define(['jquery', 'content/scripts/narration-controller', 'content/scripts/sound-effects-controller', 'content/scripts/phishing-data', 'content/scripts/navigation-helper', 'utils'], 
       function($, NarrationController, SFXController, PhishingData, NavigationHelper, Utils) {
  'use strict';

  var tlResults;
  
  function teardown() {
    tlResults && tlResults.stop();
  }
  
  function setup() {
    var isMuted = PhishingData.getMuted(),
        narrationSettings = {
          multimediaComponentSelector: '#m1-6_results_Player',
          autoplay: true,
          timelineElements: [
            {object: "#resultsNarrationItem1", duration: 0.5, vars: {opacity:1}, position: 0},
            {object: "#btnRetry", duration: 0.1, vars: {opacity:1, onComplete: showResults}, position: 4.5}
          ]
        },
        numStars = parseInt($("#resultStarsList").data("stars")),
        hasNextLevelMessage = $("#resultsNextLevelMessage").text() !== "",
        currentTime = !isMuted ? 4.5 : 1,
        showResults = function() {
          tlResults.play();
        };
    
    NarrationController.setupNarration(narrationSettings);
    
    // Show the transcript
    NarrationController.showPlayer(narrationSettings.multimediaComponentSelector);
    
    // Set up animation displaying results and stars, along with sound effects
    tlResults = new TimelineLite({paused:true});
    tlResults
      .call(SFXController.playResults, [], null, currentTime) // play the audio
      .to("#resultEmails", 0.2, {opacity: 1}, currentTime + 0.2)
      .to("#resultClues", 0.2, {opacity: 1}, currentTime + 0.3)
      .to("#resultBonus", 0.2, {opacity: 1}, currentTime + 0.4)
      .to("#resultTotal", 0.2, {opacity: 1}, currentTime + 0.5);
    
    currentTime = currentTime + 0.5;
    
    if (numStars > 0) {
      currentTime = currentTime + 1;
      if (numStars === 1) {
        tlResults.call(SFXController.playOneStar, [], null, currentTime);
      } else if (numStars === 2) {
        tlResults.call(SFXController.playTwoStars, [], null, currentTime);
      } else if (numStars === 3) {
        tlResults.call(SFXController.playThreeStars, [], null, currentTime);
      }
      
      for (var s = 0; s < numStars; s++) {
        currentTime = currentTime + 0.1;
        tlResults.call(addClass, ["#resultStar" + (s + 1), "gold-star"], null, currentTime); //0.1 * (s + 1));
      }
    }
    
    currentTime = currentTime + 0.5;
    
    tlResults.from("#resultFlasher", 0.4, {scale: 3,transformOrigin:"50% 100%", ease: Power2.easeIn}, currentTime + 0.1)
             .to("#resultFlasher", 0.2, {opacity: 1, onComplete: SFXController.playFlasherResult}, currentTime + 0.1);
    
    
    if (hasNextLevelMessage) {
      currentTime = currentTime + 1;
      tlResults.from("#resultsNextLevelMessage", 0.4, {scale: 3,transformOrigin:"50% 100%", ease: Power2.easeIn}, currentTime + 0.1)
               .to("#resultsNextLevelMessage", 0.2, {opacity: 1, onComplete: SFXController.playFlasherResult}, currentTime + 0.1)
               .to("#resultsNextLevelWrapper", 0.2, {opacity: 1}, currentTime + 0.1);
    }
    
    function addClass(element, className) {
      $(element).addClass(className);
    }
    
    if (isMuted) {
      $("#narrationItem1").css({opacity: 1});
    }
    
    showResults();
    
    if (Utils.lang === "fr") {
      $("#btnRetry").addClass("nav-button-extra-wide");
    }
  }
  
  return {
    setup: setup,
    teardown: teardown
  };
});