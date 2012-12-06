define([
	'underscore',
	'jquery',
	'backbone',
	'marionette'
],

function(_, $, Backbone, Marionette) {

	var workspaceModel = Backbone.Model.extend({

		defaults: {
			  mainchart: false
			, subchart: false	
		}

	});

	return workspaceModel;

});

