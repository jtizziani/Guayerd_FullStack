
/*
Ejercicio 1
a) Solicitar al usuario que ingrese 5 nombres de frutas y almacenarlos en un array.
b) Ahora, solicitar al usuario que ingrese otros nombres de frutas, la cantidad que desee, sin pedirle de 
   antemano cuál será la cantidad a ingresar.
c) Concatenar ambos arrays y mostrarlo de dos formas diferentes: Con las 5 frutas al principio, y con 
   las 5 frutas al final.

Ejercicio 2
Crear un array con 10 nombres de ciudades, y solicitar al usuario que nos diga un número. Mostrar el 
nombre de la ciudad en esa posición del array.

Ejercicio 3
Utilizar el mismo array de ciudades, solicitar al usuario un número y remover esa cantidad de ciudades 
del array. Mostrar dos opciones: Sacando los datos desde el principio , y desde el final del array.

Ejercicio 4
Crear un array de 8 posiciones con nombres de artistas musicales y mostrar POR SEPARADO:
Su longitud
El último elemento.
Solo las posiciones pares
todos los elementos
todos los elementos menos el último 
Todos los elementos menos el primero
todos los elementos separados por “*”.
Solicitar al usuario un nuevo artista para reemplazar al último ingresado.

Ejercicio 5
Crear un array de 8 posiciones con números enteros  y mostrar:
Su longitud
Solo las posiciones impares.
Solo los NUMEROS impares.
El mayor de ellos
Mostrar la mitad de elementos del array. (Pensar esto como si no supieramos la cantidad de posiciones que 
    tiene.)

*/
/* Opcion a */
let frut1 = prompt("Ingrese fruta1");
let frut2 = prompt("Ingrese fruta2");
let frut3 = prompt("Ingrese fruta3");
let frut4 = prompt("Ingrese fruta4");
let frut5 = prompt("Ingrese fruta5");
let arreglo = new Array();
arreglo = [frut1, frut2, frut3, frut4, frut5];
alert(arreglo);
console.log(arreglo)
/* Opcion b */
let arreglo1 = [];
let i = 0;
let fruta ="a"
while (fruta != null){
       fruta = prompt("Ingrese una fruta: \n Esc para terminar");

       arreglo1[i] = fruta;
       i+=1;
       if (fruta === null){
           break 
       }
       
}alert(arreglo1);


/* Opcion c */
console.log(arreglo.concat(arreglo1));
alert(arreglo.concat(arreglo1))
console.log(arreglo1.concat(arreglo));
alert(arreglo1.concat(arreglo))
