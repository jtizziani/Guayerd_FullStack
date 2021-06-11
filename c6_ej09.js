/*
9)	Solicitar al usuario que ingrese la cantidad de números que quiera, uno por uno, 
    y mostrar cual es el menor de todos.
*/

let contador = 1;
let cant = parseInt(prompt("cuántos números quiere ingresar?"));
let ban = 0;
let menor = 0;
while (contador <= cant){
          let numero = parseInt(prompt("Ingrese una valor"));
          if (ban === 0){
              menor = numero
              ban ++
          }
          if (numero < menor){
              menor = numero; 
          } 
          contador ++
}
alert("el numero menor ingresado es "+menor)