define([
	'underscore',
	'jquery',
	'backbone',
	'marionette'
],

function(_, $, Backbone, Marionette) {

	var chartItemView = Backbone.Marionette.ItemView.extend({

		template: '#template-chart'

		, render: function(){
			return this;
		}

	});

	return chartItemView;

});

