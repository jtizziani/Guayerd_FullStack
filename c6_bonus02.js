/*
Bonus desafíos matemáticos !!

2)	Realizar un programa que pida números consecutivos (3, 4 y 5; 9, 10 y 11, etc.). 
    Cuando se introducen tres números consecutivos dice “gracias” y termina. 
    Mientras no se introduzcan tres números consecutivos el programa sigue pidiendo 
    números indefinidamente. 
*/
/*
let nro1 = parseInt(prompt("Ingrese nro1"));
let nro2 = parseInt(prompt("Ingrese nro2"));
let nro3 = parseInt(prompt("Ingrese nro3"));
let val2 = nro1 + 1;
let val3 = val2 + 1;
//while ((nro1 < nro2 && nro1 < nro3) && (nro2 != val2 && nro3 != val3)){
while ((nro2 !== val2 && nro3 !== val3) && (nro3 <= nro1 || nro3 <=nro2 || nro2 <= nro1)){
    nro1 = parseInt(prompt("Ingrese nro1"));
    nro2 = parseInt(prompt("Ingrese nro2"));
    nro3 = parseInt(prompt("Ingrese nro3"));
    val2 = nro1 + 1;
    alert(val2);
    val3 = val2 + 1
    alert(val3)
}
if ((nro1 < nro2 && nro2 < nro3) && nro2 === val2 && nro3 === val3){
    alert("Gracias, introdujo 3 nros consecutivos")
}

*/
let nro1;
let nro2;
let nro3;
let val2;
let val3;
    

do {
    nro1 = parseInt(prompt("Ingrese nro1"));
    nro2 = parseInt(prompt("Ingrese nro2"));
    nro3 = parseInt(prompt("Ingrese nro3"));
    val2 = nro1 + 1;
    //alert(val2)
    val3 = val2 + 1;
    //alert(val3)
}while ((nro2 != val2 || nro3 != val3));
if ((nro1 < nro2 && nro2 < nro3) && nro2 === val2 && nro3 === val3){
    alert("Gracias, introdujo 3 nros consecutivos")
}