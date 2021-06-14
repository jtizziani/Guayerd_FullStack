/*
16)	Solicitar al usuario que ingrese números. Finalizar cuando ingrese un número múltiplo de 3. 
    Mostrar todos los números ingresados.

*/

let nros = parseInt(prompt("Ingrese numeros a la lista"));
let b = "s";
let arreglo = new Array();
let ix = 0;
let i;

while ((nros % 3) !== 0){
    arreglo[ix]=nros;
    nros = parseInt(prompt("Ingrese numeros a la lista"));
    ix++;
}
console.log("Listado de nros ingresados\n");
for (i=0; i<arreglo.length; i++){
   console.log(arreglo[i]+",")
}   
