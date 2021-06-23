/*
Ejercicios de funciones

Ejercicio 1 
Crear una función que reciba tu edad y retorne tu edad en años perro. (Multiplicado por 7).


*/

function edad_perro(edad){
       resultado = edad*7; 
       //alert("La edad en perro es:"+resultado)
       return resultado;
}

var resultado;
let edad = parseInt(prompt("Ingrese tu edad en nros: "));
edad_perro(edad);
alert(resultado)