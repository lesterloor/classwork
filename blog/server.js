var express = require('express'),
    bodyParser = require('body-parser'),
    cons = require('consolidate'),
    dust = require('dustjs-helpers'),
    pg = require('pg'),
    app = express(),
    pug = require('pug'),
    Sequelize = require('sequelize'),
    connection = new Sequelize('blogdatabase','lester','blu',{
      dialect: 'postgres'
    }),
    urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(__dirname));
app.set('view engine', 'pug');
app.set('views', './myViews');
app.use(bodyParser.urlencoded({ extended: true }));

const Article = connection.define("blogarticle", {

    title: {
      type: Sequelize.STRING,
      unique: true,
      validate:{
        len: {
          args: [5, 100],
          msg: 'Please enter a longer title'
        }
      }
    },
    images: Sequelize.TEXT,
    body: {
      type: Sequelize.TEXT,
    }
}, {
  timestamps: false
});








app.get('/', function (req, res) {
  res.render('homepage')

});
app.get('/addPost', function (req, res, next) {
  res.render('addPost');
});
// app.post('/action',  function (req, res) {
//   res.send('you sent me"'+ req.body.name+'".');
//
// });
// app.get('/submit', function (req, res) {
//   res.render('submit');
//
//
// });
app.post('/submit', urlencodedParser, function (req, res) {

  const gottitile = req.body.name;
  const gotbody = req.body.body;
  const gotimage = req.body.image;
  console.log(gottitile)
  connection.sync(
    //OverWrties all data
        // {
        // force:true,
        // logging: console.log
        // }
  ).then(function(){
    var req = {
      body:  {
          slug: gottitile,
          title: gottitile,
          body: gotbody,
          images: gotimage
        }
    }
    Article.create(req.body).then(function(insertedArticle){
      console.log(insertedArticle.dataValues);
      res.redirect('/blog');
    })


  }).catch(function (error){
    console.log(error)
  });

});
app.get('/blog', function (req, res) {
  Article.findAll().then(function(rows){



       res.render('blog',{databasePost:rows});

   })


});
// app.get('/contact', function (req, res) {
//   res.render('contact')
// });
app.get('/register', function (req, res) {
  res.render('register')
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000')
});
