/*
Ejercicios con condicionales (parte 1):

1.	Agregar al ejercicio 5 de Variables un validador de datos. Si ingresa un número entonces 
    que me calcule las medidas, sino, que muestre un mensaje de error.
5)  Crear un conversor de medidas. Pedirle al usuario que ingrese una medida en metros 
    y pasarlo a pies, centimetros y pulgadas. Mostrar por consola los tres resultados.
*/

let med_cen = parseFloat(prompt("conversor Centimetros a Pies:"));
let med_pie = parseFloat(med_cen/30.48);
if (!isNaN(med_cen)){
    alert(med_cen +"centimetros equivalen a: "+med_pie+" pies");
}else alert("El valor ingresado no es un nro!!")


// Usamos la funcion isNaN()  esta funcion devolvera falso siempre y cuando el valor que le pasemos 
// un numero, y verdadero en caso contrario
// const valor = 4;
// isNaN(valor); //False
// isNaN("cadena"); //True
// isNaN({}); // True
// isNaN(1.1); // False

   


