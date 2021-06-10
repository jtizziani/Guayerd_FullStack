/*
5) Crear un conversor de medidas. Pedirle al usuario que ingrese una medida en metros 
   y pasarlo a pies, centimetros y pulgadas. Mostrar por consola los tres resultados.
*/

let med_cen = parseFloat(prompt("conversor Centimetros a Pies:"));
let med_pie = parseFloat(med_cen/30.48);
console.log(med_cen +"centimetros equivalen a: "+med_pie+" pies")
