define([
	'underscore',
	'jquery',
	'backbone',
	'marionette'
],

function(_, $, Backbone, Marionette) {

	var workspaceLayoutView = Backbone.Marionette.Layout.extend({

		id: 'workspace-layout'

		, template: '#template-workspace'
		
		, regions: {
			  mainchart: '#mainchart'
			, subchart: '#subchart'
		}

	});

	return workspaceLayoutView

});

