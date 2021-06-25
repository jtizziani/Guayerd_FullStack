/*
Ejercicio 11
Crear una función con 1 parámetro cantidad de números, que pida iterativamente la cantidad de 
veces ingresada. Ejemplo si por parámetro le paso 5, que pida 5 números. En cada iteración 
aplicarle a cada número y una función que los triplique. Guardar todos los resultados en un array.
Ejemplo: Paso por parámetro “4” a la función.
Luego ingreso 4 números: 30,15,11,14. El array final debe ser: 90,45,33,42.


Script
le paso un valor a la funcion
Se lo paso a la funcion
Lo que retorna la funcion lo pongo dentro de un for
y pido X veces un nro, 
a cada nro ingresado llamo a una funcion X3 que triplique el valor 
cada valor lo pongo dentro de un elemento de un arreglo


*/

// funcion a la que le paso un valor constante y el valor de retorno lo pongo dentro del for
// en este ejemplo le paso 4 y va a pedir 4 valores 
function valor_cont(constante){
    nro = constante;     
    return nro

}

// funcion que triplica los valores ingresado 
function triplica(numero){
       triplicado = numero*3;
       return triplicado

}

// declaro variables y arreglo
var  constante = 4;
arreglo = new Array;
let numero;
// guardo los valores triplicados en un arreglo y despus lo muestro
valor_cont(constante);
for (let i=0; i<nro; i++){
      numero = parseInt(prompt("Ingrese un numero"));
      triplica(numero);
      arreglo[i]=triplicado;
}
alert(arreglo)