/*
10.	Solicitar al usuario que ingrese su nombre en minúscula y mostrarlo con la primera 
    letra mayúscula.
*/

let nombre = prompt("ingrese su nombre en minuscula");
alert("Hola "+nombre.charAt(0).toUpperCase()+nombre.slice(1))

//string.charAt(0).toupperCase()  --> retorna la primera letra en Mayusculas
//string.slice(1) --> retorna el resto de la cadena
