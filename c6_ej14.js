/*

14)	Solicitar al usuario que ingrese un número y una cadena de caracteres. 
    Mostrar por consola la cantidad de caracteres se hayan solicitado. 
    (Ejemplo: “Hola Guayerd” , 4), debe mostrar:
H
O
L
A
15)	Solicitar al usuario que ingrese una lista de supermercado y al final mostrar todos 
    los items separados por comas. 
16)	Solicitar al usuario que ingrese números. Finalizar cuando ingrese un número múltiplo de 3. 
    Mostrar todos los números ingresados.
 

*/
let nro = parseInt(prompt("Ingrese un valor"));
let cadena = prompt("Ingrese una cadena de caracteres");

for ( let i=0; i<= nro; i++){
    console.log("\n"+cadena.charAt(i))
}