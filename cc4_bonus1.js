/*

1.	Solicitar al usuario su clave de 4 dígitos (que tendremos almacenada en una variable) y el 
    monto a retirar. Si la clave es correcta y el monto mayor al balance, realizar la operación. 
    Sino, mostrar un mensaje de error en caso de ser la clave incorrecta o pedir más dinero del 
    disponible.

*/

var usuario_ban = parseInt(1104);
var balance_ban = parseFloat(10000);
var balance_ban1 = parseFloat(0);

let usuario = parseInt(prompt("Ingrese su usuario de 4 digitos"));
if (usuario.toExponential.length = 4){
    if (usuario_ban === usuario){
        let monto = parseFloat(prompt("Ingrese el monto a retirar: "));    
        if ( balance_ban >= monto){
            balance_ban1 = balance_ban;
            balance_ban = balance_ban - monto;
            alert("Balance en $"+balance_ban1+ "\n Retiro de $"+monto+"\n Balance Actual $ "+balance_ban);
        } else if ( balance_ban < monto){
                   alert("Saldo insuficiente!!!")
               }     
    } else if (usuario_ban !== usuario){
              alert("Error en nro de usuario...")
           }    
} else if (usuario.toExponential.length != 4){
          alert("Error, el usuario es de 4 digitos, clave incorrecta")
       }

