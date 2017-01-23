import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { InquiryRecommendComponent }  from './inquiry.recommend.component';
import { InquiryRecommendMain }  from './inquiry.recommend.main.component';

export const inquriyRecommendRoutes: Routes = [
  	{
    	path: '',
    	component: InquiryRecommendMain
  	}
];

export const inquiryRecommendRouting: ModuleWithProviders = RouterModule.forChild( inquriyRecommendRoutes );