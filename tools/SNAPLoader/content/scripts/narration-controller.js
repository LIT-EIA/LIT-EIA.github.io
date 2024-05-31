define(['jquery','./phishing-data', './sound-effects-controller', './narration-labels', 'hbs!./templates/transcript-template', 'utils', 'content/scripts/phishing-greensock'], 
       function($, PhishingData, SFXController, NarrationLabels, TranscriptTemplate, Utils, Greensock) {
  'use strict';
  var $transcriptWrapper = null,
      currentPlayer = null;
  
  function _setupNarration(settings) {
    var multimediaComponentSelector = settings.multimediaComponentSelector,
        $multimediaComponent = $(multimediaComponentSelector),
        audioElement = $multimediaComponent.find('audio').first().get(0),
        timeline = null,
        autoplay = settings.autoplay === true,
        timelineElements = settings.timelineElements || null,
        hasAnimation = timelineElements && timelineElements.length > 0,
        isPausedExternal = false,
        screenId = Utils.getStringFromArray(masterStructure.currentNav),
        volume = PhishingData.getVolume() / 100,
        isMuted = PhishingData.getMuted(),
        el = $multimediaComponent.get(0);
    
    if (el && typeof el.player === 'function') {
      // Use any previously stored value for audio volume
      el.player('setVolume', volume);
      
      // Use any previously stored value for muting audio
      el.player('setMuted', isMuted);
    }
    
    // Animate narration
    if (hasAnimation) {
        timeline = new TimelineLite({paused:true});
        
      for (var i = 0; i < timelineElements.length; i++) {
        var timelineElement = timelineElements[i];
        
        if (typeof timelineElement.position === "undefined") {
          timelineElement.position = parseFloat($(timelineElement.object).data('position'));
        }
        timeline.to(timelineElement.object, timelineElement.duration, timelineElement.vars, timelineElement.position);
      }
    
      // ## Syncing audio player and greensock animation timeline ##
      // Audio plays; play animation timeline
      audioElement.onplay = function() {
        timeline && timeline.play();
      }
      // Audio is paused; pause animation timeline
      audioElement.onpause = function() {
        timeline && timeline.pause();
      }
      // Audio progress bar jumps manually or programmatically; sync animation timeline
      audioElement.onseeked = function() {
        timeline && timeline.time(audioElement.currentTime);
      }
      // Sync audio and animation timelines
      audioElement.ontimeupdate = function() {
        timeline && timeline.time(audioElement.currentTime);
      }
    }
    if (autoplay) {
      pauseAllPlayers();
      
      if (!isPausedExternal) {
        
        if (el && typeof el.player === 'function') {
          el.player("setCurrentTime", 0);
          el.player("play");
        }
      }
    }
    
    return {
      fadeOut: function(onComplete) {
        $multimediaComponent.data('fading', true);
        Greensock.TweenMax.to(audioElement, 0.5, {volume: 0, onComplete: function() {
            var el = $multimediaComponent.get(0),
                volume = PhishingData.getVolume() / 100;
            
            $multimediaComponent.data('fading', false);
          
            if (el && typeof el.player === 'function') {
              el.player("pause");
              el.player("setCurrentTime", 0);
              el.player('setVolume', volume);
            }
            
            onComplete && onComplete();
          }
        });
      },
      stop: function() {
        isPausedExternal = true;
        if ($multimediaComponent.length) {
          var el = $multimediaComponent.get(0);
          
          if (el && typeof el.player === 'function') {
            el.player("pause");
          }
        }
      },
      play: function() {
        isPausedExternal = false;
        pauseAllPlayers();
        if ($multimediaComponent.length) {
          var el = $multimediaComponent.get(0);
          
          if (el && typeof el.player === 'function') {
            el.player("play");
          }
        }
      },
      rewind: function() {
        if ($multimediaComponent.length) {
          var el = $multimediaComponent.get(0);
          
          if (el && typeof el.player === 'function') {
            el.player("setCurrentTime", 0);
          }
        }
      }
    };
  }
    
  function _setMutedOtherPlayers($sourcePlayer, isMuted) {
    $(".wb-mltmd").not($sourcePlayer).each(function(index, el) {
      if (el && typeof el.player === 'function') {
        el.player("setMuted", isMuted);
      }
    });
  }
  
  // Ensure saved volume is applied to all players once initialized
  $( document ).on( "wb-ready.wb-mltmd", ".wb-mltmd", function( event ) {
    var wetAudio = event.target,
        volume = PhishingData.getVolume() / 100,
        isMuted = PhishingData.getMuted();
    
    // Use any previously stored value for audio volume
    wetAudio.player('setVolume', volume);
    
    // Use any previously stored value for muting audio
    wetAudio.player('setMuted', isMuted);
  });
  
  // Set up volume change handler
  // WET also fires a volumechange event on mute/unmute, so check that too
  $( document ).on("volumechange", ".wb-mltmd", function(event) {
    var eventTarget = event.currentTarget,
        isFading = $(this).data('fading') === true;
    if (!isFading) {
      var volume = eventTarget.player( "getVolume" ),
          processedVolume = Math.round(volume * 100),
          isMuted = eventTarget.player( "getMuted" );
    
      if (processedVolume !== PhishingData.getVolume()) {
        PhishingData.setVolume(processedVolume);
        
        // Change volume for all other existing players, as well
        $('.wb-mltmd').not(eventTarget).each(function(index, audioElement) {
          audioElement.player('setVolume', volume);
        });
        
        // Also adjust the sound effects volume
        SFXController.setVolume(volume);
      }
      
      if (isMuted !== PhishingData.getMuted()) {
        PhishingData.setMuted(isMuted);
        _setMutedOtherPlayers(eventTarget, isMuted);
      }
    }
  });
  
  // Ensure that any current narration and animations are paused when opening Help or clicking Quit
  $("#wb-lng .help").add("#wb-lng .quit").on("click", function(e) {
    pauseAllPlayers();
  });
  
  function pauseAllPlayers() {
    $(".wb-mltmd").each(function(index, el) {
      if (el && typeof el.player === 'function') {
        el.player("pause");
      }
    });
  }
  
  
  return {
    setupNarration: function(settings) {
      return _setupNarration(settings);
    },
    showPlayer: function(selector) {
      this.hidePlayer();
      $(selector).closest(".narration-wrapper").show().find("details").removeAttr("open");
    },
    hidePlayer: function() {
      $(".wb-mltmd").closest(".narration-wrapper").hide();
    }
  };
});