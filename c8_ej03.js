
/*

Ejercicio 3
Utilizar el mismo array de ciudades, solicitar al usuario un número y remover esa cantidad de ciudades 
del array. Mostrar dos opciones: Sacando los datos desde el principio , y desde el final del array.

*/

let ciudades = [];

for (let i=0; i < 11; i++){
    ciudad = prompt("Ingrese una ciudad: ");
    ciudades[i] = ciudad;
    ciudades_b= ciudades;
}
let pos = parseInt(prompt("Ingrese Cantidad de elementos a eliminar: "));
let opc = parseInt(prompt("Ingrese opcion: \n 0 elimina elementos desde el principio \n 1 elimina elementos desde el final"));
if (pos>=0 & pos < 11){
    if (opc ===0){
        ciudades_b.splice(0,pos);
        console.log(ciudades_b);
        alert(ciudades_b)

    }
    if (opc ===1){
        ciudades_b.splice(-1,pos);
        console.log(ciudades_b);
        alert(ciudades_b)

    }
    alert("Tiene que selccionar 0 o 1, empiece de nuevo!!!!")
}else alert("Valor erroneo!!!")




/*

ciudades=['mattaldi','serrano', 'valeria', 'campillo', 'bruzonne', 'huica', 'macquena', 'rio cuarto', 'realico', 'pincen'];
ciudades_b=ciudades;
let pos = parseInt(prompt("Ingrese Cantidad de elementos a eliminar: "));
let opc = parseInt(prompt("Ingrese opcion: \n 0 elimina elementos desde el principio \n 1 elimina elementos desde el final"));
if (pos>=0 & pos < 11){
    if (opc ===0){
        ciudades_b.splice(0,pos);
        console.log(ciudades_b);
        alert(ciudades_b)

    }
    if (opc ===1){
        ciudades_b.splice(-1,pos);
        console.log(ciudades_b);
        alert(ciudades_b)

    }
    alert("Tiene que selccionar 0 o 1, empiece de nuevo!!!!")
}else alert("Valor erroneo!!!")

*/
