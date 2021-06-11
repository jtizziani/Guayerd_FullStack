/*
10)	Solicitar al usuario que ingrese un número y mostrar, en una sola cadena de string, 
    la cantidad de asteriscos qué indique en el número. (Ejemplo: 5, “*****”.)
*/

let nro = parseInt(prompt("Ingrese un nro"));
let aste = "";

for( let j=0; j<= nro; j++){
    aste = aste + "*"
    
}
alert("Ud ingreso el nro "+nro+"'"+aste+"'")


