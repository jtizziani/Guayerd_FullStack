/*
    Ejercicio 14 BONUS
    Realizar un conversor de monedas mejorado! Recibir tres parámetros: monto, moneda del monto, 
    y moneda a convertir. (Las monedas disponibles son: peso, euro, dolar, real, yen). 

*/

function conversor_moneda(monto,mnd,mnd_cvt){
        if  (mnd === "P"){
            if (mnd_cvt === "P"){
                resultado.toFixed(2) = monto;
            } 
            if (mnd_cvt === "D"){
                resultado.toFixed(2) = monto/dolar;
            }
            if (mnd_cvt === "R"){
                resultado.toFixed(2) = monto/real;
            }
            if (mnd_cvt === "E"){
                resultado.toFixed(2) = monto/euro;
            }            
        }
        if  (mnd === "D"){
            if (mnd_cvt === "P"){
                resultado = monto*dolar;
            } 
            if (mnd_cvt === "D"){
                resultado = monto;
            }
            if (mnd_cvt === "R"){
                factor = dolar/real;
                resultado = monto*factor;
            }
            if (mnd_cvt === "E"){
                factor = dolar/euro;
                resultado = monto*factor;
            }            
        }
        if  (mnd === "E"){
            if (mnd_cvt === "P"){
                resultado = monto*euro;
            } 
            if (mnd_cvt === "D"){
                factor = euro/dolar;
                resultado = monto*factor;
            }
            if (mnd_cvt === "R"){
                factor = euro/real;
                resultado = monto*factor;
            }
            if (mnd_cvt === "E"){
                resultado = monto;
            }            
        }
        if  (mnd === "R"){
            if (mnd_cvt === "P"){
                resultado = monto*real;
            } 
            if (mnd_cvt === "D"){
                factor = real/dolar;
                resultado = monto*factor;
            }
            if (mnd_cvt === "R"){
                resultado = monto;
            }
            if (mnd_cvt === "E"){
                factor = real/euro;
                resultado = monto;
            }            
        }
        return resultado;   
}
// Declaro las variables
var dolar = 174;
var real = 19.36;
var euro = 198;
var peso = 1
var factor;
let resul;
var monto = parseFloat(prompt("Ingrese el monto que desea convertir: "));
var mnd = prompt("Ingrese Moneda \n P - $Pesos \n E - Euro \n D - u$sDolar \n R - Real");
var mnd_cvt = prompt("Ingrese Moneda a Convertir \n P - $Pesos \n E - Euro \n D - u$sDolar \n R - Real");
mnd = mnd.toUpperCase()
mnd_cvt = mnd_cvt.toUpperCase()
if ((mnd === "P") | (mnd === "E") | (mnd === "D") | (mnd === "R")){      
    conversor_moneda(monto,mnd,mnd_cvt);
    resul = resultado.toFixed(2)
    console.log("Ud quiere cambiar"+monto+" "+mnd+" y convertirlos en "+resul+" "+mnd_cvt+" ");
    alert("Ud quiere cambiar "+monto+" "+mnd+"\n y convertirlos en "+resul+" "+mnd_cvt+" ");
}else alert("Ingreso una moneda incorrecta")
