// Elementos extraidos de HTML
var cajaUser = document.getElementById("Usuario");
var cajaPass = document.getElementById("Password");
var escribir = document.getElementById("Escribir");
var boton = document.getElementById("Ingresar");
var hora = document.getElementById("Hora");
var formulario = document.getElementById("Formulario");
var prueba = document.getElementById("Prueba");
var ir = document.getElementById("Ir");

//Arreglos o Arrays
var bancos = [];

// variables
var saldoP = 5000000+ " $";
var saldoB = 10000 + " $";
formulario.style.display = "none";
ir.style.display = "none";

// Instancias
var tiempo = new Date();

//Eventos
boton.addEventListener("click", ingresar);

//funciones
function ingresar()
{
  console.log(cajaUser, cajaPass);
  cajaUser =  cajaUser.value;
  cajaPass =  parseInt(cajaPass.value);
  if (cajaUser == "jose" && cajaPass == 1234)
  {
    escribir.innerHTML = "Bienvenido: "+ cajaUser + "<br>"
    + "Su saldo disponible: "+ saldoP;
    hora.innerHTML = tiempo;
    prueba.innerHTML = "Elige una opcion, para realizar dentro del sistema: ";
    formulario.style.display = "block";
    ir.style.display = "block";
  }
  else {
    alert("Datos no coinciden");
  }
}
