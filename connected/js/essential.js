(function() {

	window.App = {
		Models: {}
		, Views: {}
		, Collections: {}
	};

	window.template = function(id) {
		return _.template( $('#' + id).html() );
	};

	// model person
	App.Models.Person = Backbone.Model.extend({

		defaults: {
			  name: 'Some Guy'
			, age: 21
			, occupation: 'Some Job'
		}

	});

	// a view for person
	App.Views.Person = Backbone.View.extend({

		tagName: 'li'

		// underscore templating system
		, template: template('personTemplate')

		// call depending on project
		, render: function() {
			// pass data to template and return template
			this.$el.html( this.template(this.model.toJSON()) );

			// always return this from render method to chain
			return this;
		}
	});

	// a view for people
	App.Views.People = Backbone.View.extend({

		tagName: 'ul'

		, initialize: function() {

		}

		, render: function() {

			// filter through all items in a collection
			// for each, create a new PersonView
			// render and append to this tag name
			// underscore allows you to pass in 'this'/view context
			this.collection.each( function(person) {
				var personView = new App.Views.Person({ model: person });
				this.$el.append(personView.render().el);
			}, this);

			// always return this from render method to chain
			return this;
		}
	});

	// a list of people
	App.Collections.People = Backbone.Collection.extend({
		// model the collection should know
		model: App.Models.Person
	});


	// current chaos
	var peopleCollection = new App.Collections.People([
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

	var peopleView = new App.Views.People({ collection: peopleCollection });
	$(document.body).append(peopleView.render().el);

})();

