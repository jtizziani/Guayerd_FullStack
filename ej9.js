/*
9) Solicitar al usuario la medida de la base y de la altura 
   de un triángulo equilatero y devolver el área. 
*/
let a = parseFloat(prompt("Ingrese la medida de la base del triangulo equilatero"));
//let h = parseFloat(prompt("ingrese la altura del triangulo equilatero"));
let h = (Math.sqrt(3*a))/2
let area = parseFloat((a*h)/2);
alert("El Area del triangulo equilatero es:"+area)