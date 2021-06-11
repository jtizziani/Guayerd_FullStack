/**
Ejercicios con cadenas de textos:

8.	Solicitar al usuario una letra y una cadena de texto e indicar si contiene la letra indicada.
 
*/

let cadena = prompt("ingrese un cadena de caracteres");
let letra = prompt("ingrese letra a buscar");
if (cadena.includes(letra)){
    alert("La cadena contiene a la letra "+letra);
} else alert("La cadena no contiene a la letra "+letra)   
