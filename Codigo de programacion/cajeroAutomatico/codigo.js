var botun = document.getElementById("boton");
botun.addEventListener("click", entregarDinero);
var r = document.getElementById("resultado");
var dinero = 0;
var papeles;
var div;

class Billete{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}
var caja = [];
caja.push(new Billete(100, 5));
caja.push(new Billete(50, 5));
caja.push(new Billete(20, 5));
caja.push(new Billete(10, 5));
caja.push(new Billete(5, 2));

var entregado = [];

function entregarDinero ()
{
  var t = document.getElementById("cajaNumero");
  dinero = parseInt(t.value);

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
    r.innerHTML = "No tengo esa cantidad disponible";
  }
  else
  {
    for (var e of entregado)
    {
      if (e.cantidad > 0)
      {
        r.innerHTML+= "Cantidad de Billetes: " +
        e.cantidad + " El valor del billete $" + e.valor + "<br>";
      }
    }
  }
}
