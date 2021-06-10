/*
3) Realizar una calculadora de sueldo neto. Se solicita ingresar el sueldo bruto y se descuenta: 
   Obra social 3%, jubilación 11%, Ley 19032 3%. Mostrar el monto de cada una de las deducciones y el monto final. 
   No contempla impuesto a las ganancias ni sindicatos.
ej: Sueldo bruto: $70.000
    Deducciones:
    Obra social: $2100
    Ley 19032: $2100
   Jubilación: $7700
   Neto a pagar: $58100

*/

let sb = parseFloat(prompt("Ingrese el Sueldo Bruto:"));
alert("Deducciones:\n Obra Social 3%:"+(sb * 0.03)+"\n Ley 19032 3% "+(sb * 0.03)+"\n Jubilacion 11%:"+(sb*0.11)+"\n Neto a Pagar :"+(sb-(sb*0.03)-(sb*0.03)-(sb*0.11)))