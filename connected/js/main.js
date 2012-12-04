(function() {

	window.App = {
		Models: {}
		, Views: {}
		, Collections: {}
	};

	window.template = function(id) {
		return _.template( $('#' + id).html() );
	};

	App.Models.Task = Backbone.Model.extend({

		validate: function(attrs) {
			
			if (! $.trim(attrs.title) ) return 'task cannot be null/empty';
		}

	});

	App.Collections.Tasks = Backbone.Collection.extend({
		model: App.Models.Task
	});

	App.Views.Task = Backbone.View.extend({
		
		tagName: 'li'

		, template: template('taskTemplate')

		, initialize: function() {

			// set the context one of two ways
			// _.bindAll(this, 'editTask', 'render');
			this.model.on('change', this.render, this);
		}

		, events: {
			'click .edit': 'editTask'
		}

		, editTask: function() {
			var newTaskTitle = prompt('What would you like to change the text to', 
				this.model.get('title'));

			if ( ! newTaskTitle ) return;

			this.model.set('title', newTaskTitle);
		}

		, render: function() {

			this.$el.html( this.template(this.model.toJSON()) );

			return this;
		}
	});

	App.Views.Tasks = Backbone.View.extend({
		
		tagName: 'ul'

		, render: function() {

			this.collection.each(this.addOne, this);

			return this;
		}

		, addOne: function(task) {
			// create new child view
			var taskView = new App.Views.Task({ model: task});
			// append to the root element
			this.$el.append(taskView.render().el);
		}
	});


	// current chaos
	var tasks = new App.Collections.Tasks([
		{
			title: 'Go to the store'
			, priority: 4
		}
		, {
			title: 'Go to the mall'
			, priority: 2
		}
		, {
			title: 'Get to work'
			, priority: 5
		}
	]);

	var tasksView = new App.Views.Tasks({
		collection: tasks
	});

	$('.tasks').html( tasksView.render().el );

})();

