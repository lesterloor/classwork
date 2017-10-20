var express = require('express'),
    bodyParser = require('body-parser'),
    cons = require('consolidate'),
    dust = require('dustjs-helpers'),
    pg = require('pg'),
    app = express(),
    pug = require('pug'),
    urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(__dirname));
app.set('view engine', 'pug');
app.set('views', './myViews');
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/register', function (req, res) {
  res.render('register')

});
app.get('/login', function (req, res) {
  res.render('login')

});
app.get('/', function (req, res) {
  res.render('homepage')

});


app.listen(3000, function () {
  console.log('Example app listening on port 3000')
});
