let numero= parseInt(prompt("Ingrese un numero del 1 al 10"));
console.log(numero);

 if (isNaN(numero)){
    alert("El dato ingresado no es válido");
} else if (numero>10 || numero<1) {  
    alert("El numero no es el correcto");
} else {
    if (numero === 3){
        alert("usted ha acertado!");
    } else{
        alert("Intentelo nuevamente");
    } 
} 

switch (numero){
    case 1: 
        console.log("Usted ha ingresado el 1");
        break;
    case 2: 
        console.log("Usted ha ingresado el 2");
        break;
    default:
        console.log("Usted no ingreso ni 1 ni 2");
        break;
}