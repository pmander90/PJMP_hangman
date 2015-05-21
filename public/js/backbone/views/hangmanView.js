var GrumblerView = Backbone.View.extend({
	className: "grumbler",
	tagName: "div",

	events: {
		'click .delete':'deleteGrumbler'
	},

	initialize: function(){
		console.log("New grumbler View instantiated");
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
		this.render();
	},
	deleteGrumbler: function(){
		this.model.destroy();
	},
	render: function(){
		var renderedHTML = HandlebarsTemplates['views/index'](this.model.toJSON());
		this.$el.html(renderedHTML);
	}
})