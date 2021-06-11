/*
11.	Solicitar al usuario que ingrese 3 números e indicar cual es el mayor.
*/
let nro1 =parseInt(prompt("Ingrese valor1"));
let nro2 =parseInt(prompt("Ingrese valor2"));
let nro3 =parseInt(prompt("Ingrese valor3"));
if (nro1 === nro2 && nro1 ===nro3){
    alert("los nros ingresados son IGUALES")
}
if (nro1 > nro2 && nro1 > nro3){
    alert("el valor"+nro1+" es el MAYOR")
}
if (nro2 > nro1 && nro2 > nro3){
    alert("el valor"+nro2+" es el MAYOR")
}
if (nro3 > nro1 && nro3 > nro2){
    alert("el valor"+nro3+" es el MAYOR")
}
