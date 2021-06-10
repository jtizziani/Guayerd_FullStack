/*
5.	Solicitar al usuario un número e indicar si es positivo, negativo o cero.
*/

let nro = parseInt(prompt("ingrese un numero?"));
if (nro != 0){
    if (nro > 0){
        alert("el valor ingresado es positivo")
    }else alert("El valor ingresado es negativo")
}else alert("El valor ingresado es 0")
