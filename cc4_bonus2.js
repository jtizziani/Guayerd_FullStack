/*

2.	Solicitar al usuario su día y mes de nacimiento e indicar cual es su signo zodiacal.

*/

let dia = parseInt(prompt("ingrese el dia de nacimiento"));
//let mes = parseInt(prompt("Ingrese mes de nacimento"));

let mes = parseInt(prompt("ingrese el valor de un mes de nacimiento(del 1 al 12)"));
if (mes > 0 && mes < 13){
    if (mes === 2){
        alert("Febrero tiene 28/29 dias dependiendo si el anio es bisiesto o no");
        if (dia > 0 && dia <29){
            if (dia < 19){
                alert("Ud. es de Acuario");
            }else alert("Ud. es de Piscis");
        }
    }
    if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12){
        if (mes === 1){
            if (dia > 0 && dia < 32){
                if (dia < 20){
                    alert("Ud. es de Capricornio")
                }else alert("Ud. es de Acuario");
            }
        }
        if (mes === 3){
            if (dia > 0 && dia < 32){
                if (dia < 21){
                    alert("Ud. es de Piscis")
                }else alert("Ud. es de Aries");
            }
        }
        if (mes === 5){
            if (dia > 0 && dia < 32){
                if (dia < 21){
                    alert("Ud. es de Tauro")
                }else alert("Ud. es de Geminis");
            }
        }
        if (mes === 7){
            if (dia > 0 && dia < 32){
                if (dia < 22){
                    alert("Ud. es de Cancer")
                }else alert("Ud. es de Leo");
            }
        }
        if (mes === 8){
            if (dia > 0 && dia < 32){
                if (dia < 23){
                    alert("Ud. es de Leo")
                }else alert("Ud. es de Virgo");
            }
        }
        if (mes === 10){
            if (dia > 0 && dia < 32){
                if (dia < 23){
                    alert("Ud. es de Libra")
                }else alert("Ud. es de Escorpio");
            }
        }
        if (mes === 12){
            if (dia > 0 && dia < 32){
                if (dia < 22){
                    alert("Ud. es de Sagitario")
                }else alert("Ud. es de Capricornio");
            }
        }
        
    }
    if (mes === 4 || mes === 6 || mes === 9 || mes === 11){
        if (mes === 4){
            if (dia > 0 && dia < 31){
                if (dia < 20){
                    alert("Ud. es de Aries")
                }else alert("Ud. es de Tauro");
            }
        }
        if (mes === 6){
            if (dia > 0 && dia < 31){
                if (dia < 21){
                    alert("Ud. es de Geminis")
                }else alert("Ud. es de Cancer");
            }
        }
        if (mes === 9){
            if (dia > 0 && dia < 31){
                if (dia < 23){
                    alert("Ud. es de Virgo")
                }else alert("Ud. es de Libra");
            }
        }
        if (mes === 11){
            if (dia > 0 && dia < 31){
                if (dia < 22){
                    alert("Ud. es de Escorpio")
                }else alert("Ud. es de Sagitario");
            }
        }
        
    }
} 
if (mes < 1 && mes > 12){
    alert("Error, el nro no corresponde un mes!!!!")   
}    