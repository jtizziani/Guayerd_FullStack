/*
1) Crear un conversor de años a segundos. Solicitar al usuario una cantidad de días y mostrar su equivalente en segundos por consola o alert, a elección. (Pueden probar también con números con coma :) 2,5 años por ejemplo)

2) Solicitar al usuario que ingrese la cantidad de kilómetros que desea recorrer con su motocicleta. A continuación solicitar la velocidad promedio a la que desea ir en kilómetros por hora. Calcular el tiempo estimado en llegar a destino en minutos.  A tener en cuenta: la velocidad se calcula en metros sobre segundos!)

3) Realizar una calculadora de sueldo neto. Se solicita ingresar el sueldo bruto y se descuenta: Obra social 3%, jubilación 11%, Ley 19032 3%. Mostrar el monto de cada una de las deducciones y el monto final. No contempla impuesto a las ganancias ni sindicatos.
ej: Sueldo bruto: $70.000
    Deducciones:
    Obra social: $2100
    Ley 19032: $2100
   Jubilación: $7700
   Neto a pagar: $58100

*/

let dias = parseInt(prompt("Ingrese cantidad de dias a calcular:"));
//let nro2 = parseFloat(prompt("ingrese numero2:"));
alert(" "+dias+" dias son "+(((dias*24)*60)*60)+" Segundos")

