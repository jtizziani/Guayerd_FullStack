/*
Algoritmo “Adiviná el número”
1 - Elegir y guardar un número al azar (entre 1 y 100) 
2 - Pedirle al usuario que ingrese un número 
3 - Sumar uno en cantidad de intentos 
4 - Si el número ingresado es igual al pensado 
	Informar “Ganaste” y Terminar 
Si el número ingresado es mayor al pensado
	Informar “Es mayor”
Si el número ingresado es menor al pensado
	Informar “Es menor”
5 - Volver al paso 2 

Terminar:
1 - Informar: Ganaste! Cantidad de intentos: XX

Extra: Guardar todos los intentos, verificar el ingreso para que el usuario no repita un número.
Extra 2: Mostrar en pantalla los números ingresados.


BBPrint

1 Generar un numero aleatorio. entre 1 y 10
2 Guardar aleatorio en una variable
3 Pido al usuario que ingrese un valor 
4 Preguntar si el valor ingresado por el usuario es diferente al valor aleatorio
5      Mietras el valor sea diferente a aleatorio
               Pregunto si valor es menor a aleatorio
                        informo menor
               sino 
                        informo mayor
               contador incremento en 1
               Pido al usuario que ingrese un valor      
        Informar: Ganaste! Cantidad de intentos: XX = contador
 6 Pregunto si el valor ingresado por el usuario es igual al valor aleatorio
        Informar “Ganaste” 
        
7 fin de programa        
  
*/
aleatorio = 6;
//let aleatorio = Math.floor(Math.random()*11)
var arreglo = [];
let valor = parseInt(prompt("Ingrese un valor entre 0 y 10"));
if ((valor >= 0) & (valor <11)){
    if (valor !== aleatorio){
        let contador = 0;
        while (valor != aleatorio) {
            if (valor < aleatorio) {
               alert("Menor");
            } else
            alert("Mayor");
            arreglo[contador] = [valor];  
            contador ++;
            valor = parseInt(prompt("Ingrese un valor entre 0 y 10"));
        }      
    alert("Ganaste! Cantidad de intentos:"+contador);
    //arreglo.forEach(function(value, index, array){
    //         alert(index, value, arreglo);
    //});    
    } else alert("Ganaste");
}
else alert("Numero fuera de rango")
