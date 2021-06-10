/*
3) Mostrar al usuario su balance de cuenta (Numero asignado por nosotros). 
   Consultar cuánto dinero desea retirar y mostrar el nuevo balance.
*/
let balance = parseInt(prompt("Ingrese el saldo de cuenta"));
let retiro = parseInt(prompt("Ingrese el monto que desea retirar"));

balance = balance - retiro;
console.log("Usted retiro "+ retiro + " pesos Y su saldo actual es:"+balance+ " pesos");

