/*
12)	Realizar un programa que pida un número y calcule su factorial.  
    (Ejemplo de factorial: 5! Factorial de 5 es 5*4*3*2*1 )

*/

let n = parseInt(prompt("Ingrese un valor"));
let valor = 1;
let r = 0;
if (n >= 0){
    if (n > 0){
        for( let j = 0; j < n; j++){
            valor = (valor *(n-r));
            r++
    
        }
        alert("El factorial de "+n+" es : "+valor)
}   else  alert("El factorial de "+n+" es 1 ")
}else alert("Error, debe ser valor positivo")


