/*
6.	Solicitar al usuario que ingrese un monto. Si el monto es mayor a 2000 que aplique un descuento 
    del 10%. Mostrar el total a pagar.
*/

let importe = parseInt(prompt("Ingrese un monto"));
if (importe > 2000){
    alert("El monto es de $ "+importe+"\n Descuento 10% de $ "+(importe*0.1)+"\n Total a pagar $ "+(importe-(importe*0.1)))
}else alert("El monto es de $ "+importe+"\n Total a pagar $ "+(importe))
 