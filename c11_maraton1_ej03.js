/*
Ejercicio 3
    Ingresar un texto. Preguntar si quiere ver el resultado en pantalla (alert) o 
    consola (console.log). Pasar el texto a MAYUSCULA y mostrar donde corresponda.

*/

let texto = prompt("Ingrese un texto:");
let condicion = prompt("Elija donde quiere ver? \n P  - Por Pantalla \n C - Por Consola");
condicion = condicion.toUpperCase();
if ((condicion === "P")|(condicion === "C")){
    if (condicion === "P"){
        alert("El texto ingresado es: "+texto.toUpperCase());
    }
    if (condicion === "C"){
        console.log("El texto ingresado es: "+texto.toUpperCase());
    }
}else alert("La condicion incorrecta")
