/*
Ejercicio 7
    Dado el siguiente array de nombres, recorrerlo y mostrar en pantalla: 
    Indice (posición) y 
    Nombre con la primera letra en mayúscula.

*/


let arreglo = new Array;
let arreglo1 = new Array;
let arreglo2 = new Array;
let alumno = prompt("Ingrese nombre de alumno");
let i = 0;
alumno = alumno.toUpperCase();

let continua = "";
while (alumno !== "SALIR"){
      arreglo[i] = alumno;
      alumno = prompt("Ingrese nombre de alumno");
      alumno = alumno.toUpperCase();
      i = i+1;

}    

alert(arreglo);
i=0;
for (var j = 1; j <= arreglo.length; j++){
     arreglo1[j] = arreglo[i].toLowerCase();
     i = i+1; 
     //alert("Indice: Posicion "+j+" Nombre:"+arreglo1[j].charAt(0).toUpperCase()+string.slice(1));
     //arreglo[j] = arreglo1[j].charAt(0).toUpperCase()+String.slice(1);)
     alert("Indice: Posicion "+j+" Nombre:"+(arreglo1[j].replace(/\b\w/g, l => l.toUpperCase())));
     arreglo1[j]= arreglo1[j].replace(/\b\w/g, l => l.toUpperCase());
}
alert(arreglo1)