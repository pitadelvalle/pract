var express = require ("express");

var app = express(); 

app.get("/",(req, res)=>{
    res.send("Utilizando el verco GET");
});

app.post("/",(req,res)=>{
    res.send("Utilizando el verbo POST");
});

app.put("/",(req,res)=>{
    res.send("Utilzando el verbo PUT");
    put.status(400).send("Utilzando el verbo PUT");
});

app.delete("/",(req,res)=>{
    res.send("Utilizando el verbo DELETE");
    res.status(500).send("Utilizando el verbo DELETE");
});

app.listen(3000);