var express = require('express');
var gzippo = require('gzippo');
var app = express();

// Reference
// http://expressjs.com/guide.html
// https://github.com/spadin/simple-express-static-server
// http://devcenter.heroku.com/articles/node-js

// Configuration
app.configure(function(){
	//Replace the default connect or express static provider with gzippo's
	//app.use(express.static(__dirname + '/app'));
	app.use(gzippo.staticGzip(__dirname + '/app'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());

	// Template-enabled html view (by jade)
	// http://stackoverflow.com/questions/4529586/render-basic-html-view-in-node-js-express
	//app.set('views', __dirname + '/app/views');
	//app.register('.html', require('jade'));

	//Error Handling
	app.use(express.logger());
	app.use(express.errorHandler({
		dumpExceptions: true, 
		showStack: true
	}));

	//Setup the Route, you are almost done
	app.use(app.router);
});

app.get('/', function(req, res){
	//Apache-like static index.html (public/index.html)
	res.redirect("/app/index.html");
	//Or render from view
	//res.render("index.html")
});

//Heroku
var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on " + port);
});