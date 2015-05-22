var HangmansListView = Backbone.View.extend({
	el: '#hangman',

	initialize: function(){
		
		this.listenTo(this.collection, 'reset', this.renderAll);

		this.listenTo(this.collection, 'add', this.renderOne);
		console.log("created Hangman's List View");
	},

	renderOne: function(grumbler){
		var view = new HangmanView({model: hangman});
		this.$el.append(view.$el);
	},
	renderAll: function(){
		this.$el.empty();
		this.collection.each(this.renderOne.bind(this));
	}
})