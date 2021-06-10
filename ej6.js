/*
6) Solicitar al usuario dos números y mostrar el resultado de la suma. 
   Luego solicitar al usuario un tercer número y multiplicarlo por el resultado anterior. 
   Mostrar el resultado final.
*/

let num1 = parseFloat(prompt("ingrese primer numero:"));
let num2 = parseFloat(prompt("ingrese segundo numero:"));

console.log("la suma de los numeros 1 y 2 es:"+(num1+num2));
let num3 = parseFloat(prompt("ingrese tercer numero:"));
console.log("La suma de los nros 1 y 3 multiplicados por nro3 es:"+((num1+num2)*num3))



