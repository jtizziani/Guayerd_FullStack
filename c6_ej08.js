/*
 Preguntar al usuario cuántos números quiere ingresar. Luego solicitar que los ingrese uno 
 por uno y mostrar cuál es el mayor.

*/
let contador = 1;
let cant = parseInt(prompt("cuántos números quiere ingresar?"));
//let numero = 0;
let mayor = 0;
while (contador <= cant){
          let numero = parseInt(prompt("Ingrese una valor"));
          if (numero > mayor){
              mayor = numero; 
          } 
          contador ++


}
alert("el numero mayor ingresado es "+mayor)