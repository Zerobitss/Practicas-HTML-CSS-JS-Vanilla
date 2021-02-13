//var dinero = parseInt(prompt(dinero));
var dinero = 110;
var papeles;
var div;

class Billete{
  constructor(n, v, c){
    this.nombre = n
    this.valor = v;
    this.cantidad = c;
  }
}
var caja = [];
caja.push(new Billete("Billete de 50: ", 50, 3));
caja.push(new Billete("Billete de 20: ", 20, 2));
caja.push(new Billete("Billete de 10: ", 10, 2));

var entregado = [];

for (var b of caja)
{
  if (dinero > 0)
  {
    div = Math.floor( dinero / b.valor);
  }
  if (div > b.cantidad)
  {
    papeles = b.cantidad;
  }
  else
  {
    papeles = div;
  }
  entregado.push(new Billete("Billete de: ", b.valor, papeles));
  dinero = dinero - (b.valor * papeles);
  /*console.log(dinero);
  document.write(dinero+ " , ");*/
}
  console.log(entregado);
  document.write(dinero);
