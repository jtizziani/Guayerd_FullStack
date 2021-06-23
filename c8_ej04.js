/*
Ejercicio 4
Crear un array de 8 posiciones con nombres de artistas musicales y mostrar POR SEPARADO:
Su longitud
El último elemento.
Solo las posiciones pares
todos los elementos
todos los elementos menos el último 
Todos los elementos menos el primero
todos los elementos separados por “*”.
Solicitar al usuario un nuevo artista para reemplazar al último ingresado.


*/


var artistas=['Rod Steward','The Beatles', 'Bruce Springteen', 'Creadence', 'R.E.M.', 'Sia', 'Pavarotti', 'Bryan Adams'];
var artistas_p = new Array();
var artistas_pares = new Array();
var artistas_u = new Array();
let j = 0;
let cont = 0;
alert("La longitud es de:  "+artistas.length);
alert("El ultimo artista es: "+artistas[7]);
while (cont < (artistas.length)){
    if (cont % 2 == 0){ 
        artistas_pares[j] = artistas[cont];
        //alert(artistas_pares[j]);
        j = j+1;
    }
    cont = cont + 2;
    //alert(artistas[cont]);
    //alert(cont);
}
alert(artistas);
artistas_p = artistas;
artistas_u = artistas;

alert("Los artistas en elementos pares son:  "+artistas_pares);
artistas_p.shift()
alert("Todos los elementos menos el primero: "+artistas_p);
artistas_u = artistas;
artistas_u.pop();
alert(artistas);
alert("Todos los elementos menos el último : "+artistas_u);
alert("Todos los elementos separados por “*”. : "+artistas.join('*'));


let artista = prompt("Ingrese un artista para reemplazar al ultimo:");
artistas[7]=artista;
alert("TNueva lista de artistas con el nuevo artista ingresado “*”. : "+artistas.join(' , '));

