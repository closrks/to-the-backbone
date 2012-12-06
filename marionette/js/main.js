var Chart = Backbone.Marionette.ItemView.extend({
	template: '#template-chart'
});

var app = new Backbone.Marionette.Application();

// regions of application
app.addRegions({
	  mainStage: '#main-stage'
	, subStage: '#sub-stage'
});

// initialize 
app.addInitializer(function() {
	app.mainStage.show(new Chart());
	app.subStage.show(new Chart());
});

$(function(){
	app.start();
});
