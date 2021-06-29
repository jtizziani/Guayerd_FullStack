/*
Ejercico 4

    Calculadora. Pedir ingresar dos números. Luego ingresar una operación (SUMA/RESTA/MULTI/DIV/POTENCIA). 
    Realizar la operación y mostrar el resultado en pantalla.


*/

function suma(nro1,nro2){
    suma = nro1 + nro2;
    return suma;

}

function resta(nro1,nro2){
     rest = nro1 - nro2;
     return rest;
}

function multiplicacion(nro1,nro2){
    mult = nro1 * nro2;
    return mult;
}

function division(nro1,nro2){
    if (nro2 !== 0 ){
       divi = nro1 / nro2
    } else alert("el numero "+nro1+"no se puede dividir por cero!!")
 
    return divi;
}

function potencia(nro1,nro2){
    pote = Math.pow(nro1,nro2);
    return pote;
}

// Declaracion variables
var suma;
var rest;
var milt;
var divi;
var pote;

let operacion = prompt(" Ingrese la operacion que desea realizar: \n S - Suma \n R - Resta \n M - Multiplicacion \n D - Division \n P - Potencia");
operacion = operacion.toUpperCase();

if ((operacion === "S") | (operacion === "R") | (operacion === "M") | (operacion === "D") | (operacion === "P")){   
    if (operacion === "S"){
        var nro1 = parseFloat(prompt("Ingrese nro1:"));
        var nro2 = parseFloat(prompt("Ingrese nro2:"));
        suma(nro1,nro2);
        alert("La suma es: "+suma); 
        operacion === "X"     
    }
    if (operacion === "R"){
        var nro1 = parseFloat(prompt("Ingrese nro1:"));
        var nro2 = parseFloat(prompt("Ingrese nro2:"));
        resta(nro1,nro2);
        alert("La resta es: "+rest);        
    }
    if (operacion === "M"){
        var nro1 = parseFloat(prompt("Ingrese nro1:"));
        var nro2 = parseFloat(prompt("Ingrese nro2:"));     
        multiplicacion(nro1,nro2);  
        alert("La multiplicacion es: "+mult);      
    }
    if (operacion === "D"){
        var nro1 = parseFloat(prompt("Ingrese nro1:"));
        var nro2 = parseFloat(prompt("Ingrese nro2:"));
        division(nro1,nro2);
        alert("La div es: "+divi);        
    }
    if (operacion === "P"){
        var nro1 = parseFloat(prompt("Ingrese base:"));
        var nro2 = parseFloat(prompt("Ingrese expo"));
        potencia(nro1,nro2);   
        alert(""+nro1+"elevado a la potencia"+nro2+"es: "+pote);
        operacion === "X"
    }
}

