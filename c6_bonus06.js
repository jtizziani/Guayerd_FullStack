/*

6)	Solicitar al usuario que ingrese un número y mostrar esa cantidad de dígitos de la secuencia 
    de Fibonacci. 
*/

let fibo =parseInt(prompt("Ingrese cantidad de nros a mostrar en la secuancia de Fibonacci"));
let suma = 0;
let arreglo = [];

for (let i=0; i <= fibo; i++){
    if (i === 0){
        arreglo[i] = 0;
    } 
    if (i === 1){
        arreglo[i] = i;
    }
    if (i > 1){
        arreglo[i]=arreglo[i-2]+arreglo[i-1];
    }   
} console.log("La posicion "+fibo+" en la secuencia de Fibonacci es: "+arreglo[fibo])

