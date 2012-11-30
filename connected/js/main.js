// the backbone way
var Person = Backbone.Model.extend({

	defaults: {
		  name: 'Some Guy'
		, age: 21
		, occupation: 'Some Job'
	}

	, validate: function(attrs) {

		if (attrs.age < 0) {
			return 'Age must be positive';
		}

		if (!attrs.name) {
			return 'Every person must have a name';
		}

	}	

	, work: function() {

		return this.get('name') + ' is working.';
	}

});

// view is representation of single element
// include jquery first in html
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

var person = new Person();
var personView = new PersonView({ model: person });