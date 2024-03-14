define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

Handlebars.registerPartial("component", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "        <div class=\""
    + alias5(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":7,"column":20},"end":{"line":7,"column":34}}}) : helper)))
    + "-title component-title\">\n"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":10,"column":23}}})) != null ? stack1 : "")
    + "            <div class=\""
    + alias5(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":11,"column":24},"end":{"line":11,"column":38}}}) : helper)))
    + "-title-inner component-title-inner\" "
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":74},"end":{"line":11,"column":141}}})) != null ? stack1 : "")
    + ">\n                "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":12,"column":42}}})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"js-heading\"></div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "        <div class=\""
    + alias5(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":20,"column":34}}}) : helper)))
    + "-body component-body\">\n            <div class=\""
    + alias5(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":21,"column":24},"end":{"line":21,"column":38}}}) : helper)))
    + "-body-inner component-body-inner\">\n                "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":34}}})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "        <div class=\""
    + alias5(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":28,"column":20},"end":{"line":28,"column":34}}}) : helper)))
    + "-instruction component-instruction\">\n            <div class=\""
    + alias5(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":29,"column":24},"end":{"line":29,"column":38}}}) : helper)))
    + "-instruction-inner component-instruction-inner\">\n                "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.instruction : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":30,"column":16},"end":{"line":30,"column":41}}})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return alias5(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n<div class=\""
    + alias5(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":3,"column":12},"end":{"line":3,"column":26}}}) : helper)))
    + "-header component-header\">\n    <div class=\""
    + alias5(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_component","hash":{},"data":data,"loc":{"start":{"line":4,"column":16},"end":{"line":4,"column":30}}}) : helper)))
    + "-header-inner component-header-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":15,"column":15}}})) != null ? stack1 : "")
    + "\n        "
    + alias5(((helper = (helper = helpers.component_description || (depth0 != null ? depth0.component_description : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"component_description","hash":{},"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":17,"column":33}}}) : helper)))
    + "\n\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":8},"end":{"line":25,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.any||(depth0 && depth0.any)||alias3).call(alias2,(depth0 != null ? depth0.instruction : depth0),(depth0 != null ? depth0.mobileInstruction : depth0),{"name":"any","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":33,"column":16}}})) != null ? stack1 : "")
    + "\n    </div>\n</div>\n";
},"useData":true}));

Handlebars.registerPartial("quicknav-item", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "<button\n    role=\"link\"\n    data-type=\""
    + alias5(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":5,"column":15},"end":{"line":5,"column":23}}}) : helper)))
    + "\"\n    data-id=\""
    + alias5(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":6,"column":13},"end":{"line":6,"column":20}}}) : helper)))
    + "\"\n    data-item-index=\""
    + alias5(((helper = (helper = helpers._index || (depth0 != null ? depth0._index : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":7,"column":21},"end":{"line":7,"column":31}}}) : helper)))
    + "\"\n    class=\""
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isHidden : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":11},"end":{"line":8,"column":51}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.locked : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":51},"end":{"line":8,"column":88}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._classes : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":88},"end":{"line":8,"column":123}}})) != null ? stack1 : "")
    + "\"\n    "
    + ((stack1 = (helpers.any||(depth0 && depth0.any)||alias3).call(alias2,(depth0 != null ? depth0._isHidden : depth0),(depth0 != null ? depth0.locked : depth0),{"name":"any","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":9,"column":57}}})) != null ? stack1 : "")
    + "\n    aria-label=\""
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.ariaLabel : depth0),depth0,{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":16},"end":{"line":10,"column":44}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.locked : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":10,"column":45},"end":{"line":10,"column":259}}})) != null ? stack1 : "")
    + "\"\n    tooltip=\""
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._showTooltip : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":13},"end":{"line":11,"column":66}}})) != null ? stack1 : "")
    + "\">\n"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._alignIconRight : depth0),{"name":"unless","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":14,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.text : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":4},"end":{"line":19,"column":8}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._alignIconRight : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":22,"column":11}}})) != null ? stack1 : "")
    + "</button>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "hidden disabled ";
},"4":function(container,depth0,helpers,partials,data) {
    return "locked disabled ";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":8,"column":104},"end":{"line":8,"column":116}}}) : helper)));
},"8":function(container,depth0,helpers,partials,data) {
    return "disabled=\"disabled\" ";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1._globals)) && stack1._accessibility)) && stack1._ariaLabels)) && stack1.locked), depth0));
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isComplete : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data,"loc":{"start":{"line":10,"column":111},"end":{"line":10,"column":252}}})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1._globals)) && stack1._accessibility)) && stack1._ariaLabels)) && stack1.complete), depth0));
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1._globals)) && stack1._accessibility)) && stack1._ariaLabels)) && stack1.incomplete), depth0));
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.tooltip : depth0),depth0,{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":11,"column":33},"end":{"line":11,"column":59}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "    "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._iconClass : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":13,"column":81}}})) != null ? stack1 : "")
    + "\n";
},"20":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "<span class=\"icon-left icon "
    + container.escapeExpression(((helper = (helper = helpers._iconClass || (depth0 != null ? depth0._iconClass : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_iconClass","hash":{},"data":data,"loc":{"start":{"line":13,"column":50},"end":{"line":13,"column":64}}}) : helper)))
    + "\"></span> ";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "	<div class=\"text\">\n	"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.text : depth0),depth0,{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":17,"column":1},"end":{"line":17,"column":24}}})) != null ? stack1 : "")
    + "\n	</div>\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "    "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._iconClass : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":4},"end":{"line":21,"column":81}}})) != null ? stack1 : "")
    + "\n";
},"25":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "<span class=\"icon-right icon "
    + container.escapeExpression(((helper = (helper = helpers._iconClass || (depth0 != null ? depth0._iconClass : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_iconClass","hash":{},"data":data,"loc":{"start":{"line":21,"column":51},"end":{"line":21,"column":65}}}) : helper)))
    + "\"></span>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isEnabled : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":24,"column":7}}})) != null ? stack1 : "");
},"useData":true}));

