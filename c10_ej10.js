/*
Ejercicio 10

Vamos a realizar (intentando no llorar) un conversor de monedas. Primero vamos a generar una función que 
reciba dos parámetros, tipo de moneda y monto y la convierta a pesos. (Tipos de moneda aceptados dólares, 
euros y reales). 
Luego vamos a realizar una función que llame a esta función dos veces, con parámetros diferentes, sume 
ambos valores y devuelva el resultado.
Ejemplo: us$4, €3. Devuelve el total de: $1180. (Dificil no llorar a este punto). 


*/

function conversor(parametro1, parametro2){
        if (parametro1 === "D" ){
            monto_$ =parametro2 *dolares; 
        }
        if (parametro1 === "E" ){
              monto_$ =parametro2 *euros;
        }         
        if (parametro1 === "E" ){
              monto_$ =parametro2 *reales;   
        }      
        return monto_$            
        
}


var dolares = 170;
var euros = 200;
var reales =16;
var monto_$ = 0;  
let parametro1 = prompt("Ingrese el tipo de Moneda a convertir a pesos($) \n D - Dolares \n E - Euros \n R - Reales");
let parametro2 = parseFloat(prompt("Ingrese el monto a convertir a $ (pesos)"))
if (parametro1 == "D" | parametro1 == "E" | parametro1 == "R"){
    act = prompt("Desea actualizar los tipos de cambio?");
    if (act = "S"){
        dolares = parseFloat(prompt("Ingrese valor (pesos0)"));
        euros = parseFloat(prompt("Ingrese valor (pesos0)"));
        reales = parseFloat(prompt("Ingrese valor (pesos0)"));
    }    
    conversor(parametro1, parametro2);
    if (parametro1 === "D" ){
          console.log("Ud. ingreso "+parametro1+" Dolares Americanos \n Tipo de Cambio "+dolares+"\n Convertido a Pesos ($) son "+monto_$);
          alert("Ud. ingreso "+parametro1+" Dolares Americanos \n Tipo de Cambio "+dolares+"\n Convertido a Pesos ($) son "+monto_$);
    }
    if (parametro1 === "E" ){
          console.log("Ud. ingreso "+parametro1+" Euros \n Tipo de Cambio "+euros+"\n Convertido a Pesos ($) son "+monto_$);
          alert("Ud. ingreso "+parametro1+" Euros \n Tipo de Cambio "+euros+"\n Convertido a Pesos ($) son "+monto_$);
    }         
    if (parametro1 === "R" ){
          console.log("Ud. ingreso "+parametro1+" Reales \n Tipo de Cambio"+reales+"\n Convertido a Pesos ($) son "+monto_$);
          alert("Ud. ingreso "+parametro1+" Reales \n Tipo de Cambio "+reales+"\n Convertido a Pesos ($) son "+monto_$);   
    }      
    
}else alert("Moneda Erronea!!!");





