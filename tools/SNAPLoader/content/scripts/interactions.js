//DO NOT MODIFY ↓
define([
    'jquery'
], function($) {
//DO NOT MODIFY ↑

	function initialize() {
		setEvents();
	}

	function setEvents() {
		$(masterStructure)
			.on("Framework:systemReady", function() {
				systemReady();
			})
			.on("Framework:pageLoaded", function() {
				pageLoaded();
			});
	}

	/* is called only once, when the Course has loaded*/
	function systemReady() {
		//console.log("Interactions:systemReady");
	}

	/* is called on every page load, great for adding custom code to all pages*/
	function pageLoaded() {
		//console.log("Interactions:pageLoaded");
    require(['labels'], function(labels) {
			//add pageOf
			$(".page-number").html(" <span class='pagelbl'>" + labels.vocab.pageLbl + "</span> " + (window.masterStructure.currentSub.localListInfo[1] + 1) + " " + labels.vocab.pageOf + " " + window.masterStructure.currentSub.localListInfo[0].length + " ");
    });
	}

  

  
	initialize();

});