/*
Bonus desafíos matemáticos !!

1)	Agregar al ejercicio 5 una validación de que solo se acepte números del 1 al 10. 
    Si ingresa un número no válido, volver a solicitar el dato. 
    (5)	Solicitar al usuario que ingrese tantos números como desee y 
    luego mostrar el promedio de ellos.)
2)	Realizar un programa que pida números consecutivos (3, 4 y 5; 9, 10 y 11, etc.). 
    Cuando se introducen tres números consecutivos dice “gracias” y termina. 
    Mientras no se introduzcan tres números consecutivos el programa sigue pidiendo 
    números indefinidamente. 
3)	Realizar un programa que pida dos números y diga su máximo común divisor. 
    (notas sobre el Máximo Común Divisor: 
    - Es el máximo número por el cuál se puede dividir un número dejando resto 0.
    - No puede ser mayor al valor de la mitad del menor número o sí mismo.
    (Ejemplo: Si mis números son 9 y 12, no puede estar entre 5 y 8, ni ser mayor a 9).
    (Ejemplo: Si mis números son 10 y 15, no puede estar entre 6 y 9, ni ser mayor a 10). 
    (Podemos probar: 1,2,3,4,10).
4)	Solicitar al usuario que ingrese números. Mostrar los primeros tres multiplicados por 1, 
    luego los próximos tres multiplicados por 2 y así sucesivamente. Cortar cuando el usuario 
    ingrese un número mayor a 100.
5)	Solicitar al usuario que ingrese 10 números, calcular el factorial de cada uno de ellos y 
    mostrarlo.
6)	Solicitar al usuario que ingrese un número y mostrar esa cantidad de dígitos de la secuencia 
    de Fibonacci. 

*/

let cont_n =parseInt(prompt("Ingrese cantidad de nros a promediar"));
let nro;
let suma = 0;
let promedio;
let ix = 1;
for (i=1; i <= cont_n; i = ix ){
    nro =parseInt(prompt("Ingrese valor"));
    if (nro>0 && nro < 11){
        suma = suma + nro;
        ix++ 
    }else alert("Error, el numero debe ser >0 y <11")
         
    
}
alert("Cantidad de nros ingresados: "+cont_n+"\n La suma de los valores ingresados es "+suma+"\n El promedio es "+(suma/cont_n))

