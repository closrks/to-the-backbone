// get truth out of the DOM
// define your model

// constructor function
// specific to each instance
var Person = function(config) {
	this.name = config.name;
	this.age = config.age;
	this.occupation = config.occupation;
};

// will share this instance
Person.prototype.work = function() {
	return this.name + ' is working.';
};