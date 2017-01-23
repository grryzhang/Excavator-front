/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Bootstrap/js/bootstrap.d.ts" />
/// <reference path="../../../resources/Require.js/require.d.ts" />
/// <reference path="../../../resources/Velocity.js/velocity.d.ts" />

import { Component, Output, EventEmitter, ViewChild  }      from '@angular/core';  

import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component(
	{
  		selector: 'router-anchor',
  		template:`    
  			<div id="inquiry-recommend-condition-title-container" style="min-width:400px;min-height:300px;position:relative;">
  				<div class="container-fluid inquiry-recommend-condition-title-vertical-center" (click)="moveInquiryRecommendConditionDiv();"><!--/container start-->
    				<div class="row"><!--/row-search-bar start-->
    					<div class="col-xs-12 col-sm-12 col-lg-12">
    						<ul class="nav nav-pills" role="tablist">
							  <li role="presentation"><a><h3>Wheel</h3></a></li>
							  <li class="just-left-border" role="presentation"><a><h3>Tire</h3></a></li>
							  <li class="just-left-border submenu" role="presentation"><a><h3>Tools</h3></a></li>
							</ul>
    					</div>
    				</div>
    			</div><!--/container-->
  			</div>
  			<div id="inquiry-recommend-condition-container" class="container" style="display:none" ><!--/container start-->
    			<div class="row"><!--/row-search-bar start-->
    			 	
    				<div class="col-xs-0  col-sm-1 col-md-2 col-lg-2"></div>
    				<div class="col-xs-12 col-sm-10 col-md-8 col-lg-8">
    					<div class="white-panel" style="border:none;">
							<form>
								<div class="form-group">
									Wheel Hub Diameter <a><i class="fa fa-check-square" aria-hidden="true"></i></a>
									<span class="just-right-border" style="margin:10px;"></span>
									<div class="checkbox just-bottom-border">
										<label style="margin-right:15px"><input type="checkbox"> 14"</label>
										<label style="margin-right:15px"><input type="checkbox"> 15"</label> 
										<label style="margin-right:15px"><input type="checkbox"> 16"</label> 
										<label style="margin-right:15px"><input type="checkbox"> 17"</label> 
										<label style="margin-right:15px"><input type="checkbox"> 18"</label> 
										<label style="margin-right:15px"><input type="checkbox"> 19"</label> 
									</div>
								</div>
							</form>
						</div>
    				</div>
    				<div class="col-xs-0  col-sm-1 col-md-2 col-lg-2"></div>
    			</div>
    		</div><!--/container-->
    		
    		<style> 
				.inquiry-recommend-condition-title-vertical-center{                  
				   	position: absolute;    
				  	top  : 50%;
				 	left : 50%;                                                   
				  	transform: translate(-50%,-50%);
				}     		
				    		
				.inquiry-recommend-condition-div-move{
				animation-fill-mode: forwards;
				animation:move 1s;
				-webkit-animation:condition-div-shrink 1s; /*Safari and Chrome*/
				}
				
				@keyframes condition-div-shrink
				{
				 	from{transform: translate(-50% , -50%) scale( 1 , 1 ) } 
				 	to {transform: translate( -50% , -150px ) scale( 0.7, 0.7 ) } 
				}
				
				@-webkit-keyframes condition-div-shrink /*Safari and Chrome*/
				{
					from{transform: translate(-50% , -50%) scale( 1 , 1 )} 
					to {transform: translate( -50% , -150px ) scale( 0.7, 0.7 )} 
				}
    		</style> 
		`
	}
)

export class InquiryRecommendMain {     



  	constructor (
  		
  	) {}
  	
  	ngOnInit() { 
  	

  	}
  	
  	moveInquiryRecommendConditionDiv(){
  		
    	$("div.inquiry-recommend-condition-title-vertical-center").each(
    	
    		function( index : any, element : any ){
 				
    			requirejs(
  					['jquery', 'velocity'],
  					( $ : any , Velocity : any  ) => {
  						$(this).velocity(
  							{ translateX:"-50%" , translateY:"-50%"  }, 
  							{ duration: 10 }
  						).velocity(
  							{ top:30 , translateX:"-50%" , scale:0.7  }, 
  							{ duration: 1000 }
  						);
					}
  				);
    			//$(this).addClass("inquiry-recommend-condition-div-move");
    			//$(this).css("transform", "translate( -50% , -150px ) scale( 0.7, 0.7 )");
    		}
    	);
    	
    	$("#inquiry-recommend-condition-title-container").each(
    	
    		function( index : any, element : any ){
 				
    			requirejs(
  					['jquery', 'velocity'],
  					( $ : any , Velocity : any  ) => {
  						$(this).velocity(
  							{ "min-height" : 100  }, 
  							{ duration: 1000 }
  						)
					}
  				);
    		}
    	);
    	

    			requirejs(
  					['jquery', 'velocity'],
  					( $ : any , Velocity : any  ) => {
  						$("#inquiry-recommend-condition-container").velocity(
  							"fadeIn", 
  							{ duration: 1000 , display: "table" }
  						)
					}
  				);
    }
}