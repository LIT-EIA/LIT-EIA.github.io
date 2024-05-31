require.config({
  paths: {
    TweenMax:  "../../content/scripts/lib/greensock/TweenMax.min",
    TweenLite:  "../../content/scripts/lib/greensock/TweenMax.min",
    TextPlugin: "../../content/scripts/lib/greensock/plugins/TextPlugin.min"
  }
});
define(["jquery", "TweenMax", "TextPlugin"], 
       function($, TweenMax) {
  
  // Load GSAP,s jQuery plugin to improve performance of animations
  $.getScript("content/scripts/lib/greensock/jquery.gsap.min.js");
  
  return {
    TweenMax: TweenMax,
    TweenLite: TweenMax,
    TimelineMax: TweenMax,
    TimelineLite: TweenMax
  };
});