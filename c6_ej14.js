/*

14)	Solicitar al usuario que ingrese un número y una cadena de caracteres. 
    Mostrar por consola la cantidad de caracteres se hayan solicitado. 
    (Ejemplo: “Hola Guayerd” , 4), debe mostrar:
H
O
L
A


*/
let nro = parseInt(prompt("Ingrese un valor"));
let cadena = prompt("Ingrese una cadena de caracteres");

for ( let i=0; i<= nro; i++){
    console.log("\n"+cadena.charAt(i))
}