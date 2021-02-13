var botun = document.getElementById("boton");
botun.addEventListener("click", entregarDinero);
var resultado = document.getElementById("resultado");
var fotos = document.getElementById("fotos");
var dineroActual = document.getElementById("dinero_actual");
var dinero = 0;
var papeles = 0;
var div = 0;

document.body.appendChild(fotos);
document.body.appendChild(resultado);
document.body.appendChild(dineroActual);

function mostrarDineroActual()
{
  document.body.removeChild(dineroActual);
  dineroActual = document.createElement("p");
  dineroActual.innerHTML = "Cantidad de billetes actuales <br />"
  for (var billete of caja) {
      dineroActual.innerHTML += + billete.valor+ billete.cantidad + "<br />";
  }
  document.body.appendChild(dineroActual);
}

class Billete{
  constructor(v, c)
  {
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;
    this.imagen.src = imagenes[this.valor];
  }
  mostrar()
  {
    fotos.appendChild(this.imagen);
  }
}
var imagenes = [];
imagenes ["1"] = "1.png";
imagenes ["5"] = "5.png";
imagenes ["20"] = "20.png";
imagenes ["50"] = "50.png";
imagenes ["100"] = "100.png";

var caja = [];
caja.push(new Billete(100, 5));
caja.push(new Billete(50, 5));
caja.push(new Billete(20, 5));
caja.push(new Billete(5, 5));
caja.push(new Billete(1, 2));

var entregado = [];

function entregarDinero ()
{
  var t = document.getElementById("cajaNumero");
  dinero = parseInt(t.value);

  // Eliminar resultados y billetes anteriores
  document.body.removeChild(fotos);
  document.body.removeChild(resultado);
  // Inicializar nuevamente los Elementos
  fotos = document.createElement("picture");
  resultado = document.createElement("p");

  for (var b of caja)
  {
    if (dinero > 0)
    {
      div = Math.floor( dinero / b.valor);

      if (div > b.cantidad)
      {
        papeles = b.cantidad;
      }

      else
      {
        papeles = div;
      }
      entregado.push(new Billete(b.valor, papeles));
      dinero -=  (b.valor * papeles);
    }
  }
  if (dinero > 0)
  {
    resultado.innerHTML = "No tengo esa cantidad disponible";
  }
  else
  {
    for (var billete of entregado)
    {
      var contador = 0;
      if (billete.cantidad > 0)
      {
fotos.innerHTML+= "<br> Cantidad de Billetes: "+
billete.cantidad +", El valor del billete $"+billete.valor+"<br>";
        for (i = 0; i < billete.cantidad; i++)
        {
        billete.mostrar();
        fotos.innerHTML += "  ";
        }
      }
      contador ++;
    }
    //mostrarDineroActual();
    document.body.appendChild(fotos);
    document.body.appendChild(resultado);
  }
}
