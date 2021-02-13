var express = require ("express");

var app = express();


app.get("/", inicio);
app.get("/final", final);

function final(req, res)
{
  res.send("Hola esta es otra pestaña!");
}

function inicio(req, res)
{
  res.send("hola esto es un prueba ño sea gochera");
}

app.listen(8080);
