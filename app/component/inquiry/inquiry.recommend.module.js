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
var common_1 = require('@angular/common');
var inquiry_recommend_routing_1 = require('./inquiry.recommend.routing');
var inquiry_recommend_component_1 = require('./inquiry.recommend.component');
var inquiry_recommend_main_component_1 = require('./inquiry.recommend.main.component');
var item_detail_component_1 = require('../item/item.detail.component');
var item_list_component_1 = require('../item/item.list.component');
var InquiryRecommendModule = (function () {
    function InquiryRecommendModule() {
    }
    InquiryRecommendModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                inquiry_recommend_routing_1.inquiryRecommendRouting,
            ],
            declarations: [
                inquiry_recommend_main_component_1.InquiryRecommendMain,
                inquiry_recommend_component_1.InquiryRecommendComponent,
                item_detail_component_1.ItemDetailComponent,
                item_list_component_1.ItemListComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], InquiryRecommendModule);
    return InquiryRecommendModule;
}());
exports.InquiryRecommendModule = InquiryRecommendModule;
//# sourceMappingURL=inquiry.recommend.module.js.map