/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Bootstrap/js/bootstrap.d.ts" />
/// <reference path="../../../resources/Require.js/require.d.ts" />
/// <reference path="../../../resources/Velocity.js/velocity.d.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var InquiryRecommendMain = (function () {
    function InquiryRecommendMain() {
    }
    InquiryRecommendMain.prototype.ngOnInit = function () {
    };
    InquiryRecommendMain.prototype.moveInquiryRecommendConditionDiv = function () {
        $("div.inquiry-recommend-condition-title-vertical-center").each(function (index, element) {
            var _this = this;
            requirejs(['jquery', 'velocity'], function ($, Velocity) {
                $(_this).velocity({ translateX: "-50%", translateY: "-50%" }, { duration: 10 }).velocity({ top: 30, translateX: "-50%", scale: 0.7 }, { duration: 1000 });
            });
            //$(this).addClass("inquiry-recommend-condition-div-move");
            //$(this).css("transform", "translate( -50% , -150px ) scale( 0.7, 0.7 )");
        });
        $("#inquiry-recommend-condition-title-container").each(function (index, element) {
            var _this = this;
            requirejs(['jquery', 'velocity'], function ($, Velocity) {
                $(_this).velocity({ "min-height": 100 }, { duration: 1000 });
            });
        });
        requirejs(['jquery', 'velocity'], function ($, Velocity) {
            $("#inquiry-recommend-condition-container").velocity("fadeIn", { duration: 1000, display: "table" });
        });
    };
    InquiryRecommendMain = __decorate([
        core_1.Component({
            selector: 'router-anchor',
            template: "    \n  \t\t\t<div id=\"inquiry-recommend-condition-title-container\" style=\"min-width:400px;min-height:300px;position:relative;\">\n  \t\t\t\t<div class=\"container-fluid inquiry-recommend-condition-title-vertical-center\" (click)=\"moveInquiryRecommendConditionDiv();\"><!--/container start-->\n    \t\t\t\t<div class=\"row\"><!--/row-search-bar start-->\n    \t\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-lg-12\">\n    \t\t\t\t\t\t<ul class=\"nav nav-pills\" role=\"tablist\">\n\t\t\t\t\t\t\t  <li role=\"presentation\"><a><h3>Wheel</h3></a></li>\n\t\t\t\t\t\t\t  <li class=\"just-left-border\" role=\"presentation\"><a><h3>Tire</h3></a></li>\n\t\t\t\t\t\t\t  <li class=\"just-left-border submenu\" role=\"presentation\"><a><h3>Tools</h3></a></li>\n\t\t\t\t\t\t\t</ul>\n    \t\t\t\t\t</div>\n    \t\t\t\t</div>\n    \t\t\t</div><!--/container-->\n  \t\t\t</div>\n  \t\t\t<div id=\"inquiry-recommend-condition-container\" class=\"container\" style=\"display:none\" ><!--/container start-->\n    \t\t\t<div class=\"row\"><!--/row-search-bar start-->\n    \t\t\t \t\n    \t\t\t\t<div class=\"col-xs-0  col-sm-1 col-md-2 col-lg-2\"></div>\n    \t\t\t\t<div class=\"col-xs-12 col-sm-10 col-md-8 col-lg-8\">\n    \t\t\t\t\t<div class=\"white-panel\" style=\"border:none;\">\n\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\tWheel Hub Diameter <a><i class=\"fa fa-check-square\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t\t\t\t\t<span class=\"just-right-border\" style=\"margin:10px;\"></span>\n\t\t\t\t\t\t\t\t\t<div class=\"checkbox just-bottom-border\">\n\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input type=\"checkbox\"> 14\"</label>\n\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input type=\"checkbox\"> 15\"</label> \n\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input type=\"checkbox\"> 16\"</label> \n\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input type=\"checkbox\"> 17\"</label> \n\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input type=\"checkbox\"> 18\"</label> \n\t\t\t\t\t\t\t\t\t\t<label style=\"margin-right:15px\"><input type=\"checkbox\"> 19\"</label> \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n    \t\t\t\t</div>\n    \t\t\t\t<div class=\"col-xs-0  col-sm-1 col-md-2 col-lg-2\"></div>\n    \t\t\t</div>\n    \t\t</div><!--/container-->\n    \t\t\n    \t\t<style> \n\t\t\t\t.inquiry-recommend-condition-title-vertical-center{                  \n\t\t\t\t   \tposition: absolute;    \n\t\t\t\t  \ttop  : 50%;\n\t\t\t\t \tleft : 50%;                                                   \n\t\t\t\t  \ttransform: translate(-50%,-50%);\n\t\t\t\t}     \t\t\n\t\t\t\t    \t\t\n\t\t\t\t.inquiry-recommend-condition-div-move{\n\t\t\t\tanimation-fill-mode: forwards;\n\t\t\t\tanimation:move 1s;\n\t\t\t\t-webkit-animation:condition-div-shrink 1s; /*Safari and Chrome*/\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@keyframes condition-div-shrink\n\t\t\t\t{\n\t\t\t\t \tfrom{transform: translate(-50% , -50%) scale( 1 , 1 ) } \n\t\t\t\t \tto {transform: translate( -50% , -150px ) scale( 0.7, 0.7 ) } \n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@-webkit-keyframes condition-div-shrink /*Safari and Chrome*/\n\t\t\t\t{\n\t\t\t\t\tfrom{transform: translate(-50% , -50%) scale( 1 , 1 )} \n\t\t\t\t\tto {transform: translate( -50% , -150px ) scale( 0.7, 0.7 )} \n\t\t\t\t}\n    \t\t</style> \n\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], InquiryRecommendMain);
    return InquiryRecommendMain;
}());
exports.InquiryRecommendMain = InquiryRecommendMain;
//# sourceMappingURL=inquiry.recommend.main.component.js.map