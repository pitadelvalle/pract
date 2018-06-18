var express = require ('express');
var path = require ('path');
var http = require ('http');

var app = express();

var IP_MALVADA ="128.95.40.1";

app.use((request,response,next)=>{
    if (request.ip === IP_MALVADA){
        response.status(401).send("intento de acceso no autorizado");
    }else {
        next();
    }
});

var publicPath = path.join (__dirname, 'public');
app.use('/recursos',express.static(publicPath));

app.get('/',(request,response)=>{
    response.end('Bienvenid@ a mi pagina principal');
});

app.get('/about',(request, response)=>{
    response.end('Bienvid@ a mi pagina acerca de...');
});

app.get('/weather',(request, response)=>{
    response.end('Hoy habra un clima soleado');
});

app.get('/bienvenida/nombre',(request,response)=>{
    response.end('Bienvenid@'+ request.params.nombre+',')
});

app.use((request, response)=>{
    response.writeHead(404,{"Content-type":"text/html"});
    response.end("<h2>404 Not Found!<h2>");
    //response.redirect("http//google.com.mx");
});
http.createServer(app).listen(3000);