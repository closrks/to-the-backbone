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
	'models/workspaceModel'
],

function(_, $, Backbone, Marionette, WorkspaceLayoutView, WorkspaceModel){


	// new marionette application
    var app = new Backbone.Marionette.Application();

    // visual area of the DOM
    app.addRegions({
    	workspace: '#workspace-content'
    });

    // add app initializer
    app.addInitializer( function () {

    	var workspaceModel = new WorkspaceModel();
    	app.workspace.show( new WorkspaceLayoutView({model: workspaceModel}) );
    });

    $(function(){
    	app.start();	
    });

});