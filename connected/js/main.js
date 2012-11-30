// Person Model
var Person = Backbone.Model.extend({

	defaults: {
		  name: 'Some Guy'
		, age: 21
		, occupation: 'Some Job'
	}

});

// List of people
var PeopleCollection = Backbone.Collection.extend({
	// model the collection should know
	model: Person
});

// Person View
var PersonView = Backbone.View.extend({

	tagName: 'li'

	// underscore templating system
	, template: _.template( $('#personTemplate').html() )

	// automatically run on instance
	, initialize: function() {
		this.render();
	}

	// call depending on project
	, render: function() {
		// pass data to template and return template
		this.$el.html( this.template(this.model.toJSON()) );
	}
});

// current chaos
var peopleCollection = new PeopleCollection([
	{
		name: 'Carlos Avila'
		, age: 24
		, occupation: 'added-value'	
	}
	, {
		name: 'Carlos Evila'
		, age: 24
		, occupation: 'caa'
	}
	, {
		name: 'Carlos Ovila'
		, age: 24
	}
]);