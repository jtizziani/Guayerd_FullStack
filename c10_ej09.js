/*
Ejercicio 9
    Escribir una función para cobrar en caja. Agregando funciones que: 
    * Si no es cliente A, agregue el IVA. 
    * Se solicite un monto de descuento a aplicar, y lo aplique.
    * Finalmente, realice el cobro solicitando al usuario con cuánto desea abonar.

*/
function add_iva(saldo){
         mci = saldo*1.21;
         return(mci) 
}

function add_des(desc){
         d_desc =desc/100;
         return(d_desc)

}

let id_cliente = 21407958;
let tp_cliente = "A";
let sd_cliente = 48090.45;
//arreglo_cliente = ['21407958', 'A','48090.45'];
let cliente_iden = parseInt(prompt("Ingrese Identifiador Cliente"));
let cliente_tipo = prompt("Ingrese tipo de Cliente: \n Cliente tipo A \n Cliente tipo B \n Cliente tipo C \n");

//alert(arreglo_cliente);
//alert(arreglo_cliente[0]);
//alert(arreglo_cliente[1]);
//alert(arreglo_cliente[2]);


if (cliente_iden === id_cliente){
      alert("dentro if ident_cliente "+cliente_iden);
      alert("dentro if ident_cliente "+cliente_tipo);
      if ((tp_cliente ==="A") | (tp_cliente ==="B" )| (tp_cliente ==="C")){
             if (tp_cliente ==="A"){
                saldo = sd_cliente;
                //add_iva(saldo);
                //monto_c_iva = mci;
                let desc = parseInt(prompt("Ingrese el Descuento a Aplicar en % "));
                add_des(desc);
                monto_c_desc = saldo -(saldo * d_desc)
                alert("El Monto con IVA es de: "+monto_c_desc+"\n El descuento es de: "+ (saldo * d_desc));
                let pago = parseInt(prompt("Con cuánto desea abonar? "));
                if (pago >= monto_c_desc){
                    alert("El cliente: "+id_cliente+"\n Saldo con Descuento "+monto_c_desc+"\n Su pago es: "+pago+"\n su vuelto es de: "+(pago-monto_c_desc));

                }
                if (pago < monto_c_desc){
                  alert("El cliente: "+id_cliente+"\n Saldo con Descuento "+monto_c_desc+"\n Su pago es: "+pago+"\n Saldo: "+(monto_c_desc-pago));
                }
             }
             if (tp_cliente !=="A"){
                  saldo = sd_cliente;
                  add_iva(saldo);
                  monto_c_iva = mci;
                  alert("El Monto con IVA es de: "+monto_c_iva);
                  let desc = parseInt(prompt("Ingrese el Descuento a Aplicar en % "));
                  add_des(desc);
                  monto_c_desc = monto_c_iva -(monto_c_iva * d_desc)
                  let pago = parseInt(prompt("Con cuánto desea abonar? "));
                  if (pago >= monto_c_desc){
                      alert("El cliente: "+id_cliente+"\n Saldo con Descuento "+monto_c_desc+"\n Su pago es: "+pago+"\n su vuelto es de: "+(pago-monto_c_desc));

                  }
                  if (pago < monto_c_desc){
                    alert("El cliente: "+id_cliente+"\n Saldo con Descuento "+monto_c_desc+"\n Su pago es: "+pago+"\n Saldo: "+(monto_c_desc-pago));
                  }  

                          
            }
      }else alert("Al cliente le falta definir el tipo..")
}

