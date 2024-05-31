define(['./phishing-scenarios-labels'], function(Labels) {
  return {
    uiTarget: "#gameWrapper",
    suspendDataId: "gamedata",
    guardianUrl: "",
    reset: false,       // Set to true to clear suspend_data
    scenarioBank: null,
    pointsPerTypeIdentified: 10,
    pointsPerFiveCorrectTypesInARow: 10,
    pointsPerClueIdentified: 5,
    onComplete: null,   // Optional callback function, called after the Results screen is displayed
    onRetry: null,
    onNext: null,
    labels: Labels
  };
});