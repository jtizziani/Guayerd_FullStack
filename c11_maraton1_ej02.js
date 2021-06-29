/*
Ejercicio 2

    Pedir al usuario dos números y mostrar la suma y resta de ellos. 
    Para la resta, restar siempre al más grande el más chico.



*/

function suma(nro1,nro2){
        suma = nro1 + nro2;
        alert("la suma de "+nro1+ " mas "+nro2+" es :"+suma);
        //return suma;

}

function resta(nro1,nro2){
         if (nro1 > nro2){
             resta = nro1 - nro2;
             alert("la resta de "+nro1+" menos "+nro2+" es :"+resta);
         }
         if (nro1 < nro2){
             resta = nro2 - nro1;
             alert("la resta de "+nro2+" menos "+nro1+" es :"+resta);
         }
         if (nro1 === nro2){
             resta = 0;
             alert("la resta de "+nro1+" menos "+nro2+" es :"+resta);
         }
         //return resta;
}

var suma;
var resta;


var nro1 = parseFloat(prompt("Ingrese nro1:"));
var nro2 = parseFloat(prompt("Ingrese nro2:"));

suma(nro1,nro2);
resta(nro1,nro2);