this["Handlebars"]["templates"]["article"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <div class=\"article-title\">\n"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":12},"end":{"line":10,"column":23}}})) != null ? stack1 : "")
    + "            <div class=\"article-title-inner\" "
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":45},"end":{"line":11,"column":112}}})) != null ? stack1 : "")
    + ">\n                "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(alias2,(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":12,"column":42}}})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"js-heading\"></div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "        <div class=\"article-body\">\n            <div class=\"article-body-inner\">\n                "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":20,"column":34}}})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "        <div class=\"article-instruction\">\n            <div class=\"article-instruction-inner\">\n                "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.instruction : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":28,"column":16},"end":{"line":28,"column":41}}})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n<div class=\"article-inner block-container\">\n\n    <div class=\"article-header\">\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":15,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":23,"column":15}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":8},"end":{"line":31,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["block"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <div class=\"block-title\">\n"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":9,"column":23}}})) != null ? stack1 : "")
    + "            <div class=\"block-title-inner\" "
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":43},"end":{"line":10,"column":110}}})) != null ? stack1 : "")
    + ">\n                "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(alias2,(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":11,"column":16},"end":{"line":11,"column":42}}})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"js-heading\"></div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "        <div class=\"block-body\">\n            <div class=\"block-body-inner\">\n                "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":19,"column":34}}})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "        <div class=\"block-instruction\">\n            <div class=\"block-instruction-inner\">\n                "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.instruction : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":16},"end":{"line":27,"column":41}}})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n<div class=\"block-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":14,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":22,"column":11}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":30,"column":11}}})) != null ? stack1 : "")
    + "\n    <div class=\"component-container\">\n    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["buttons"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "        <div class=\"buttons-marking-icon icon display-none\" aria-label=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":4,"column":72},"end":{"line":4,"column":233}}})) != null ? stack1 : "")
    + "\">\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1._globals)) && stack1._accessibility)) && stack1._ariaLabels)) && stack1.answeredCorrectly), depth0));
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && data.root)) && stack1._globals)) && stack1._accessibility)) && stack1._ariaLabels)) && stack1.answeredIncorrectly), depth0));
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "    <div class=\"buttons-display\">\n        <div class=\"buttons-marking-icon icon display-none\" aria-label=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":12,"column":72},"end":{"line":12,"column":233}}})) != null ? stack1 : "")
    + "\">\n        </div>\n        <div class=\"buttons-display-inner\" aria-live=\"assertive\">\n        </div>\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.lambda, alias4=container.escapeExpression;

  return "<div class=\"buttons-inner\">\n    <div class=\"buttons-cluster clearfix\">\n"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._shouldDisplayAttempts : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":6,"column":19}}})) != null ? stack1 : "")
    + "        <button class=\"buttons-action\" aria-label=\""
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._submit : stack1)) != null ? stack1.ariaLabel : stack1), depth0))
    + "\">"
    + ((stack1 = alias3(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._submit : stack1)) != null ? stack1.buttonText : stack1), depth0)) != null ? stack1 : "")
    + "</button>\n        <button class=\"buttons-feedback\" aria-label=\""
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._showFeedback : stack1)) != null ? stack1.ariaLabel : stack1), depth0))
    + "\" disabled=\"true\">"
    + ((stack1 = alias3(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._showFeedback : stack1)) != null ? stack1.buttonText : stack1), depth0)) != null ? stack1 : "")
    + "</button>\n    </div>\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._shouldDisplayAttempts : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":17,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["Handlebars"]["templates"]["drawer"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.lambda, alias5=container.escapeExpression;

  return "<div class=\"drawer-inner\">\n	"
    + ((stack1 = (helpers.a11y_aria_label||(depth0 && depth0.a11y_aria_label)||alias3).call(alias2,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.drawer : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":2,"column":65}}})) != null ? stack1 : "")
    + "\n	<div class=\"drawer-holder\" role=\"list\">\n	</div>\n	<div class=\"drawer-toolbar clearfix\">\n		<div class=\"drawer-back-button\">\n		<button class=\"base drawer-back icon icon-controls-small-left\" aria-label=\""
    + alias5(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n		</button>\n		</div>\n		<div class=\"drawer-close-button\">\n		<button class=\"base drawer-close icon icon-cross\" aria-label=\""
    + alias5(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closeDrawer : stack1), depth0))
    + "\">\n		</button>\n		</div>\n	</div>\n	"
    + ((stack1 = ((helper = (helper = helpers.a11y_wrap_focus || (depth0 != null ? depth0.a11y_wrap_focus : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":15,"column":1},"end":{"line":15,"column":22}}}) : helper))) != null ? stack1 : "")
    + "\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["drawerItem"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "<button class=\"base drawer-item-open "
    + container.escapeExpression(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"className","hash":{},"data":data,"loc":{"start":{"line":1,"column":37},"end":{"line":1,"column":50}}}) : helper)))
    + "\">\n	<div class=\"drawer-item-title\">\n		<div class=\"drawer-item-title-inner h5\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":42},"end":{"line":3,"column":53}}}) : helper))) != null ? stack1 : "")
    + "</div>\n	</div>\n	<div class=\"drawer-item-description\">\n		<div class=\"drawer-item-description-inner\">"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":6,"column":45},"end":{"line":6,"column":62}}}) : helper))) != null ? stack1 : "")
    + "</div>\n	</div>\n</button>";
},"useData":true});

