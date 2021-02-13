var villaP = document.getElementById("villaPlatzi");
var lienzo = villaP.getContext("2d");
document.addEventListener("keydown", moveCerdo);

var cantidad = aleatorio(1, 20);

var a = 250;
var b = 250;

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var fondo = {
  url: "villa.png",
  cargaOk: false
};

var vaca = {
  url: "vaca.png",
  cargaOk: false
};

var pollo = {
  url: "pollo.png",
  cargaOk: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOk: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

function moveCerdo (evento)
{
  var movimiento = 10;
    switch (evento.keyCode)
   {
      case teclas.UP:
      dibujar();
      b = b - movimiento;
      break;

      case teclas.DOWN:
      dibujar();
      b = b + movimiento;
      break;

      case teclas.LEFT:
      dibujar();
      a = a - movimiento;
      break;

      case teclas.RIGHT:
      dibujar();
      a = a + movimiento;

      break;
      default:
      //console.log("esta es otra tecla");
  }
}

function cargarFondo ()
{
  fondo.cargaOk = true;
  dibujar();
}
function cargarVaca ()
{
  vaca.cargaOk = true;
  dibujar();
}
function cargarPollo ()
{
  pollo.cargaOk = true;
  dibujar();
}
function cargarCerdo ()
{
  cerdo.cargaOk = true;
  dibujar();
}
function dibujar ()
{
  if (fondo.cargaOk)
  {
      lienzo.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOk)
  {
      console.log(cantidad);
      for(i = 0; i < cantidad; i++)
      {
        var x = aleatorio(0, 5);
        var y = aleatorio(0, 5);
        x = x * 70;
        y = y * 70;
        lienzo.drawImage(vaca.imagen, x, y);
      }
  }
  if (pollo.cargaOk)
  {
      for(i = 0; i < cantidad; i++)
      {
        var x = aleatorio(0, 450);
        var y = aleatorio(0, 450);
        lienzo.drawImage(pollo.imagen, x, y);
      }
  }
  if (cerdo.cargaOk)
  {
      for(i = 0; i < 1; i++)
      {
        /*var x = aleatorio(0, 450);
        var y = aleatorio(0, 450);*/
        lienzo.drawImage(cerdo.imagen, a, b);
      }
  }
}
/*function dibujoVaca ()
{
  lienzo.drawImage(vaca, 10, 10);
}

function dibujoPollo ()
{
  lienzo.drawImage(pollo, 150, 150);
}

function dibujoCerdo ()
{
  lienzo.drawImage(cerdo, 300, 300);
}*/
function aleatorio (min, maxi)
{
  var resultado;
  resultado = Math.floor (Math.random() * (maxi - min +1)) + min;
  return resultado;
}
var z;
/*for (i = 0; i< 10; i++)
{
  z = aleatorio (10, 20);
  document.write(z + " , ");
}*/
