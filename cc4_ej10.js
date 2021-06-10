/*
10.	Solicitar al usuario que indique un mes (del 1 al 12) e indicar si tiene 30 días, 31 días o 
    28/29 días.
*/


let mes = parseInt(prompt("ingrese el valor de un mes(del 1 al 12)"));
if (mes > 0 && mes < 13){
    if (mes === 2){
        alert("Febrero tiene 28/29 dias dependiendo si el anio es bisiesto o no");
    }
    if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12){
        if (mes === 1){
            alert("Enero tiene 31 dias");
        }
        if (mes === 3){
            alert("Marzo tiene 31 dias");
        }
        if (mes === 5){
            alert("Mayo tiene 31 dias");
        }
        if (mes === 7){
            alert("Julio tiene 31 dias");
        }
        if (mes === 8){
            alert("Agosto tiene 31 dias");
        }
        if (mes === 10){
            alert("Octubre tiene 31 dias");
        }
        if (mes === 12){
            alert("Diciembre tiene 31 dias");
        }
        
    }
    if (mes === 4 || mes === 6 || mes === 9 || mes === 11){
        if (mes === 4){
            alert("Abril tiene 30 dias");
        }
        if (mes === 6){
            alert("Junio tiene 30 dias");
        }
        if (mes === 9){
            alert("Septiembre tiene 30 dias");
        }
        if (mes === 11){
            alert("Noviembre tiene 3 dias");
        }
        
    }
} 
if (mes < 1 && mes > 12){
    alert("Error, el nro no corresponde un mes!!!!")   
}    