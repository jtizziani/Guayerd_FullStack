/*
3.	Solicitar al usuario que ingrese la hora y su nombre. Si son entre las 12 inclusive y 19 
    saludar con buenas tardes, entre 19 inclusive y 5 buenas noches, y entre 5 inclusive y 12 
    buenos días. 

*/

let nombre = prompt("Ingrese su nombre");
let hora =parseInt(prompt("ingrese la hora(Formato de 0hs a 23hs)"));
if (hora >= 12 && hora < 19){
    alert("Buenas tardes "+nombre);
}
if ((hora >= 19 && hora <= 23 )||(hora >=0 && hora < 5)){
    alert("Buenas noches "+nombre);
}
if (hora >= 5 && hora < 12){
    alert("Buenas dias "+nombre);
}
