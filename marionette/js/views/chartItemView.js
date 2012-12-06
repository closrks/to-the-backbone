define([
	'underscore',
	'jquery',
	'backbone',
	'marionette'
],

function(_, $, Backbone, Marionette) {

	var chartItemView = Backbone.Marionette.ItemView.extend({

		tagName: 'h1'
		
		, template: '#template-chart'

	});

	return chartItemView;

});

