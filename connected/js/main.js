// the backbone way
var Person = Backbone.Model.extend({

	defaults: {
		  name: 'Some Guy'
		, age: 21
		, occupation: 'Some Job'
	}

	// backbone calls attrs on set
	// fail returns a false
	// listen for error obj.on('error', function(model, error) {
		// console.log(error);
	// })
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