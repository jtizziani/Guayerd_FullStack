/*

11)	Realizar un programa que pida la base y el exponente y calcule la potencia. 

*/

let b = parseInt(prompt("Ingrese el valor base"));
let e = parseInt(prompt("Ingrese el valor del exponente"));
let valor = 1;
if (e >= 0){
    if (e > 0){
        for( let j = 0; j < e; j++){
            valor = (valor * b);
    
        }
        alert("El valor base "+b+" \n Elevado al exponente "+e+"\n Es : "+valor)
}   else  alert("El valor base "+b+" \n Elevado al exponente "+e+"\n Es : "+valor)
}else alert("Error, debe ser valor positivo")


