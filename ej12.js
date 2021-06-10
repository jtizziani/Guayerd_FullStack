/*
12) Crear un conversor de Celsius a Farenheit. Solicitar al usuario su nombre y una temperatura 
y mostrar por consola su equivalente en Celsius junto con un mensaje que incluya ambos datos. 
*/

let nombre = prompt("Ingrese su nombre");
let temp = parseFloat(prompt("ingrese una temperatura Celsius"));
let far = parseFloat((temp*(9/5))+32);
alert("Hola "+nombre+ "  "+temp+" Grados Celsius son "+far+" Fahrenheit")
