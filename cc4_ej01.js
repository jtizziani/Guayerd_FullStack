/*
Ejercicios con condicionales (parte 1):

1.	Agregar al ejercicio 5 de Variables un validador de datos. Si ingresa un número entonces 
    que me calcule las medidas, sino, que muestre un mensaje de error.
2.	Solicitar al usuario su edad. Si es menor de 18, decir que es menor de edad, sino decir 
    que es mayor .
3.	Contexto: Una heladería. Solicitar al usuario sus sabores en un solo input. Luego preguntar 
    si quiere cobertura de chocolate. Si dice Sí, mostrar el valor del helado 180 con el pedido 
    completo: “Su helado sabor …. con cobertura de chocolate cuesta $180”. En caso de que no la 
    requiera, será lo mismo pero sin cobertura de chocolate y el valor es de $150.
4.	Mejorar el ejercicio 1 de Variables: Solicitar al usuario dos números y mostrar por consola 
    el resultado de la suma de ambos. Informar al usuario si el número resultante es par o impar.
5.	Solicitar al usuario un número e indicar si es positivo, negativo o cero.
6.	Solicitar al usuario que ingrese un monto. Si el monto es mayor a 2000 que aplique un descuento 
    del 10%. Mostrar el total a pagar.
7.	Solicitar al usuario que ingrese una cadena de texto y luego un una posición. Indicar si el 
    dígito de esa posición es vocal o no lo es. (Puede ser consonante, espacio, comilla, etc.)
8.	Solicitar al usuario que ingrese una nota del 1 al 10. Si está entre 1 y 3 responder: Aplazado, 
    si está entre 4 y 5 responder: Reprobado , y 6 o más aprobado. 
9.	Solicitar al usuario dos números e indicar cual es el mayor o si son iguales.
10.	Solicitar al usuario que indique un mes (del 1 al 12) e indicar si tiene 30 días, 31 días o 
    28/29 días.

    Faltan estos 
11.	Solicitar al usuario que ingrese 3 números e indicar cual es el mayor.
12.	Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). 
    Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar 
    la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar 
    cuánto sería su vuelto. 
(Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50. Si indica que paga con menos 
    de lo que cuesta el producto, indicar un error).
13.	Solicitar al usuario un número de mes y devolver el nombre. (Ej: Ingreso 4 y me devuelve “Abril”).

BONUS:

1.	Solicitar al usuario su clave de 4 dígitos (que tendremos almacenada en una variable) y el 
    monto a retirar. Si la clave es correcta y el monto mayor al balance, realizar la operación. 
    Sino, mostrar un mensaje de error en caso de ser la clave incorrecta o pedir más dinero del 
    disponible.
2.	Solicitar al usuario su día y mes de nacimiento e indicar cual es su signo zodiacal.
3.	Solicitar al usuario que ingrese la hora y su nombre. Si son entre las 12 inclusive y 19 
    saludar con buenas tardes, entre 19 inclusive y 5 buenas noches, y entre 5 inclusive y 12 
    buenos días. 


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

   


