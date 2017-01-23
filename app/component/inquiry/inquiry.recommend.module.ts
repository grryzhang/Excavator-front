import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { inquiryRecommendRouting } from './inquiry.recommend.routing';

import { InquiryRecommendComponent } from './inquiry.recommend.component';
import { InquiryRecommendMain      } from './inquiry.recommend.main.component';

import { ItemDetailComponent } from '../item/item.detail.component';
import { ItemListComponent   } from '../item/item.list.component';

@NgModule(
	{
  	  	imports: [
  	  	  	CommonModule,
    		inquiryRecommendRouting,
  	  	],
  	  	declarations: [
  	  		InquiryRecommendMain,
  	  		InquiryRecommendComponent,
  	  		ItemDetailComponent,
  	  		ItemListComponent
  	  	],
  	  	providers: [
  		]
	}
)

export class InquiryRecommendModule {

}