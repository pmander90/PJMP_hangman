// requiring packages and setting up http
var express = require("express")
var app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require("body-parser")
var mongoose = require('mongoose')
var routes = require("./routes.js")

// setting up body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// starting db connection, schema, model
mongoose.connect('mongodb://localhost/pjmp-hangman')
var db= mongoose.connection
var userSchema = mongoose.Schema({
	name: String
})
var wordSchema = mongoose.Schema({
	word: String
})
var User = mongoose.model('user', userSchema)
var Word = mongoose.model('word', wordSchema)

// setting up views and requiring public folder
app.set("view engine", "hbs")
app.use(express.static(__dirname + "/public"))

app.get("/", routes.index)





app.listen("3000", function(){
	console.log("listening on 3000")
})
