//Reto 1.
//Instrucciones: este es un clásico de clásicos, pero haremos un pequeño cambio.
//En lugar de solo imprimir un mensaje en pantalla, pedirás al usuario que digite
//un nombre y mostrarás en pantalla lo siguiente: Hola, [nombre]
//Reto 2.
//Instrucciones: Ahora que sabemos incluir nombres, podemos agregar más datos.
//Intentemos con un apellido para tener algo así: ``Hola, [nombre] [apellido]```
var cajaText = document.getElementById("cajaTxt");
var boton = document.getElementById("btn");
var escribir = document.getElementById("copiar");

//evento
boton.addEventListener("click", imprimir);

//funcion
function imprimir()
{
  escribir.innerHTML+ = cajaText.value;
}
