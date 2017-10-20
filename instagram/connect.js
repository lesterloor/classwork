var pg = require('pg');

//connect to blog database
var pool = new pg.Pool('postgres://admin:blu@localhost:5432/blogDB');

pool.connect()
