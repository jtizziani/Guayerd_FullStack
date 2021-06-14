/*

15)	Solicitar al usuario que ingrese una lista de supermercado y al final mostrar todos 
    los items separados por comas. 
 

*/

let cadena = prompt("Ingrese productos a la lista");
let b = "s";
let arreglo = new Array();
let ia = 0;
let i;

while (b == "s"){
       arreglo[ia]=cadena;
       b = prompt("Desea agregar otro producto a la lista? S/N");
       if (b == "s" | b == "S"){
           cadena = prompt("Ingrese productos a la lista");
           ia++;
       }else if (b !== "s" | b !== "S"){
                console.log("Listado de productos \n");
                for (i=0; i<arreglo.length; i++){
                   console.log(arreglo[i]+",\n");
                }

            }
       }




