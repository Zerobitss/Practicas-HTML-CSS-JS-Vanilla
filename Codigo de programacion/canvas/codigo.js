var ctxt = document.getElementById("cajaTexto");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
var d = document.getElementById("dibujo");
var ancho = d.width;
function dibujoPorClick ()
{
  var lienzo = d.getContext("2d");
  var lineas = parseInt(ctxt.value);
  var l = 0;
  var yi, xf;
  var espacio = ancho / lineas;

  function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }
  for (l = 0; l <= lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea ("red", 0, yi, xf, 300);
  }
  for (l = 0; l <= lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea ("blue", 300, yi, xf, 1);
  }
  alert ("tu numero de lineas fue: " + ctxt.value);
}