this["Handlebars"]["templates"]["heading"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isOptional : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":11,"column":15}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "            "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":6,"column":12},"end":{"line":6,"column":38}}})) != null ? stack1 : "")
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isComplete : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":11,"column":8}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "            "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.complete : stack1), depth0))
    + " "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":8,"column":61},"end":{"line":8,"column":87}}})) != null ? stack1 : "")
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "            "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incomplete : stack1), depth0))
    + " "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":63},"end":{"line":10,"column":89}}})) != null ? stack1 : "")
    + "\n        ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "        "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":13,"column":34}}})) != null ? stack1 : "")
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return alias5(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n<div id=\""
    + alias5(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":2,"column":9},"end":{"line":2,"column":16}}}) : helper)))
    + "-heading\" class=\"js-heading-inner\" "
    + ((stack1 = (helpers.a11y_attrs_heading||(depth0 && depth0.a11y_attrs_heading)||alias3).call(alias2,(depth0 != null ? depth0._type : depth0),{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":2,"column":51},"end":{"line":2,"column":81}}})) != null ? stack1 : "")
    + " >\n    <span class=\"aria-label\">\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isA11yCompletionDescriptionEnabled : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":14,"column":11}}})) != null ? stack1 : "")
    + "    </span>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["loading"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loading\">\n    <div class=\"loader-gif\"><div role=\"heading\" class=\"h3\" aria-level=\"1\">Loading...</div></div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["navigation"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda;

  return "        <button class=\"skip-nav-link a11y-ignore-focus\" data-event=\"skipNavigation\" aria-label=\""
    + container.escapeExpression(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.skipNavigation : stack1), depth0))
    + "\">"
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1.skipNavigationText : stack1), depth0)) != null ? stack1 : "")
    + "</button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.escapeExpression, alias4=container.lambda;

  return alias3(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n<div class=\"navigation-inner clearfix\">\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._isSkipNavigationEnabled : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":7,"column":11}}})) != null ? stack1 : "")
    + "    <button class=\"base navigation-back-button icon icon-controls-small-left\" data-event=\"backButton\" aria-label=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\" role=\"link\"></button>\n    <button class=\"base navigation-drawer-toggle-button icon icon-list\" data-event=\"toggleDrawer\" aria-label=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.navigationDrawer : stack1), depth0))
    + "\"></button>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notify"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable, alias2=container.escapeExpression;

  return alias2(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data,"loc":{"start":{"line":3,"column":26},"end":{"line":3,"column":34}}}) : helper)))
    + "=\""
    + alias2(container.lambda(depth0, depth0))
    + "\" ";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return "                    <div class=\"notify-popup-icon\">\n                        <div class=\"icon"
    + ((stack1 = (helpers.equals||(depth0 && depth0.equals)||alias3).call(alias2,(depth0 != null ? depth0._type : depth0),"prompt",{"name":"equals","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":40},"end":{"line":9,"column":91}}})) != null ? stack1 : "")
    + ((stack1 = (helpers.equals||(depth0 && depth0.equals)||alias3).call(alias2,(depth0 != null ? depth0._type : depth0),"alert",{"name":"equals","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":91},"end":{"line":9,"column":140}}})) != null ? stack1 : "")
    + "\">\n                        </div>\n                    </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return " icon-question";
},"6":function(container,depth0,helpers,partials,data) {
    return " icon-warning";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return "                    <div id=\"notify-heading\" class=\"notify-popup-title\">\n                        <div class=\"notify-popup-title-inner h5\" "
    + ((stack1 = (helpers.a11y_attrs_heading||(depth0 && depth0.a11y_attrs_heading)||alias3).call(alias2,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":15,"column":65},"end":{"line":15,"column":98}}})) != null ? stack1 : "")
    + ">\n                        "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.title : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":16,"column":24},"end":{"line":16,"column":43}}})) != null ? stack1 : "")
    + "\n                        </div>\n                    </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                    <div class=\"notify-popup-body\">\n                        <div class=\"notify-popup-body-inner\">"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":22,"column":61},"end":{"line":22,"column":79}}})) != null ? stack1 : "")
    + "</div>\n                    </div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "                    <div class=\"notify-popup-buttons\">\n                        <button class=\"notify-popup-button notify-popup-alert-button\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"confirmText","hash":{},"data":data,"loc":{"start":{"line":28,"column":98},"end":{"line":28,"column":115}}}) : helper))) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"confirmText","hash":{},"data":data,"loc":{"start":{"line":28,"column":117},"end":{"line":28,"column":134}}}) : helper))) != null ? stack1 : "")
    + "</button>\n                    </div>\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                    <div class=\"notify-popup-buttons\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._prompts : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":24},"end":{"line":36,"column":33}}})) != null ? stack1 : "")
    + "                    </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "                            <button class=\"notify-popup-button notify-popup-prompt-button\" data-event=\""
    + container.escapeExpression(((helper = (helper = helpers._callbackEvent || (depth0 != null ? depth0._callbackEvent : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_callbackEvent","hash":{},"data":data,"loc":{"start":{"line":35,"column":103},"end":{"line":35,"column":121}}}) : helper)))
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"promptText","hash":{},"data":data,"loc":{"start":{"line":35,"column":135},"end":{"line":35,"column":151}}}) : helper))) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"promptText","hash":{},"data":data,"loc":{"start":{"line":35,"column":153},"end":{"line":35,"column":169}}}) : helper))) != null ? stack1 : "")
    + "</button>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = (helpers.equals||(depth0 && depth0.equals)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._type : depth0),"popup",{"name":"equals","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":12},"end":{"line":48,"column":23}}})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                <button class=\"base notify-popup-done\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\n                    <div class=\"notify-popup-icon-close icon icon-cross\"></div>\n                </button>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return alias5(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n<div "
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0._attributes : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":5},"end":{"line":3,"column":55}}})) != null ? stack1 : "")
    + " class=\"notify-popup notify-type-"
    + alias5(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":3,"column":88},"end":{"line":3,"column":97}}}) : helper)))
    + " "
    + alias5(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":3,"column":98},"end":{"line":3,"column":110}}}) : helper)))
    + "\">\n    <div class=\"notify-popup-inner\">\n        <div class=\"notify-popup-content\">\n            <div class=\"notify-popup-content-inner\">\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._showIcon : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":16},"end":{"line":12,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":19,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":16},"end":{"line":24,"column":23}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.equals||(depth0 && depth0.equals)||alias3).call(alias2,(depth0 != null ? depth0._type : depth0),"alert",{"name":"equals","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":16},"end":{"line":30,"column":27}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.equals||(depth0 && depth0.equals)||alias3).call(alias2,(depth0 != null ? depth0._type : depth0),"prompt",{"name":"equals","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":16},"end":{"line":38,"column":27}}})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n"
    + ((stack1 = (helpers.all||(depth0 && depth0.all)||alias3).call(alias2,(depth0 != null ? depth0._isCancellable : depth0),(depth0 != null ? depth0._showCloseButton : depth0),{"name":"all","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":8},"end":{"line":49,"column":16}}})) != null ? stack1 : "")
    + "    </div>\n\n    "
    + ((stack1 = ((helper = (helper = helpers.a11y_wrap_focus || (depth0 != null ? depth0.a11y_wrap_focus : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":52,"column":4},"end":{"line":52,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\n</div>\n\n\n<div class=\"notify-shadow\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notifyPush"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression;

  return alias4(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n<div id=\"notify-push-heading\" class=\"notify-push-inner\">\n	<div class=\"notify-push-title\">\n		<div class=\"notify-push-title-inner h5\" "
    + ((stack1 = (helpers.a11y_attrs_heading||(depth0 && depth0.a11y_attrs_heading)||alias3).call(alias2,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":5,"column":42},"end":{"line":5,"column":75}}})) != null ? stack1 : "")
    + ">\n			"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.title : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":6,"column":3},"end":{"line":6,"column":22}}})) != null ? stack1 : "")
    + "\n		</div>\n	</div>\n\n	<div class=\"notify-push-body\">\n		<div class=\"notify-push-body-inner\">\n			"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":12,"column":3},"end":{"line":12,"column":21}}})) != null ? stack1 : "")
    + "\n		</div>\n	</div>\n</div>\n\n<button class=\"base notify-push-close\" aria-label=\""
    + alias4(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\n	<span class=\"icon icon-cross\"></span>\n</button>\n";
},"useData":true});

this["Handlebars"]["templates"]["page"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "					<div class=\"page-title\">\n"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":14,"column":17}}})) != null ? stack1 : "")
    + "						<div class=\"page-title-inner\" "
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._disableAccessibilityState : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":36},"end":{"line":15,"column":103}}})) != null ? stack1 : "")
    + ">\n							"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(alias2,(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":16,"column":7},"end":{"line":16,"column":33}}})) != null ? stack1 : "")
    + "\n						</div>\n					</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "							<div class=\"js-heading\"></div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "					<div class=\"page-body\">\n						<div class=\"page-body-inner\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pageBody : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":24,"column":7},"end":{"line":28,"column":14}}})) != null ? stack1 : "")
    + "						</div>\n					</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "								"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pageBody : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":25,"column":8},"end":{"line":25,"column":30}}})) != null ? stack1 : "")
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "								"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":27,"column":26}}})) != null ? stack1 : "")
    + "\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "					<div class=\"page-instruction\">\n						<div class=\"page-instruction-inner\">\n							"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.instruction : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":36,"column":7},"end":{"line":36,"column":32}}})) != null ? stack1 : "")
    + "\n						</div>\n					</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n<div class=\"page-inner article-container\">\n	<div class=\"page-header\">\n		<div class=\"page-header-inner clearfix\">\n\n			<div class=\"page-header-content\">\n				<div class=\"page-header-content-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":5},"end":{"line":19,"column":12}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.any||(depth0 && depth0.any)||alias3).call(alias2,(depth0 != null ? depth0.body : depth0),(depth0 != null ? depth0.pageBody : depth0),{"name":"any","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":5},"end":{"line":31,"column":13}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":5},"end":{"line":39,"column":12}}})) != null ? stack1 : "")
    + "\n				</div>\n			</div>\n\n		</div>\n	</div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["shadow"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"shadow\" class=\"shadow display-none\"></div>";
},"useData":true});

