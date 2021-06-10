/*
8.	Solicitar al usuario que ingrese una nota del 1 al 10. Si está entre 1 y 3 responder: Aplazado, 
    si está entre 4 y 5 responder: Reprobado , y 6 o más aprobado. 
*/

let nota = parseInt(prompt("ingrese una nota"));
if (nota >= 0 && nota <= 10){
    if (nota >=0 && nota <=3){
        alert("Aplazado");
    }
    if (nota >=4 && nota <=5){
        alert("Reprobado");
    }
    if (nota >=6 && nota <=10){
        alert("Aprobado");
    }
             

}else alert("Nota ingresada incorrecta")
