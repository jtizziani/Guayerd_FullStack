/*
5)	Solicitar al usuario que ingrese 10 números, calcular el factorial de cada uno de ellos y 
    mostrarlo.

*/

let nro =parseInt(prompt("Ingrese un nro"));
let factor;
let j;
let suma = 0;

for (let i=1; i < 11; i++){
    factor = nro;
    for (j=1; j<nro; j++){
        
        console.log("el factorial de "+nro+" es"+(factor=factor+(nro*j))) 
        factor= nro;
    }
    nro =parseInt(prompt("Ingrese un nro"));
}