this["Handlebars"]["templates"]["text"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"text-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["guidedtour"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.escapeExpression, alias4=container.lambda;

  return "  <div class=\"guidedtour-widget tour-"
    + alias3(((helper = (helper = helpers.cid || (depth0 != null ? depth0.cid : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"cid","hash":{},"data":data,"loc":{"start":{"line":4,"column":37},"end":{"line":4,"column":44}}}) : helper)))
    + " component-widget pin\">\r\n    <div class=\"loading-step sr-only\" aria-hidden=\"true\" role=\"dialog\" tabindex=\"-1\">loading</div>\r\n    <div class=\"guidedtour-graphic\"role=\"list\">\r\n        <button class=\"start-tour\">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.guidedtour : depth0)) != null ? stack1.startTourText : stack1), depth0))
    + "</button>\r\n        <img src=\""
    + alias3(alias4(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._items : depth0)) != null ? stack1["0"] : stack1)) != null ? stack1._graphic : stack1)) != null ? stack1.src : stack1), depth0))
    + "\" class=\"tour-disabled\" "
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":8,"column":67},"end":{"line":8,"column":149}}})) != null ? stack1 : "")
    + "/>\r\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":11,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":16,"column":17}}})) != null ? stack1 : "")
    + "    </div>\r\n  </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"";
},"4":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "          <div class=\"graphic-attribution\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression, alias6=container.lambda;

  return "          <div class=\"guidedtour-graphic-pin-list-item\" role=\"listitem\">\r\n            <span class=\"base guidedtour-graphic-pin component-item-text-color tour-item-"
    + alias5(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":14,"column":89},"end":{"line":14,"column":99}}}) : helper)))
    + "\" data-index=\""
    + alias5(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":14,"column":113},"end":{"line":14,"column":123}}}) : helper)))
    + "\" style=\"top:"
    + ((stack1 = alias6(((stack1 = (depth0 != null ? depth0._pin : depth0)) != null ? stack1._top : stack1), depth0)) != null ? stack1 : "")
    + "%; left:"
    + ((stack1 = alias6(((stack1 = (depth0 != null ? depth0._pin : depth0)) != null ? stack1._left : stack1), depth0)) != null ? stack1 : "")
    + "%;\"></span>\r\n          </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "<div class=\"guidedtour-inner component-inner\">\r\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":19,"column":9}}})) != null ? stack1 : "")
    + "</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["quicknav-tooltip"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return "<div class=\"text\">\n"
    + ((stack1 = ((helper = (helper = helpers.tooltip || (depth0 != null ? depth0.tooltip : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tooltip","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":13}}}) : helper))) != null ? stack1 : "")
    + "\n</div>\n<div class=\"triangle\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["quicknav"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["quicknav-item"],depth0,{"name":"quicknav-item","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "<div class=\"quicknav-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div class=\"quicknav-widget\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":6,"column":9}}})) != null ? stack1 : "")
    + "</div>\n</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["glossary"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return alias5(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n<div class=\"glossary-inner\">\n    "
    + alias5((helpers.a11y_aria_label||(depth0 && depth0.a11y_aria_label)||alias3).call(alias2,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._glossary : stack1)) != null ? stack1.glossary : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":63}}}))
    + "\n    <div class=\"glossary-textbox-container\">\n        <label for=\"glossarySearch\" class=\"glossary-textbox-label icon icon-search\" aria-hidden=\"true\"></label>\n        <input id=\"glossarySearch\" type=\"text\" placeholder=\""
    + ((stack1 = ((helper = (helper = helpers.searchPlaceholder || (depth0 != null ? depth0.searchPlaceholder : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"searchPlaceholder","hash":{},"data":data,"loc":{"start":{"line":6,"column":60},"end":{"line":6,"column":83}}}) : helper))) != null ? stack1 : "")
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.searchPlaceholder || (depth0 != null ? depth0.searchPlaceholder : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"searchPlaceholder","hash":{},"data":data,"loc":{"start":{"line":6,"column":97},"end":{"line":6,"column":120}}}) : helper))) != null ? stack1 : "")
    + "\" class=\"glossary-textbox\">\n        <div role=\"button\" tabindex=\"0\" class=\"glossary-cancel-button icon icon-cross display-none\" aria-label=\""
    + alias5(((helper = (helper = helpers.clearSearch || (depth0 != null ? depth0.clearSearch : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"clearSearch","hash":{},"data":data,"loc":{"start":{"line":7,"column":112},"end":{"line":7,"column":127}}}) : helper)))
    + "\"></div>\n    </div>\n    <div class=\"glossary-checkbox-container\">\n        <input id=\"glossaryCheckbox\" type=\"checkbox\" class=\"glossary-checkbox\">\n        <label for=\"glossaryCheckbox\" class=\"glossary-checkbox-label\">"
    + ((stack1 = ((helper = (helper = helpers.searchWithInDescriptionLabel || (depth0 != null ? depth0.searchWithInDescriptionLabel : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"searchWithInDescriptionLabel","hash":{},"data":data,"loc":{"start":{"line":11,"column":70},"end":{"line":11,"column":104}}}) : helper))) != null ? stack1 : "")
    + "</label>\n    </div>\n    <div class=\"glossary-items-container\" role=\"list\"></div>\n    <div class=\"glossary-item-not-found h6 display-none\">"
    + ((stack1 = ((helper = (helper = helpers.itemNotFoundMessage || (depth0 != null ? depth0.itemNotFoundMessage : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"itemNotFoundMessage","hash":{},"data":data,"loc":{"start":{"line":14,"column":57},"end":{"line":14,"column":82}}}) : helper))) != null ? stack1 : "")
    + "</div>\n    <div class=\"glossary-alert aria-label\" aria-live=\"polite\" aria-atomic=\"true\"></div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["glossaryItem"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "<button class=\"base glossary-item-term\" tabindex=\"0\" role=\"listitem\" aria-expanded=\"false\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.term || (depth0 != null ? depth0.term : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"term","hash":{},"data":data,"loc":{"start":{"line":1,"column":103},"end":{"line":1,"column":113}}}) : helper))) != null ? stack1 : "")
    + "\">\n    <div class=\"glossary-item-term-inner h5\">\n        "
    + ((stack1 = ((helper = (helper = helpers.term || (depth0 != null ? depth0.term : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"term","hash":{},"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":18}}}) : helper))) != null ? stack1 : "")
    + "\n    </div>\n</button>\n<div class=\"glossary-item-description\" role=\"region\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.term || (depth0 != null ? depth0.term : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"term","hash":{},"data":data,"loc":{"start":{"line":6,"column":65},"end":{"line":6,"column":75}}}) : helper))) != null ? stack1 : "")
    + "\">\n    <div class=\"glossary-item-description-inner\">\n        "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.description : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":8,"column":33}}})) != null ? stack1 : "")
    + "\n    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgress"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n<div class=\"pagelevelprogress-inner\">\n    "
    + ((stack1 = (helpers.a11y_aria_label||(depth0 && depth0.a11y_aria_label)||alias3).call(alias2,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.pageLevelProgress : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":4,"column":83}}})) != null ? stack1 : "")
    + "\n    <div role=\"list\" class=\"js-children\"></div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressIndicator"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.propertyIsEnumerable;

  return "    <span class=\"aria-label\">\n        "
    + container.escapeExpression((helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ariaLabel : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":7,"column":29}}}))
    + "\n    </span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return alias5(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n<div class=\"pagelevelprogress-indicator-inner "
    + alias5(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":2,"column":46},"end":{"line":2,"column":54}}}) : helper)))
    + "-indicator-inner\">\n    <div class=\"pagelevelprogress-indicator-bar\" style=\"width: "
    + alias5(((helper = (helper = helpers.percentageComplete || (depth0 != null ? depth0.percentageComplete : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"percentageComplete","hash":{},"data":data,"loc":{"start":{"line":3,"column":63},"end":{"line":3,"column":85}}}) : helper)))
    + "%;\">\n    </div>\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.ariaLabel : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":9,"column":11}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.locked : stack1), depth0))
    + ". ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.optionalContent : stack1), depth0))
    + ". ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isComplete : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":4,"column":185},"end":{"line":4,"column":321}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.complete : stack1), depth0))
    + ". ";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incomplete : stack1), depth0))
    + ". ";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "        <div class=\"page-level-progress-item-optional-text\">\n        "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.optionalContent : stack1), depth0))
    + "\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression;

  return "<button\n    class=\"base pagelevelprogress-item-title clearfix drawer-item-open"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._isVisible : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":70},"end":{"line":2,"column":112}}})) != null ? stack1 : "")
    + " js-indicator\"\n    data-pagelevelprogress-id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":3,"column":31},"end":{"line":3,"column":38}}}) : helper)))
    + "\"\n    aria-label=\""
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._isVisible : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":16},"end":{"line":4,"column":97}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isOptional : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":4,"column":97},"end":{"line":4,"column":328}}})) != null ? stack1 : "")
    + alias4((helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.title : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":4,"column":328},"end":{"line":4,"column":345}}}))
    + "\">\n    <div class=\"pagelevelprogress-item-title-inner\">\n    "
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.title : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":6,"column":23}}})) != null ? stack1 : "")
    + "\n    </div>\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isOptional : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":12,"column":11}}})) != null ? stack1 : "")
    + "</button>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressNavigation"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=container.escapeExpression;

  return alias2(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n<span class=\"tooltip\">"
    + alias2(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.progress : stack1), depth0))
    + "</span>\n";
},"useData":true});

