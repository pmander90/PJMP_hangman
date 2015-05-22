var HangmanView = Backbone.View.extend({
	className: "hangman",
	tagName: "div",

	events: {

	},

	initialize: function(){
		console.log("New hangman View instantiated");
		listenTo(this.model, 'change', this.render);
		this.render();
	},
	render: function(){
		var renderedHTML = HandlebarsTemplates['views/index'](this.model.toJSON());
		this.$el.html(renderedHTML);
	}
})