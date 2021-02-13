var cuadro = document.getElementById("dibujo");
var papel = cuadro.getContext("2d");
document.addEventListener("keydown", dibujoPorTeclado);
var x = 150;
var y = 150;
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  papel.beginPath();
  papel.strokeStyle = color;
  papel.lineWidth = 3;
  papel.moveTo(xinicial, yinicial);
  papel.lineTo(xfinal, yfinal);
  papel.stroke();
  papel.closePath();
}
dibujarLinea ("green", 1, 1, 299, 1); // limite up
dibujarLinea ("green", 1, 1, 1, 299); // limite left
dibujarLinea ("green", 299, 299, 299, 1); // limite right
dibujarLinea ("green", 299, 299, 1, 299); // limite bottom
function dibujoPorTeclado(evento)
{
  var colorcito = "red";
  var movimiento = 5;
    switch (evento.keyCode)
   {
      case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento );
      y = y - movimiento;
      console.log("dibujar linea arriba");
      break;
      case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento );
      y = y + movimiento;
      console.log("dibujar linea abajo");
      break;
      case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y);
      x = x - movimiento;
      console.log("dibujar linea izquierda");
      break;
      case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y );
      x = x + movimiento;
      console.log("dibujar linea derecha");
      break;
      default:
      console.log("esta es otra tecla");
  }
}