this["Handlebars"]["templates"]["resources"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4=container.escapeExpression, alias5=container.lambda;

  return "	<div class=\"resources-filter clearfix resources-col-"
    + alias4((helpers.resources_get_column_count||(depth0 && depth0.resources_get_column_count)||alias3).call(alias2,(depth0 != null ? depth0.resources : depth0),{"name":"resources_get_column_count","hash":{},"data":data,"loc":{"start":{"line":6,"column":53},"end":{"line":6,"column":93}}}))
    + "\">\n		<button class=\"base resources-show-all selected\" data-filter=\"all\" aria-label=\""
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.allAria : stack1), depth0))
    + "\">\n			<span>"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.all : stack1), depth0))
    + "</span>\n		</button>\n"
    + ((stack1 = (helpers.resources_has_type||(depth0 && depth0.resources_has_type)||alias3).call(alias2,(depth0 != null ? depth0.resources : depth0),"document",{"name":"resources_has_type","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":2},"end":{"line":14,"column":25}}})) != null ? stack1 : "")
    + ((stack1 = (helpers.resources_has_type||(depth0 && depth0.resources_has_type)||alias3).call(alias2,(depth0 != null ? depth0.resources : depth0),"media",{"name":"resources_has_type","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":2},"end":{"line":19,"column":25}}})) != null ? stack1 : "")
    + ((stack1 = (helpers.resources_has_type||(depth0 && depth0.resources_has_type)||alias3).call(alias2,(depth0 != null ? depth0.resources : depth0),"link",{"name":"resources_has_type","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":2},"end":{"line":24,"column":25}}})) != null ? stack1 : "")
    + "	</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression;

  return "		<button class=\"base resources-show-document\" data-filter=\"document\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.documentAria : stack1), depth0))
    + "\">\n			<span>"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.document : stack1), depth0))
    + "</span>\n		</button>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression;

  return "		<button class=\"base resources-show-media\" data-filter=\"media\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.mediaAria : stack1), depth0))
    + "\">\n			<span>"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.media : stack1), depth0))
    + "</span>\n		</button>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression;

  return "		<button class=\"base resources-show-link\" data-filter=\"link\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.linkAria : stack1), depth0))
    + "\">\n			<span>"
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.link : stack1), depth0))
    + "</span>\n		</button>\n";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "	<div class=\"resources-item drawer-item "
    + alias5(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":29,"column":40},"end":{"line":29,"column":49}}}) : helper)))
    + "\" role=\"listitem\">\n		<a href=\""
    + alias5(((helper = (helper = helpers._link || (depth0 != null ? depth0._link : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_link","hash":{},"data":data,"loc":{"start":{"line":30,"column":11},"end":{"line":30,"column":20}}}) : helper)))
    + "\" class=\"base resources-item-open drawer-item-open\"\n			data-type=\""
    + alias5(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":31,"column":14},"end":{"line":31,"column":23}}}) : helper)))
    + "\"\n"
    + ((stack1 = (helpers.resources_force_download||(depth0 && depth0.resources_force_download)||alias3).call(alias2,depth0,{"name":"resources_force_download","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":3},"end":{"line":34,"column":32}}})) != null ? stack1 : "")
    + "			target=\"_blank\"\n			aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":36,"column":15},"end":{"line":36,"column":26}}}) : helper))) != null ? stack1 : "")
    + ". "
    + alias5(helpers.lookup.call(alias2,((stack1 = (depths[1] != null ? depths[1].model : depths[1])) != null ? stack1._filterButtons : stack1),(depth0 != null ? depth0._type : depth0),{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":36,"column":28},"end":{"line":36,"column":68}}}))
    + "."
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":69},"end":{"line":36,"column":114}}})) != null ? stack1 : "")
    + "\">\n			<div class=\"drawer-item-title\">\n				<div class=\"drawer-item-title-inner h5\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":38,"column":44},"end":{"line":38,"column":55}}}) : helper))) != null ? stack1 : "")
    + "</div>\n			</div>\n			<div class=\"drawer-item-description\">\n				<div class=\"drawer-item-description-inner\">"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":41,"column":47},"end":{"line":41,"column":64}}}) : helper))) != null ? stack1 : "")
    + "</div>\n			</div>\n		</a>\n	</div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "			download=\""
    + container.escapeExpression(((helper = (helper = helpers.filename || (depth0 != null ? depth0.filename : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"filename","hash":{},"data":data,"loc":{"start":{"line":33,"column":13},"end":{"line":33,"column":25}}}) : helper)))
    + "\"\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return " "
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":36,"column":89},"end":{"line":36,"column":106}}}) : helper))) != null ? stack1 : "")
    + ".";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\n<div class=\"resources-inner\">\n	"
    + ((stack1 = (helpers.a11y_aria_label||(depth0 && depth0.a11y_aria_label)||alias3).call(alias2,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._resources : stack1)) != null ? stack1.resources : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":4,"column":1},"end":{"line":4,"column":64}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.resources_has_multiple_types||(depth0 && depth0.resources_has_multiple_types)||alias3).call(alias2,(depth0 != null ? depth0.resources : depth0),{"name":"resources_has_multiple_types","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":1},"end":{"line":26,"column":34}}})) != null ? stack1 : "")
    + "	<div class=\"resources-item-container\" role=\"list\">\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.resources : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":1},"end":{"line":45,"column":10}}})) != null ? stack1 : "")
    + "	</div>\n</div>\n";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["trickle-button"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " trickle-full-width";
},"3":function(container,depth0,helpers,partials,data) {
    return " locking";
},"5":function(container,depth0,helpers,partials,data) {
    return "display-none";
},"7":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"9":function(container,depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.finalText : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":6,"column":16},"end":{"line":10,"column":23}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                    "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.finalText : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                    "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.text : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._isStart : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":18,"column":23}}})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.startText : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":20},"end":{"line":15,"column":27}}})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                        "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.startText : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=container.lambda, alias3=container.escapeExpression, alias4=depth0 != null ? depth0 : (container.nullContext || {}), alias5=container.hooks.helperMissing;

  return "<div class=\"component "
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._component : stack1), depth0))
    + "-component "
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._component : stack1), depth0))
    + "-component-"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias5),(typeof helper === "function" ? helper.call(alias4,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":1,"column":106},"end":{"line":1,"column":113}}}) : helper)))
    + ((stack1 = helpers["if"].call(alias4,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isFullWidth : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":113},"end":{"line":1,"column":176}}})) != null ? stack1 : "")
    + " "
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._className : stack1), depth0))
    + "\">\n    "
    + ((stack1 = (helpers.a11y_aria_label||(depth0 && depth0.a11y_aria_label)||alias5).call(alias4,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._trickle : stack1)) != null ? stack1.incompleteContent : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":73}}})) != null ? stack1 : "")
    + "\n    <div class=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._component : stack1), depth0))
    + "-inner component-inner"
    + ((stack1 = helpers["if"].call(alias4,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isLocking : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":69},"end":{"line":3,"column":119}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers.unless.call(alias4,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isVisible : stack1),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":120},"end":{"line":3,"column":182}}})) != null ? stack1 : "")
    + "\">\n        <button class=\"button "
    + ((stack1 = helpers["if"].call(alias4,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isDisabled : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":30},"end":{"line":4,"column":81}}})) != null ? stack1 : "")
    + "\""
    + ((stack1 = helpers["if"].call(alias4,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isDisabled : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":82},"end":{"line":4,"column":145}}})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers["if"].call(alias4,((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._isFinal : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":19,"column":19}}})) != null ? stack1 : "")
    + "        </button>\n    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["searchBox"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "<div class=\"list-item search\">\n    <input type=\"text\" placeholder=\""
    + container.escapeExpression(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":2,"column":36},"end":{"line":2,"column":51}}}) : helper)))
    + "\" class=\"search-box\">\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["searchResults"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"search-results-inner\">\n    <div class=\"search-results-content\">\n    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["searchResultsContent"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.isAwaitingResults : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":29,"column":7}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "    <div class=\"no-results\" tabindex=\"0\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.awaitingResultsMessage || (depth0 != null ? depth0.awaitingResultsMessage : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"awaitingResultsMessage","hash":{},"data":data,"loc":{"start":{"line":4,"column":53},"end":{"line":4,"column":81}}}) : helper))) != null ? stack1 : "")
    + "\" role=\"region\">\n        <div class=\"search-result-inner\">\n            "
    + ((stack1 = ((helper = (helper = helpers.awaitingResultsMessage || (depth0 != null ? depth0.awaitingResultsMessage : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"awaitingResultsMessage","hash":{},"data":data,"loc":{"start":{"line":6,"column":12},"end":{"line":6,"column":40}}}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n    </div>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.formattedResults : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(19, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":28,"column":13}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "        <button class=\"base search-result\" data-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":11,"column":52},"end":{"line":11,"column":58}}}) : helper)))
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.searchTitle || (depth0 != null ? depth0.searchTitle : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"searchTitle","hash":{},"data":data,"loc":{"start":{"line":11,"column":72},"end":{"line":11,"column":89}}}) : helper))) != null ? stack1 : "")
    + ". "
    + ((stack1 = ((helper = (helper = helpers.textPreview || (depth0 != null ? depth0.textPreview : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"textPreview","hash":{},"data":data,"loc":{"start":{"line":11,"column":91},"end":{"line":11,"column":108}}}) : helper))) != null ? stack1 : "")
    + "\">\n            <div class=\"search-result-inner\">\n                <div class=\"result-title\">"
    + ((stack1 = helpers["if"].call(alias2,(depths[1] != null ? depths[1]._showHighlights : depths[1]),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.program(10, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":13,"column":42},"end":{"line":13,"column":123}}})) != null ? stack1 : "")
    + "</div>\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.textPreview : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":16},"end":{"line":16,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depths[1] != null ? depths[1]._showFoundWords : depths[1]),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":16},"end":{"line":19,"column":23}}})) != null ? stack1 : "")
    + "            </div>\n        </button>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return ((stack1 = ((helper = (helper = helpers.searchTitleTagged || (depth0 != null ? depth0.searchTitleTagged : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"searchTitleTagged","hash":{},"data":data,"loc":{"start":{"line":13,"column":68},"end":{"line":13,"column":91}}}) : helper))) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return ((stack1 = ((helper = (helper = helpers.searchTitle || (depth0 != null ? depth0.searchTitle : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"searchTitle","hash":{},"data":data,"loc":{"start":{"line":13,"column":99},"end":{"line":13,"column":116}}}) : helper))) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "                    <div class=\"result-preview\">\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1]._showHighlights : depths[1]),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.program(15, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":15,"column":49},"end":{"line":15,"column":130}}})) != null ? stack1 : "")
    + "\"</div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return ((stack1 = ((helper = (helper = helpers.textPreviewTagged || (depth0 != null ? depth0.textPreviewTagged : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"textPreviewTagged","hash":{},"data":data,"loc":{"start":{"line":15,"column":75},"end":{"line":15,"column":98}}}) : helper))) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return ((stack1 = ((helper = (helper = helpers.textPreview || (depth0 != null ? depth0.textPreview : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"textPreview","hash":{},"data":data,"loc":{"start":{"line":15,"column":106},"end":{"line":15,"column":123}}}) : helper))) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable;

  return "                <div class=\"result-foundwords\"><i>"
    + ((stack1 = ((helper = (helper = helpers.foundWords || (depth0 != null ? depth0.foundWords : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"foundWords","hash":{},"data":data,"loc":{"start":{"line":18,"column":50},"end":{"line":18,"column":66}}}) : helper))) != null ? stack1 : "")
    + "</i></div>\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function";

  return "         <div class=\"no-results\" tabindex=\"0\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.noResultsMessage || (depth0 != null ? depth0.noResultsMessage : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"noResultsMessage","hash":{},"data":data,"loc":{"start":{"line":23,"column":58},"end":{"line":23,"column":80}}}) : helper))) != null ? stack1 : "")
    + "\" role=\"region\">\n            <div class=\"search-result-inner\">\n                "
    + ((stack1 = ((helper = (helper = helpers.noResultsMessage || (depth0 != null ? depth0.noResultsMessage : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"noResultsMessage","hash":{},"data":data,"loc":{"start":{"line":25,"column":16},"end":{"line":25,"column":38}}}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.isBlank : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":30,"column":7}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["searchSingleItem"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing;

  return "<div class=\"drawer-item\">\n    <div class=\"base drawer-item-open search-drawer\"> \n        <div class=\"drawer-item-title\">\n            <div class=\"drawer-item-title-inner h5\" tabindex=\"0\" aria-role=\"region\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":4,"column":84},"end":{"line":4,"column":95}}}) : helper))) != null ? stack1 : "")
    + "</div>\n        </div>\n        <div class=\"drawer-item-description\">\n            <div class=\"drawer-item-description-inner\">"
    + ((stack1 = (helpers.a11y_text||(depth0 && depth0.a11y_text)||alias3).call(alias2,(depth0 != null ? depth0.description : depth0),{"name":"a11y_text","hash":{},"data":data,"loc":{"start":{"line":7,"column":55},"end":{"line":7,"column":82}}})) != null ? stack1 : "")
    + "</div>\n        </div>\n    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["boxmenu-item"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "            <img src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-hidden=\"true\" />\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression((helpers.a11y_aria_image||(depth0 && depth0.a11y_aria_image)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"a11y_aria_image","hash":{},"data":data,"loc":{"start":{"line":12,"column":24},"end":{"line":12,"column":56}}}));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "            <span class=\"menu-item-duration\">"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.durationLabel : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":45},"end":{"line":18,"column":140}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":18,"column":141},"end":{"line":18,"column":155}}}) : helper))) != null ? stack1 : "")
    + "</span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.durationLabel : stack1), depth0)) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.visited : stack1), depth0));
},"10":function(container,depth0,helpers,partials,data) {
    return "visited";
},"12":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"14":function(container,depth0,helpers,partials,data) {
    return "disabled=\"disabled\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return alias5(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n<div class=\"menu-item-inner\">\n    <div class=\"menu-item-graphic\">\n"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":6,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"menu-item-title\">\n        <div class=\"js-heading\" data-a11y-heading-type=\"menuItem\"></div>\n        <div class=\"menu-item-title-inner h3 accessible-text-block\" aria-hidden=\"true\">"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":87},"end":{"line":10,"column":113}}})) != null ? stack1 : "")
    + "</div>\n    </div>\n    "
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":12,"column":63}}})) != null ? stack1 : "")
    + "\n    <div class=\"menu-item-body\">\n        <div class=\"menu-item-body-inner\">"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||alias3).call(alias2,(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":14,"column":42},"end":{"line":14,"column":60}}})) != null ? stack1 : "")
    + "</div>\n    </div>\n    <div class=\"menu-item-button\">\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.duration : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":19,"column":15}}})) != null ? stack1 : "")
    + "        <div class=\"js-menu-item-progress\"></div>\n        <button aria-label=\""
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":28},"end":{"line":21,"column":100}}})) != null ? stack1 : "")
    + " "
    + alias5(((helper = (helper = helpers.linkText || (depth0 != null ? depth0.linkText : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"linkText","hash":{},"data":data,"loc":{"start":{"line":21,"column":101},"end":{"line":21,"column":113}}}) : helper)))
    + "\" class=\""
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":122},"end":{"line":21,"column":154}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isLocked : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":155},"end":{"line":21,"column":187}}})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0._isLocked : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":189},"end":{"line":21,"column":232}}})) != null ? stack1 : "")
    + ">\n            "
    + ((stack1 = ((helper = (helper = helpers.linkText || (depth0 != null ? depth0.linkText : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"linkText","hash":{},"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":22,"column":26}}}) : helper))) != null ? stack1 : "")
    + "\n        </button>\n    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["boxmenu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "				<div class=\"menu-title\">\n"
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._disableAccessibleState : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":5},"end":{"line":10,"column":16}}})) != null ? stack1 : "")
    + "					<div class=\"menu-title-inner h1\" "
    + ((stack1 = helpers.unless.call(alias2,(depth0 != null ? depth0._disableAccessibleState : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":38},"end":{"line":11,"column":102}}})) != null ? stack1 : "")
    + ">\n						"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(alias2,(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":12,"column":32}}})) != null ? stack1 : "")
    + "\n					</div>\n				</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "						<div class=\"js-heading\"></div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return "				<div class=\"menu-body\">\n					<div class=\"menu-body-inner\">\n						"
    + ((stack1 = (helpers.compile||(depth0 && depth0.compile)||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":6},"end":{"line":19,"column":24}}})) != null ? stack1 : "")
    + "\n					</div>\n				</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\n<div class=\"menu-container\">\n	<div class='menu-container-inner box-menu-inner clearfix'>\n		<div class=\"menu-header\">\n			<div class=\"menu-header-inner\">\n"
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":15,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":4},"end":{"line":22,"column":11}}})) != null ? stack1 : "")
    + "			</div>\n		</div>\n		<div class=\"js-children\" role=\"list\">\n\n		</div>\n	</div>\n</div>\n";
},"useData":true});

return this["Handlebars"];

});