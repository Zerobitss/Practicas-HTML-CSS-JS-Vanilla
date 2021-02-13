var bancoCliente = parseInt(prompt("Elige en que banco quieres Ingresar \n Opcion 1: PlatziBank \n Opcion 2: BankOfAmerica"));
var nombreUsuario = prompt("Escribe el nombre de tu usuario: ");
var passBanco = parseInt(prompt("Escribe la contraseña de tu banco"));
var saldoDisponibleP = 5000000 + " $";
var saldoDisponibleB = 10000 + " $";
var costoTransf = 0;
var cuentaDestino;
var hora = new Date();

var boton = document.getElementById("caja");
var escribir = document.getElementById("dineroActual");
var escribirE = document.getElementById("errorDato");
var prueba = document.getElementById("prueba");

if (bancoCliente == 1)
{
  bancoCliente = "PlatziBank";
  if(nombreUsuario == "jose" && passBanco == 1234)
  {
    escribir.innerHTML = "Bienvenido: "+nombreUsuario+ "<br>"+
    "<br>" + "Haz ingresado a: "+ bancoCliente +"<br>" +
    "<br> Su saldo disponible es: <strong>" +saldoDisponibleP+ "</strong> <br>";
    document.getElementById("horaServidor").innerHTML = hora;
  }
}
 if (bancoCliente == 2)
{
  bancoCliente = "BankOfAmerica";
  if (nombreUsuario == "jose" && passBanco == 12345)
  {
    escribir.innerHTML = "Bienvenido: "+nombreUsuario+ "<br>"+
    "<br>" + "Haz ingresado a: "+ bancoCliente +"<br>" +
    "<br> Su saldo disponible es: <strong>" +saldoDisponibleB+ "</strong> <br>";
    document.getElementById("horaServidor").innerHTML = hora;
  }
}
else
{
  escribirE.innerHTML = "Los datos son erroneos";
}
if(hora > 0)
{
  prueba.innerHTML = "puedes transferir";
}
