// the backbone way
var Person = Backbone.Model.extend({

	defaults: {
		  name: 'Some Guy'
		, age: 21
		, occupation: 'Some Job'
	}

	, work: function() {
		return this.get('name') + ' is working.';
	}

});

// the javascript way
// specific to each instance
// var Person = function(config) {
// 	this.name = config.name;
// 	this.age = config.age;
// 	this.occupation = config.occupation;
// };

// will share this instance
// Person.prototype.work = function() {
// 	return this.name + ' is working.';
// };

