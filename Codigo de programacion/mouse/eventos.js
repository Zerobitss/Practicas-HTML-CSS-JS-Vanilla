var cuadro = document.getElementById("dibujo");
var papel = cuadro.getContext("2d");
document.addEventListener("mousedown", clickD);
document.addEventListener("mousemove", mouseMove);
document.addEventListener("mouseup", unClick);
var x = 150;
var y = 150;
var trazo = false;
dibujarLinea ("green", 1, 1, 299, 1); // limite up
dibujarLinea ("green", 1, 1, 1, 299); // limite left
dibujarLinea ("green", 299, 299, 299, 1); // limite right
dibujarLinea ("green", 299, 299, 1, 299); // limite bottom
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
function clickD (clickDown)
{
  if(clickDown.button == 0 && clickDown.buttons == 1)
  {
    trazo = true;
    x = clickDown.layerX;
    y = clickDown.layerY;
  }
}
function mouseMove(mover_mouse)
{
  var colorLinea = "black";
  if (trazo == true)
  {
      dibujarLinea(colorLinea, x, y, mover_mouse.layerX, mover_mouse.layerY)
      x = mover_mouse.layerX;
      y = mover_mouse.layerY;
  }
}
function unClick (soltar_mouse)
{
  trazo = false;
}
