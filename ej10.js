/*
10) Solicitar al usuario un monto y un número de descuento. 
    Mostrar al usuario cuánto es el precio final con el descuento aplicado.
*/

let monto = parseFloat(prompt("Ingrese una Monto"));
let descuento = parseFloat(prompt("ingrese el descuento"));
let des = parseFloat((descuento/100));
let pf =parseFloat(monto*des);
//alert(des);
alert("El precio final con descuento es:"+(monto - pf))