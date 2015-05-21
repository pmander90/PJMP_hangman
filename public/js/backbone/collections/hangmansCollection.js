console.log("hey");
var HangmansCollection = Backbone.Collection.extend({
	model: HangmanModel,
	url: "/words"

})