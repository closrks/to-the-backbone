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

	// automatically run on instance
	, initialize: function() {
		this.render();
	}

	// call depending on project
	, render: function() {
		// anti-pattern
		this.$el.html( this.model.get('name')  + ' (' + this.model.get('age') + ') - ' + this.model.get('occupation'));
	}
});

var person = new Person();
var personView = new PersonView({ model: person });