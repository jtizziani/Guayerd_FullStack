/*
13.	Solicitar al usuario un número de mes y devolver el nombre. (Ej: Ingreso 4 y me devuelve “Abril”).
*/
let nro_mes = parseInt(prompt("Ingrese el numero de mes que desea averiguar?"));
if (nro_mes === 1){
    alert("El numero "+nro_mes+" corresponde al mes de Enero");
}
if (nro_mes > 1 && nro_mes < 3){
        alert("El numero "+nro_mes+" corresponde al mes de Febrero");
} 
if (nro_mes > 2 && nro_mes < 4){
    alert("El numero "+nro_mes+" corresponde al mes de Marzo");
}
if (nro_mes > 3 && nro_mes < 5){
    alert("El numero "+nro_mes+" corresponde al mes de Abril");
}
if (nro_mes > 4 && nro_mes < 6){
    alert("El numero "+nro_mes+" corresponde al mes de Mayo");
} 
if (nro_mes > 5 && nro_mes < 7 ){
    alert("El numero "+nro_mes+" corresponde al mes de Junio");
}
if (nro_mes > 6 && nro_mes < 8){
    alert("El numero "+nro_mes+" corresponde al mes de Julio");
}
if (nro_mes > 7 && nro_mes < 9){
    alert("El numero "+nro_mes+" corresponde al mes de Agosto");
}
if (nro_mes > 8 && nro_mes < 10){
    alert("El numero "+nro_mes+" corresponde al mes de Septiembre");
}
if (nro_mes > 9 && nro_mes < 11){
    alert("El numero "+nro_mes+" corresponde al mes de Octubre");
}
if (nro_mes > 10 && nro_mes < 12){
    alert("El numero "+nro_mes+" corresponde al mes de Noviembre");
}
if (nro_mes > 11 && nro_mes < 13){
    alert("El numero "+nro_mes+" corresponde al mes de Diciembre");
} 
if (nro_mes > 12){
    alert(" chau asno!!! hay 12 meses") 
}





/*
No lo pude hacer son switch 

switch (nro_mes){
    case 1:
        alert("El numero "+nro_mes+" corresponde al mes de Enero");
    case 2:
        alert("El numero "+nro_mes+" corresponde al mes de Febrero");
    case 3:
        alert("El numero "+nro_mes+" corresponde al mes de Marzo");
    case 4:
        alert("El numero "+nro_mes+" corresponde al mes de Abril");
    case 5:
        alert("El numero "+nro_mes+" corresponde al mes de Mayo");
    case 6:
        alert("El numero "+nro_mes+" corresponde al mes de Junio");
    case 7:
        alert("El numero "+nro_mes+" corresponde al mes de Julio");
    case 8:
        alert("El numero "+nro_mes+" corresponde al mes de Agosto");
    case 9:
        alert("El numero "+nro_mes+" corresponde al mes de Septiembre");
    case 10:
        alert("El numero "+nro_mes+" corresponde al mes de Octubre");
    case 11:
        alert("El numero "+nro_mes+" corresponde al mes de Noviembre");
    case 12:
        alert("El numero "+nro_mes+" corresponde al mes de Diciembre");
    default:
        alert(" chau asno!!!")        
}
*/