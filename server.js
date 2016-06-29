var express = require ('express');

var app = express();
var port =3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit');
		next();
	},
	logger: function(req, res, next) {
		console.log('Request:' + new Date().toString + ' ' + req.method + '' + req.originalUrl);
		next();
	}
};
app.use(middleware.logger);
// app.use(middleware.requireAuthentication);
// app.get('/', function (req, res) {
// 	res.send('hello EXPRESS!');
// });
app.get('/about',middleware.requireAuthentication, function (req, res) {
	res.send('we are learning!');
});

app.use(express.static(__dirname + '/public'));
// console.log(__dirname);
app.listen(port, function() {
	console.log('express srever started on port' + port + '!');
});