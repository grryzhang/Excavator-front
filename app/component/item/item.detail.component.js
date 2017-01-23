/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Require.js/require.d.ts" />
/// <reference path="../../../resources/elevatezoom-master/elevatezoom.d.ts" />
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
var ItemDetailComponent = (function () {
    function ItemDetailComponent() {
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
    };
    ItemDetailComponent = __decorate([
        core_1.Component({
            selector: 'item-detail-modal',
            template: "\n  \t\t\t<div class=\"modal fade\" id=\"item_detail_modal\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n\t\t\t\t<div class=\"modal-dialog\">\n\t\t\t      \t<div class=\"modal-content\">\n\t\t\t         \t<div class=\"modal-header\">\n\t\t\t            \t<h4 class=\"modal-title\" id=\"myModalLabel\">&nbsp;</h4>\n\t\t\t         \t</div>\n \t\t\t\t\t\t<div class=\"container-fluid\">\n    \t\t\t\t  \t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-lg-12\">\n\t\t\t\t\t\t\t\t\t<h4>61/2JX17</h4>\n\t\t\t\t\t\t\t\t\t<p><a class=\"btn btn-primary\" href=\"http://www.xingmin.com/show-12-102-1.html\" target=\"_blank\" role=\"button\">View data source \u00BB</a></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n    \t\t\t\t  \t\t<div class=\"row\"><!--/row start-->\n    \t\t\t\t  \t\t\t<div class=\"col-xs-12 col-sm12 col-lg-12\">\n    \t\t\t\t  \t\t\t\t<ul id=\"myTab\" class=\"nav nav-tabs\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"active\">\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#supplierDetail-supplierTab\" data-toggle=\"tab\" class=\"bg-grey\"><Strong>Matched Field</Strong></a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t<div id=\"myTabContent\" class=\"tab-content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane fade in active\" id=\"supplIerDetail-supplierTab\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm12 col-lg-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Offset</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>39</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Center hole</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>71.5</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>PCD</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>114.3</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Matched type</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>225/55R17</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>Thickness</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>4.5 mm</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n    \t\t\t\t  \t\t\t</div><!-- end : column-items  col-xs-8 col-lg-8 --> \t\t\n    \t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div><!--/container-->\n\t\t\t      \t</div><!-- /.modal-content -->\n\t\t\t\t</div><!--end : model window-->     \n      \t\t</div>\n      \t\t<!--end : model window-->  \n  \t\t",
        }), 
        __metadata('design:paramtypes', [])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=item.detail.component.js.map