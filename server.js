// requiring packages and setting up http
var express = require("express")
var app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require("body-parser")
var mongoose = require('mongoose')
var $ = require('jquery')
var routes = require("./routes.js")


// setting up body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// starting db connection, schema, model
mongoose.connect('mongodb://localhost/pjmp-hangman')
var db= mongoose.connection
var wordsSchema = mongoose.Schema({
	word: String
})
var Word = mongoose.model('word', wordsSchema)
Word.remove({}, function (err){
	console.log("collection removed")
})
Word.create({word: "pizza"})
Word.create({word: "zoo"})
Word.create({word: "apple"})
Word.create({word: "mongoose"})
Word.create({word: "slice"})

// setting up views and requiring public folder
app.set("view engine", "hbs")
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + "/public"))


app.get('/', function(req, res){
	res.render('index');
}
app.get("/", routes.index)

app.get("/words", function(req, res){
	var query = Word.find({})
		query.select("-_id word")
		query.exec(function(err, words){
			res.setHeader("Content-Type", "application/json");
			res.send(words)
		})
})

io.on('connection', function(socket){
  socket.on('letter', function(char){
    io.emit('letter', char);
  });
});

app.listen("3000", function(){
	console.log("listening on 3000")
})
