/*
 Agregar alumnos/as a un curso. Vamos a pedirle al usuario que ingrese nombres de alumnos/as 
 para el nuevo curso. Continuar guardando nombres HASTA que el usuario ingrese SALIR. 
 Mostrar todos los nombres en pantalla. 

*/

let arreglo = new Array;
let alumno = prompt("Ingrese nombre de alumno");
let i = 0;
alumno = alumno.toUpperCase();

let continua = "";
while (alumno !== "SALIR"){
      arreglo[i] = alumno;
      alumno = prompt("Ingrese nombre de alumno");
      alumno = alumno.toUpperCase();
      i = i+1;

}    
alert(arreglo)