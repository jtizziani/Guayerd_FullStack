/*
3.	Contexto: Una heladería. Solicitar al usuario sus sabores en un solo input. Luego preguntar 
    si quiere cobertura de chocolate. Si dice Sí, mostrar el valor del helado 180 con el pedido 
    completo: “Su helado sabor …. con cobertura de chocolate cuesta $180”. En caso de que no la 
    requiera, será lo mismo pero sin cobertura de chocolate y el valor es de $150.
*/

let sabores = prompt("ingrese dos sabores a eleccion:");
let banio = prompt("Desea agregar banio de chocolate? Si o No");
if (banio == "Si" || banio == "No"){
     if (banio == "Si"){
         alert("Su helado sabor"+sabores+"con cobertura de chocolate cuesta $180")
     }else alert("Su helado sabor"+sabores+"sin cobertura de chocolate cuesta $150") 
     
}else alert("Error ")