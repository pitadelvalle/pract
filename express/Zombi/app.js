var http = require('http');
var path = require ('path');
var express = require ('express');
var logger= require('morgan');
var bodyParse =require('body-parser');

var app = express();
app.set('views',path.resolve(__dirname,'views'));
app.set('view engine','ejs');
var entries = [];
app.locals.entries=entries;

app.use(logger('dev'));
app.use(bodyParse.urlencoded({extended:false}));

app.get('/',(request,response) => response.render('index'));


//app.use((request,response)=>response.status(404).render('404'));

http.createServer(app).listen(3000,()=>
console.log('La aplicacion Zombi esta corriendo en el puerto 3000'));