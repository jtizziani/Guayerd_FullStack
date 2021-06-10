/*
14) Solicitar al usuario un número y almacenarlo en una variable. 
    Sumarle 5 , multiplicar el resultado por 10 y sacar el resto de su división por 3. 
    Mostrar el resultado sin comas.


*/

let numero = parseFloat(prompt("ingrese un numero"));
let suma = numero + 5;
let mult = suma*10;
let rest = mult % 3;
//alert(rest)

alert("ingresamos el numero"+numero+" le sumamos 5"+suma+"lo multiplicamos por 10"+mult+"sacas el resto de la div por 3"+rest)
