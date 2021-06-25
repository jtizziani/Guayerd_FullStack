/*
Ejercicio 8
    Realizar una función de carga de notas en un array. 
    Luego realizar otra función que calcule el promedio de todas y lo devuelva.


*/
var arreglo_notas = new Array();
var arreglo_notas_prom = new Array();
//var notas = parseInt(prompt("Ingrese una nota:"));
var suma = 0;
var prom = 0;
var x;

/*
function myFuntion(Event){
    x = Event.key;
    y = String.fromCharCode(x);
    return x
}
*/
function promedio(arreglo_notas){

    for (let j=0; j<arreglo_notas.length; j++){
         suma = suma + arreglo_notas[j];
         //alert("suma"+suma)
         numerador = j+1;
    }
    prom = (suma / numerador);
    //alert("funcion promedio"+prom);
    return(prom)

}


let i = 0;
let notas = parseInt;
while (notas != null){
       notas = parseInt(prompt("Ingrese una nota: \n Esc para terminar"));
       if (notas >= 0){
            arreglo_notas[i] = notas;
            i+=1;
       } else break
       //if (notas != ){
       //    break 
       //}
    esc = 1;
}
alert(arreglo_notas);
promedio(arreglo_notas);
alert("El promedio de notas de "+arreglo_notas+" es de: "+prom)