/*
12.	Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). 
    Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar 
    la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar 
    cuánto sería su vuelto. 
(Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50. Si indica que paga con menos 
    de lo que cuesta el producto, indicar un error).

Script

pido edad
abro menu y pido que ingrese que bebida va a pedir?
valido datos ingresados
comparo la edad con la bebida seleccionada
        si operacion es valida ---> indicar el costo de la bebida seleccionada
                                    solicitar ingrese valor
                                            validar si monto es mayor o igual a costo
                                                 si es mayor ---> dar vuelto y muchas gracias
                                                 si es igual ---> muchas gracias
                                                 si es menor ---> error monto insuficiente 
*/
let monto = parseFloat(0);
let cerveza = parseFloat(50);
let agua = parseFloat(30);
let jugo = parseFloat(40);
let edad = parseInt(prompt("Ingrese su edad"));
let bebida = prompt("Listado de bebidas \n Cerveza \n Jugo \n Agua \n");
if (bebida === "Cerveza" && edad > 17){
    monto = prompt("Cerveza $ 50 \n Con cuanto va a pagar:");
    if (monto >= cerveza){
        alert("Su vuelto es de: "+(monto - cerveza)+" pesos \n Muchas gracias por su compra");
    } else alert("Monto insuficiente \n Fuera, fueeeeeeera!!!");    
}
if (bebida === "Cerveza" && edad < 18){
    alert("Prohibida la venta de bebidas alcoholicas a menores");
}
if (bebida !== "Cerveza"){
    monto = prompt("Agua $ 30 \n  Jugo $ 40 \n Con cuanto va a pagar:");
    if (monto >= agua || monto >= jugo){
        if (bebida === "Agua"){
            alert("Su vuelto es de: "+(monto - agua)+" pesos \n Muchas gracias por su compra");
        } else alert("Su vuelto es de: "+(monto - jugo)+" pesos \n Muchas gracias por su compra");    
    }else alert("Monto insuficiente \n Fuera, fueeeeeeera!!!");    
}

