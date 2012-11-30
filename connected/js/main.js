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

	// call depending on project
	, render: function() {
		// pass data to template and return template
		this.$el.html( this.template(this.model.toJSON()) );

		// always return this from render method to chain
		return this;
	}
});

// View for people
var PeopleView = Backbone.View.extend({

	tagName: 'ul'

	, initialize: function() {

	}

	, render: function() {

		// filter through all items in a collection
		// for each, create a new PersonView
		// render and append to this tag name
		// underscore allows you to pass in 'this'/view context
		this.collection.each( function(person) {
			var personView = new PersonView({ model: person });
			this.$el.append(personView.render().el);
		}, this);

		// always return this from render method to chain
		return this;
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

var peopleView = new PeopleView({ collection: peopleCollection });
$(document.body).append(peopleView.render().el);