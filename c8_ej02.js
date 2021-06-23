/*

Ejercicio 2
Crear un array con 10 nombres de ciudades, y solicitar al usuario que nos diga un número. Mostrar el 
nombre de la ciudad en esa posición del array.

*/
let ciudades = [];

for (let i=0; i < 10; i++){
    ciudad = prompt("Ingrese una ciudad: ");
    ciudades[i] = ciudad;
}
pos = parseInt(prompt("Ingrese un nro: "));
if (pos>=0 & pos < 11){
    console.log("La ciudad que corresponde a la posicion "+pos+" es la ciudad de "+ciudades[pos])
    alert("La ciudad que corresponde a la posicion "+pos+" es la ciudad de "+ciudades[pos])    
}else alert("Valor erroneo!!!")