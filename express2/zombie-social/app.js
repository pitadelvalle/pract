var express = require("express");
var mongoose = require("mongoose");

var path = requiere("path");
var bodyParser = require("body-parser");
var cookieParser = require ("cookie-parser");
var session = require ("express-session");
var flash = require ("connnect-flash");

var routes = require ("./routes");
var app = express();

mongoose.connect ("mongodb://localhost:27017/zombie_nest");
app.set("views",path.resolves(__dirname,"views"));

app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({
    secret: "",
    resave:true,
    saveUninitialized:true
}));
app.use(flash());
app.use(routes);

app.listen(app.get("port"),()=>{
    console.log("La aplicacion inicio por el puerto" + app.get("port"));
});