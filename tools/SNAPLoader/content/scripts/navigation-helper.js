define(['utils'], function(Utils) {
  'use strict';  

  return {
    getCurrentPageId: function() {
      return Utils.getStringFromArray(masterStructure.currentNav);
    },
    getNextPageId: function() {
      var nextObj = masterStructure.nextPage();
      
      return nextObj.sPosition;
    },
    getPreviousPageId: function() {
      var prevObj = masterStructure.prevPage();
      
      return prevObj.sPosition;
    },
    getHomePageId: function() {
      return masterStructure.flatList[0].sPosition;
    },
    goToNextPage: function() {
      changePage(this.getNextPageId());
    },
    goToPreviousPage: function() {
      changePage(this.getPreviousPageId());
    },
    goToHome: function() {
      changePage(this.getHomePageId());
    },
    lockPage: function(target, softLocked) {
      lockPage(target, softLocked);
    },
    unlockPage: function(target, softLocked) {
      unlockPage(target, softLocked);
    }
  };
});