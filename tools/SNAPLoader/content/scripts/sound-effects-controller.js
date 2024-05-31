define(["./phishing-data"], function(PhishingData) {
  var audioVolume = PhishingData.getVolume() / 100;
  
  function playAudio(audio, onPlayHandler) {
    if (PhishingData.areSoundEffectsOn() && audio) {
      if (onPlayHandler) {
        audio.onplay = function() {
          onPlayHandler();
        };
      }
      audio.volume = audioVolume;
      audio.play();
    }
  }
  
  return {  
    playClick: function() {
      playAudio(document.getElementById('buttonClickSound'));
    },
    playSelectGuardian: function() {
      playAudio(document.getElementById('guardianSelectSound'));
    },
    playFolderOpen: function() {
      playAudio(document.getElementById('folderOpenSound'));
    },
    playPageTurn: function() {
      playAudio(document.getElementById('pageTurnSound'));
    },
    playCorrect: function() {
      playAudio(document.getElementById('correctSound'));
    },
    playIncorrect: function() {
      playAudio(document.getElementById('incorrectSound'));
    },
    playResults: function(onPlayHandler) {
      playAudio(document.getElementById('displayResultsSound'), onPlayHandler);
    },
    playOneStar: function(onPlayHandler) {
      playAudio(document.getElementById('oneStarSound'), onPlayHandler);
    },
    playTwoStars: function(onPlayHandler) {
      playAudio(document.getElementById('twoStarsSound'), onPlayHandler);
    },
    playThreeStars: function(onPlayHandler) {
      playAudio(document.getElementById('threeStarsSound'), onPlayHandler);
    },
    playFlasherResult: function(onPlayHandler) {
      playAudio(document.getElementById('displayFlasherSound'), onPlayHandler);
    },
    setVolume: function(newVolume) {
      audioVolume = newVolume;
    }
  };
});