/*
Ejercicio 5
    Realizar una función que reciba como parámetro un número. Si esta entre 5 y 10, que 
    le aplique la función de factorial (ejercicio 12 de bucles), si es menor , aplicar 
    una función que muestre su módulo (valor absoluto, valor sin el “-” en caso de ser negativo), 
    y si es mayor que 10 aplicarle una función que muestre su doble. Ejemplos de entrada y salida:
    6 → 6! = 720
    4 → |4| = 4
    -8 → |-8| = 8
    50 → 100
    11 → 22

*/

function numeros(nro){
 
    if (nro >=5 & nro <=10){
        factor = 1;
        if (nro !== 0){
            for (j=1; j<=nro; j++){
                 factor = factor * j;          
            }
        }
        resultado = factor;
    }
    if (nro < 5){
        modulo = Math.abs(nro);
        resultado = modulo;
    }
    if (nro > 10){
        doble = nro*2;
        resultado = doble;  
    }
return(resultado)
}
    
var factor;
var modulo;
var doble;
var j;
let nro =parseInt(prompt("Ingrese un nro"));   
numeros(nro);
if (nro>=5 & nro<=10){
    //console.log("el Factorial de "+nro+"! es "+resultado);
    alert("el Factorial de "+nro+"! es "+resultado);
}
if (nro<5){
    //console.log("el Modulo de |"+nro+"| es"+resultado);
    alert("el Modulo de |"+nro+"| es "+resultado);

}
if (nro>10){
    //console.log("el Doble de "+nro+" es"+resultado);
    alert("el Doble de "+nro+" es "+resultado);
}