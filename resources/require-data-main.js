require.config(
		{
	    	//By default load any module IDs from scripts/app
	   	 	baseUrl: './resources',
	   	 	waitSeconds: 120,
	    	//except, if the module ID starts with "lib"
	     	paths: {
	        	'jquery'          : './jquery/jquery.min',
	        	'bootstrap'       : './Bootstrap/js/bootstrap',
	        	'Chart'           : './Chart.js/Chart',
	        	'elevatezoom'     : './elevatezoom-master/jquery.elevatezoom',
	        	'treegrid'        : './maxazan-jquery-treegrid/js',
	        	'twbsPagination'  : './twbsPagination/jquery.twbsPagination',
	        	'velocity'        : './Velocity.js/velocity.min',
       			'velocity-ui'     : './Velocity.js/velocity.ui',
	    	},
	    	// load backbone as a shim
	    	shim: {
	        	bootstrap:{
	      			deps:[
	        			'jquery',
	        			"css!./Bootstrap/css/bootstrap.min"
	      			]
	    		},
	    		elevatezoom:{
	      			deps:[
	        			'jquery',
	        			'bootstrap'
	      			],
	      			exports: 'Elevatezoom',
	    		},
	    		Chart:{
	    			deps:[
	        			'jquery',
	        			'bootstrap'
	      			]
	    		},
	    		treegrid:{
	    			deps:[
	        			'jquery',
	        			'bootstrap',
	        			'css!./maxazan-jquery-treegrid/css/jquery.treegrid'
	      			],
	      			exports: 'Treegrid',
	    		},
	    		twbsPagination:{
	    			deps:[
	        			'jquery',
	        			'bootstrap',
	      			],
	      			exports: 'TwbsPagination',
	    		},
	    		velocity: {
            		deps: [ 'jquery' ],
            		exports: 'Velocity',
        		},
        		velocityUI: {
            		deps: [ 'velocity' ],
            		exports: 'VelocityUI',
        		}
	    	},	
	    	map: {
        		'*': {
            		'css': './Require.js/css.min'
        		}
    		}
		}
	);
	
		    
    require(['jquery','bootstrap','twbsPagination'],function($,bootstrap,TwbsPagination){

	});