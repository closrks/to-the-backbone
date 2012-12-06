define([
	'underscore',
	'jquery',
	'backbone',
	'marionette',
	'views/chartItemView'
],

function(_, $, Backbone, Marionette, ChartItemView) {

	var workspaceLayoutView = Backbone.Marionette.Layout.extend({

		id: 'workspace-layout'

		, template: '#template-workspace'
		
		, regions: {
			  mainchart: '#mainchart'
			, subchart: '#subchart'
		}

		, events: {
			'click #mainchart': 'toggleMainChart'
			, 'click #subchart': 'toggleSubChart'
		}

		, workspaceModel: null

		, initialize: function() {	

			this.workspaceModel = this.options.model
		}

		, toggleMainChart: function() {

			var mainchartShown = this.workspaceModel.get('mainchart');

			if (!mainchartShown) {
				this.mainchart.show( new ChartItemView() );
				this.workspaceModel.set('mainchart', true);
			}
			else {
				this.mainchart.close();
				this.workspaceModel.set('mainchart', false);
			}
		}

		, toggleSubChart: function() {

			var subchartShown = this.workspaceModel.get('subchart');

			if (!subchartShown) {
				this.subchart.show( new ChartItemView() );
				this.workspaceModel.set('subchart', true);
			}
			else {
				this.subchart.close();
				this.workspaceModel.set('subchart', false);
			}
		}

	});

	return workspaceLayoutView

});

