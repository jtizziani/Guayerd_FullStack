/*
Ejercicio 12

Realizar una función que pida la temperatura máxima y mínima del día, indicando magnitud y 
medida (Farenheit o Celsius), y mostrar la temperatura media (promedio de ambas), en ambos sistemas.


tmpMax = temperatura maximo
tmpmin = temperatura minimo
med = medida(si es Farenheit o Celsius)

*/


function calc_prom_temp(tmpMax,tmpmin,med){
    if (med == "C"){     
        mediaC = (tmpMax + tmpmin)/2;
        mediaF = (mediaC*(9/5))+32;
    }    
    if (med == "F"){     
        mediaF = (tmpMax + tmpmin)/2;
        mediaC = (mediaF - 32)*(5/9);
        
    } 
    return(mediaF,mediaC)     
}

var media = 0;
var tmpMax = parseFloat(prompt("Ingrese la temperatura maxima")); 
var tmpmin = parseFloat(prompt("Ingrese la temperatura minima"));
var med = prompt("Ingrese tipo de Medida \n C - Celsius \n F Farenheit");
if (med == "C" | med == "F"){
    calc_prom_temp(tmpMax,tmpmin,med);
    alert("La temperatura promedio en Celcius es de: "+mediaC+"\n La temperatura promedio en Farenheit es: "+mediaF)    
    console.log(("La temperatura promedio en Celcius es de: "+mediaC+"\n La temperatura promedio en Farenheit es: "+mediaF))
} else alert("La medida ingresada es incorrecta!!!")
