/// <reference path="../../../resources/jquery/jquery.d.ts" />
/// <reference path="../../../resources/Require.js/require.d.ts" />
/// <reference path="../../../resources/elevatezoom-master/elevatezoom.d.ts" />

import { Component, Input, ViewChild }  from '@angular/core';  

@Component(
	{
  		selector: 'item-detail-modal',
  		template: `
  			<div class="modal fade" id="item_detail_modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog">
			      	<div class="modal-content">
			         	<div class="modal-header">
			            	<h4 class="modal-title" id="myModalLabel">&nbsp;</h4>
			         	</div>
 						<div class="container-fluid">
    				  		<div class="row">
								<div class="col-xs-12 col-lg-12">
									<h4>61/2JX17</h4>
									<p><a class="btn btn-primary" href="http://www.xingmin.com/show-12-102-1.html" target="_blank" role="button">View data source »</a></p>
								</div>
							</div>
    				  		<div class="row"><!--/row start-->
    				  			<div class="col-xs-12 col-sm12 col-lg-12">
    				  				<ul id="myTab" class="nav nav-tabs">
										<li class="active">
											<a href="#supplierDetail-supplierTab" data-toggle="tab" class="bg-grey"><Strong>Matched Field</Strong></a>
										</li>
									</ul>
									<div id="myTabContent" class="tab-content">
										<div class="tab-pane fade in active" id="supplIerDetail-supplierTab">
											<div class="col-xs-12 col-sm12 col-lg-12">
												<table class="table">
													<tbody>
														<tr>
															<td>Offset</td>
															<td>39</td>
														</tr>
														<tr>
															<td>Center hole</td>
															<td>71.5</td>
														</tr>
														<tr>
															<td>PCD</td>
															<td>114.3</td>
														</tr>
														<tr>
															<td>Matched type</td>
															<td>225/55R17</td>
														</tr>
														<tr>
															<td>Thickness</td>
															<td>4.5 mm</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
    				  			</div><!-- end : column-items  col-xs-8 col-lg-8 --> 		
    						</div>
						</div><!--/container-->
			      	</div><!-- /.modal-content -->
				</div><!--end : model window-->     
      		</div>
      		<!--end : model window-->  
  		`,
	}
)

export class ItemDetailComponent {     

	errorMessage : String;

  	constructor (
  	
  	) {}
  	
  	ngOnInit() {
  	
  	}
}