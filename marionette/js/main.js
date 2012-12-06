// Set the require.js configuration
require.config({

    baseUrl: 'js/'
    
    , libs: 'libs'

    , paths: {

		// Libraries
		'jquery': 'libs/jquery',
		'underscore': 'libs/underscore',
		'backbone': 'libs/backbone',
		'marionette': 'libs/backbone.marionette'
	}
});

require([
	'underscore',
	'jquery',
	'backbone',
	'marionette',
	'views/workspaceLayoutView',
	'views/chartItemView'
],

function(_, $, Backbone, Marionette, WorkspaceLayoutView, ChartItemView){


	// new marionette application
    var app = new Backbone.Marionette.Application();

    // visual area of the DOM
    app.addRegions({
    	workspace: '#workspace-content'
    });

    // add app initializer
    app.addInitializer( function () {

    	var workspaceLayoutView = new WorkspaceLayoutView();

    	app.workspace.show( workspaceLayoutView );
    	workspaceLayoutView.mainchart.show( new ChartItemView() );
    	workspaceLayoutView.subchart.show( new ChartItemView() );
    });

    $(function(){
    	app.start();	
    });

});