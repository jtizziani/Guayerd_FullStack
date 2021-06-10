/*

13) Realizar el mismo ejercicio que el anterior pero al revés, de Farenheit a Celsius.

*/
let nombre = prompt("Ingrese su nombre");
let temp = parseFloat(prompt("ingrese una temperatura Fahrenheit"));
let cel = parseFloat((temp-32)*(5/9));
alert("Hola "+nombre+ "  "+temp+" Grados Fahrenheit son "+cel+" Celsius")