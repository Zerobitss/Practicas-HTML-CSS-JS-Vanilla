Javascript

/*
transferir 1500 de cliente a destino

* banco cliente
* cuenta cliente
* saldo cliente
* banco destino
* cuenta destino
* hora de transferencia (0-24)

condiciones obligatorias de transferencias:
* cliente verificado (verdadero o falso)
* destino verificado (verdadero o falso)
* saldo mayor al monto a transferir mas costo de transaccion , es decir, valor de transaccion mas costo de transferencia

parametros del costo de transaccion:
* si el banco destino es el mismo al banco del cliente el costo de transaccion es 0
* si el banco destino es diferente al banco del cliente el costo de transaccion es 100
* solamente se pueden hacer transferencias en el horario de 9 a 12 o de 15 a 20
*/

const bancoorigen = 'Bancomer';
const comisiontransferencia = 100;

var bancos = [];
bancos[1] = 'Bancomer';
bancos[2] = 'Banamex';
bancos[3] = 'Otro';

// Creamos la definición de un objeto
classCliente{
  constructor(n, cta, s){
    this.nombre = n;
    this.numcta = cta;
    this.saldo = s;
  }
}

classClientedestino{
  constructor(n, cta, b, monto){
    this.nombre = n;
    this.numcta = cta;
    this.banco = b;
    this.montotransferido = monto;
  }
}

var nombrecliente = prompt('Nombre del cliente');
var numcuentaorigen = prompt('Ingresa tu numero de cuenta');
var origenok = prompt('¿Están correctos tus datos?');
var cuentacliente = false;
var cuentadestino = false;

if(origenok == "n" || origenok == "no" || origenok == "null" || origenok == null || origenok == "" ){
  document.write('Gracias, que tenga un buen día');
}
else{
  cuentacliente = true;

  // * aqui se declara el cliente origen
  var tarjetahabiente = new Cliente(nombrecliente, parseInt(numcuentaorigen), 1600);

  var nombreclientedestino = prompt('Titular de la cuenta para transferencia');
  var opcionbanco = prompt('Selecciona banco destino:\n 1-Bancomer / 2-Banamex / 3-Otro');
  var numcuentadestino = prompt('Ingresa numero de cuenta destino');
  var destinook = prompt('¿Están correctos los datos del destinatario?');

  if(origenok == "n" || origenok == "no" || destinook == "null" || destinook == null || destinook == "" ){
    document.write('Ingrese los datos correctamente');
  }
  else{
    cuentadestino = true;
    var montoctatransferir = prompt('Ingresa monto de la cantidad a transferir');

    // * aqui se declara el cliente destino
    var destinatario = new Clientedestino(nombreclientedestino, parseInt(numcuentadestino), parseInt(opcionbanco),parseInt( montoctatransferir));


    // Para el botón realizar transferencia
    var btnenviar = document.getElementById('btn-enviar');
    btnenviar.addEventListener('click', realizarTransferencia);
  }
}

function realizarTransferencia(){
  var cliente = document.getElementById('nombre-cliente');
  var ctaor = document.getElementById('numcta-origen');
  var saldoant = document.getElementById('saldo-anterior');
  var saldoact = document.getElementById('saldo-actual');

  var clientedestino  = document.getElementById('nombre-clientedestino');
  var bancodestino  = document.getElementById('banco-destino');
  var ctadestino = document.getElementById('numcta-destino');
  var saldomonto = document.getElementById('monto-transferido');
  var operaciontransferencia = 0;

  var resultado = document.getElementById('resultado-transferencia');
  var comision = document.getElementById('comision-transferencia');

  var horamovimiento;
  var hora = document.getElementById('hora');
  var fecha = newDate();

  hora.innerHTML = 'Hora en la que se realiza la transferencia: ' + fecha.getHours() + ':' + fecha.getMinutes() + ' hrs.';
  horamovimiento = parseInt(fecha.getHours());

  // valida hora
  if( (( horamovimiento >= 9) && ( horamovimiento < 12)) || (( horamovimiento >= 15) && ( horamovimiento < 20)) ){
    // Valida banco destino
    if( bancoorigen == bancos[destinatario.banco]){
      comision.innerHTML = 'Transferencia sin comision';
      operaciontransferencia =  tarjetahabiente.saldo - destinatario.montotransferido;
    }
    else{
      operaciontransferencia = tarjetahabiente.saldo - (destinatario.montotransferido + comisiontransferencia);
      comision.innerHTML = 'Transferencia con cargo de $100 adicionales al monto transferido';
    }
    // valida el saldo
    if( ( operaciontransferencia >= 0 ) && ( operaciontransferencia <= tarjetahabiente.saldo ) ){
      resultado.innerHTML += 'Transferencia exitosa<br />';

      cliente.innerHTML += 'Nombre del cliente: ' + tarjetahabiente.nombre;
      ctaor.innerHTML += 'Numero de cuenta: ' + tarjetahabiente.numcta;
      saldoant.innerHTML += 'Saldo anterior: ' + tarjetahabiente.saldo;
      saldoact.innerHTML += 'Saldo actual: ' + operaciontransferencia;

      clientedestino.innerHTML += 'Nombre del Destinatario: ' + destinatario.nombre;
      bancodestino.innerHTML += 'Banco al que pertenece: ' + bancos[destinatario.banco];
      ctadestino.innerHTML += 'Numero de cuenta: ' + destinatario.numcta;
      saldomonto.innerHTML += 'Saldo transferido: ' + destinatario.montotransferido;
    }
    else{
      document.getElementById('comision-transferencia').style.display = 'none';
      cliente.innerHTML += 'Nombre del cliente: ' + tarjetahabiente.nombre;
      ctaor.innerHTML += 'Numero de cuenta: ' + tarjetahabiente.numcta;
      saldoant.innerHTML += 'Actualmente tienes un saldo de: ' + tarjetahabiente.saldo;
      resultado.innerHTML += 'No se puede realizar la operación, revise si tiene el saldo suficiente';
    }
  }
  else{
    resultado.innerHTML += 'No se puede realizar transferencia en este horario<br />';
  }

  document.getElementById('btn-enviar').disabled = true;
}
