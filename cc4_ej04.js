/*
4.	Mejorar el ejercicio 1 de Variables: Solicitar al usuario dos números y mostrar por consola 
    el resultado de la suma de ambos. Informar al usuario si el número resultante es par o impar.

1)  Solicitar al usuario dos números y mostrar por consola el resultado de la suma de ambos.
*/


let nro1 = parseFloat(prompt("Ingrese nro1"));
let nro2 = parseFloat(prompt("Ingrese nro2"));

let s = (nro1+nro2);
if (s % 2 == 0){
    alert("La suma de " + nro1 +" mas "+nro2+" es igual a "+s+"la suma es par")     
}else alert("La suma de " + nro1 +" mas "+nro2+" es igual a "+s+"la suma es impar")
