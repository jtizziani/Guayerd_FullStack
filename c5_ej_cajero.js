/*
Algoritmo de cajero


* Pensar el algoritmo para crear un sistema de cajero bancario. Por el momento, solo permitirá realizar 1 acción y luego finalizará la sesión. La persona debe tener un usuario y contraseña para ingresar al sistema. Se le permitirá al usuario elegir entre realizar alguna de las siguientes acciones:
- Ver saldo actual.
- Retirar dinero.
- Depositar dinero en su cuenta.
- Cambiar su clave.

* Cuando tengas armado el algoritmo… a codear!

Pregunta: Cómo harías para que el usuario tuviera la posibilidad de realizar varias acciones? Es decir, luego de consultar su saldo, por ejemplo, que le vuelva a ofrecer el menú. (Pensarlo a nivel algoritmo)

BBP

ingresar el nro de dni
validar dni
ingresar pass
validar pass
ingresar usuario
validar usuario
Si usuario y dni es correcto
  ingresar al menu pincipal
       opcion 1 - ver saldo actual
       opcion 2 - hacer retiro (validar el monto -  no mayor a x pesos)
                                impimir comprobante de oepracion                                
       opcion 3 - deposito
                  preguntar que va a depositar : 1 efectivo
                                                 2 cheques
                 d1- Si la opcion es efectivo 
                         e1- abrir buzon de efectivo, validad monto
                         e2- validad los billetes(descartar billetes no leidos)
                         e3- informor monto a depositar
                         e4- esperar que cliente el monto a depositar
                         e5- preguntar si va a ingresar mas billetes
                         e6- esperar confirmacion  - si agrega mas billetes volver a e1
                                                     sino voy a e7
                         e7- imprimo comprobante de deposito
                         vuelvo a menu                                          
                 d2- sino si va a depositar cheques 
                         c1- abrir receptor de cheques, 
                         c2- leer el cheque
                         c3- Opcion de obtener una copia del/los cheques ingresados
                         c4- Pregunto si tengo mas cheques para depositar
                         c5 si es SI vuelvo a d2
                                  SINO vuelvo a menu
       opcion 4 - cambio de clave
                  ingrese clave nueva
                  repita clave nueva
                  imprimo comprobante de cambio de clave
       opcion 5 - Salir                                        
                           
                    



*/
var dni_us = 21407958;
var cla_us = 12345678;
var usu_us = jorge;
var sal_us = parseFloat(1560,67);
let cam_cla;
let cam_cla1;

var dni = prompt("Ingrese el su DNI");
var clave = promt("Ingrese su clave");
var usuario = prompt("Ingrese su usuario");
if (dni === dni_us && clave === cla_us && usuario === usu_us){
     alert("Hola"+usuario)
     let op = parseInt(prompt("Menu de ingreso\n 1 - Ver Saldo \n 2 - Retiros \n 3 - Depositos \n 4 - Cambio de Clave \n 5 - Salir"));
     if (op === 1){
         alert("Su saldo alctual es de "+sal_us+" pesos")
     }
     if (op === 2){
         let extracion = parseFloat(prompt("ingrese el monto a extraer"));
         if (extracion <= sal_us){
             alert("Ud retiro "+extracion+"pesos");
             sal_us = sal_us - extracion ;  // resto al saldo el monto extraido
         }else alert("Saldo insuficiente!!!")    
     } 
     if (op === 3){
         let d = perseInt("Ingrese tipo de Deposito: \n 1 - Efectivo \n 2 - Cheques ") ;
             if (d === 1 || d ===2){
                  if (d === 1){
                      let dep = parseFloat(prompt("Ingrese el monto a depositar"));
                      sal_us = sal_us + dep; // sumo el deposito al saldo actual 
                      alert("Su nuevo saldo es"+sal_us+" pesos");    
                  }
                  if  (d === 2){
                      let dep1 = parseFloat(prompt("Ingrese el monto del cheque a depositar")); 
                      alert("Su nuevo saldo es"+sal_us+" pesos y tiene "+dep1+" pendiente de acreditacion");
                      sal_us = sal_us + dep1; // sumo el deposito al saldo actual si el chequ esta correcto 
                  }
             }else alert("Opcion incorrecta")
     }
     if (op === 4){
         cam_cla = prompt("Ingrese nueva clave");
         cam_cla1 =  prompt("Repita nueva clave");
         if (cam_cla === cam_cla1){
             alert("Cambio de clave correcto")
             cla_us = cam_cla;
         }else alert("Error, claves incorrectas")
     }
}else alert("Error datos mal cargados") 



