/*
Diseñar un sistema para una tienda donde el menú ofrezca las siguientes opciones:
1)	Cobrar
2)	Retirar dinero de la caja
3)	Ver balance de caja
4)	Ver los montos totales de todas las operaciones realizadas
(Ej: 2500,120,340). etc. 
5)	Salir

1): Debemos ingresar los precios de cada uno de los objetos que el cliente fue comprando, 
    uno por uno hasta que se avise que finalizó la carga. Preguntar si abona con tarjeta o efectivo. 
    Si la compra supera los $2000 y paga en efectivo, realizar un descuento del 5%. 
    Si la compra supera los $5000, realizar un descuento del 10% con ambos medios de pago. 
    Mostrar el total de la cuenta. Si paga en efectivo, consultar con cuánto paga y avisar cuál es el 
    vuelto que se le debe otortgar.
2) Si el monto que se solicita retirar es menor al monto que hay disponible en caja (pagos en efectivo), 
   realizar la operación.
3) Ver cuánto se pagó en tarjeta y cuánto se pagó en efectivo.
4) Mostrar todos los montos de las operaciones (DE COMPRA, no retiros), tanto en tarjeta como en efectivo.
5) Finaliza el programa.

BBP

ingresamos un nro de cliente
 ese cliente va a tener atado 
      productos  
      precios
      pregunto si termino de comprar?
      pregunto forma de pago?
           - efectivo
           - tarjeta
           - trsnferencia
           - echeq / cheque
           una vez selecciona el medio de pago:
                 vemos los descuentos
el cliente llega a la caja y tenemos un menu de opciones
   - opcion1 - cobrar
   - opcion2 - Retirar dinero en caja
   - opcion3 - Ver balance
   - opcion4 - Ver montos de totales
   - opcion5 - salir
         
*/
let c_cliente = 1;
let c_saldo_banco = 100000;

let cliente  = parseInt(prompt("Ingreso Nro de Cliente"));
let prod_cod = parseInt(prompt("Ingrese el codigo del "));
let prod_des = prompt("Ingresa descripcion del producto");
let prod_pre = parseFloat(prompt("Ingrese el precio del producto"));
let cond = "s" // condicion de compra, sigue o termina?
let monto_apag; //monto a pagar
let suma_vta = 0; // sumo la compra
let fp;  // forma de pago e, t
let extraccion; // voy a gusradar la extraccion

// en este bucle el cliente hace toda la compra

while (c_cliente = cliente && cond == "s"){
    suma_vta = suma_vta + prod_pre;
    console.log("producto "+prod_des+" $ "+prod_pre+" saldo venta"+suma_vta)
    cliente  = parseInt(prompt("Ingreso Nro de Cliente"));
    prod_cod = parseInt(prompt("Ingrese el codigo del "));
    prod_des = prompt("Ingresa descripcion del producto");
    prod_pre = parseFloat(prompt("Ingrese el precio del producto"));
    cond = perseint(prompt("Sigue comprando? S/N"))
}
alert("  ------  Menu Opciones -----\n - opcion1 - cobrar \n - opcion2 - Retirar dinero en caja \n - opcion3 - Ver balance \n - opcion4 - Ver montos de totales \n - opcion5 - salir")
let opcion =parseInt(prompt("Ingrese que operacion desea realizar ( 1, 2, 3, 4 o 5"));

// en este bucle se encarga de realizar el pago de los productos selccionados en el bucle anterior

while (opcion > 0 && opcion < 6){
    if (opcion == 1){
        fp = prompt("ingrese forma de pago e - efectivo \n t - tarjeta")
            while (fp =="e" || fp =="t"){
                if (fp =="e"){
                    if (suma_vta > 2000){
                        monto_apag = suma_vta - (suma_vta *0.05);
                        console.log("Subtotal"+suma_vta+"\n Descuento"+(suma_vta*0.05)+"\n Total a pagar"+monto_apag)
                    } else monto_apag = suma_vta;
                    console.log("Subtotal"+suma_vta+"\n Descuento"+(suma_vta*0)+"\n Total a pagar"+monto_apag);
                    let pago = parseInt(prompt("ingrese valor con que va a pagar"));
                    if (pago >= monto_apag){
                        console.log("Su dinero es $ "+pago+" vuelto"+pago-monto_apag)
                    }alert("Policia!!!!")
                          
                }

                if (fp =="e" || fp =="t"){
                    if (suma_vta > 5000){
                        monto_apag = suma_vta - (suma_vta *0.10);
                        console.log("Subtotal"+suma_vta+"\n Descuento"+(suma_vta*0.10)+"\n Total a pagar"+monto_apag)
                    } else monto_apag = suma_vta;
                    console.log("Subtotal"+suma_vta+"\n Descuento"+(suma_vta*0)+"\n Total a pagar"+monto_apag)
                }
                let pago = parseInt(prompt("ingrese valor con que va a pagar en efectivo"));
                //let pagot = parseInt(prompt("ingrese monto que va a pagar con tarjeta"));
                    if (pago >= monto_apag){
                        console.log("Su dinero es $ "+pago+" vuelto"+pago-monto_apag)
                    }
                    if (pago < monto_apag){
                        console.log("Su pago en efectivo son $ "+pago+" tarjeta"+monto_apag-pago)
                    }

        } // c_saldo_banco = c_saldo_banco - monto_apag) esto seria si es con debito, descuento la compra 
    }
    if (opcion == 2){
        if (c_cliente == cliente && c_saldo_banco >0){
            let extraccion = parseFloat(prompt("Ingrese monto a extraer:"));
            if (extraccion <= c_saldo_banco){
                c_saldo_banco = c_saldo_banco - extraccion;
                alert("Su extraccion es de $ "+extraccion+"\n Su saldo es de $"+c_saldo_banco)
            } 



        }    

    }
    if (opcion == 3){
        if (c_cliente == cliente ){
                alert("Su saldo es de $"+c_saldo_banco)
            } 



    }    
    if (opcion == 4){
        if (c_cliente == cliente ){
                alert("Su saldo es de $"+c_saldo_banco)
            } 



    }
    if (opcion == 5){
        opcion == 10 


    }
}


 