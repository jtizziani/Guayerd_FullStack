/*
Ejercicio 9

    Un restaurant desea mejorar su sistema de reserva para mostrar a los clientes un aproximado de costos. 
    - Cada menor de edad pagará el menú $450 y cada adulto, $700. 
    - Si el grupo tiene más de 4 adultos, se hará un 10% al total de la factura. 
    Mostrar por pantalla la cantidad de comensales y el costo total a pagar. 
    const ej9restaurant = [25,17,18,44,12,9,36,50]

script
ingreso el nro de comensales a reservar
si el nro de comensales son mas de 4 adultos se hace un 10% de descuento del total de la factura



*/
function descuento(total_fact){
         desc =  total_fact *(10/100);
         return desc

}

let adul = 0;
let meno = 0;
var desc;
var total_fact = 0;
const ej9restaurant = [25,17,18,44,12,9,36,50]
alert(ej9restaurant);

for (let i =0; i<ej9restaurant.length; i++){
     //alert(ej9restaurant[i]);
     if (ej9restaurant[i] > 17){
          adul = adul + 1;
          total_fact = total_fact + 700;

     }
     if ((ej9restaurant[i] < 18)){
          meno = meno + 1;
          total_fact = total_fact + 450;
     } 
}
comensales = adul +meno;
if (adul >= 4){
    descuento(total_fact);
    alert("Los comensales son: "+comensales+"\n Comensales monores "+meno+"\n Comensales Mayores "+adul+"\n Total Facturado $"+total_fact+"\n Descuento $"+desc+"\n Total a Pagar $"+(total_fact-desc));

}
if (adul < 4){
    desc = 0;
    alert("Los comensales son: "+comensales+"\n Comensales monores "+meno+"\n Comensales Mayores "+adul+"\n Total Facturado $"+total_fact+"\n Descuento $"+desc+"\n Total a Pagar $"+(total_fact-desc));

}