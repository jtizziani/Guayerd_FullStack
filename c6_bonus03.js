/*
Bonus desafíos matemáticos !!


3)	Realizar un programa que pida dos números y diga su máximo común divisor. 
    (notas sobre el Máximo Común Divisor: 
    - Es el máximo número por el cuál se puede dividir un número dejando resto 0.
    - No puede ser mayor al valor de la mitad del menor número o sí mismo.
    (Ejemplo: Si mis números son 9 y 12, no puede estar entre 5 y 8, ni ser mayor a 9).
    (Ejemplo: Si mis números son 10 y 15, no puede estar entre 6 y 9, ni ser mayor a 10). 
    (Podemos probar: 1,2,3,4,10).

Script
    
      cargo dos valores, nro1 y nro2
      creo una rreglo para cada nro
      los dividos desde 1 hasta el nro y guardo los nros con resto cero su arreglo
      busco en cada arreglo cual es el valor comun mayor

    */
let nro1 = parseInt(prompt("Ingrese nro1"));
let nro2 = parseInt(prompt("Ingrese nro2"));
let arreglo1 = [];
let arreglo2 = [];
let arreglo3 = [];
let ix1 = 0;
let ix2 = 0;
let mcd = 0;
let b = 0;
let c = 0;
let d = 0;

for (i=1; i <= nro1; i++){
    if ((nro1 % i) === 0){
        arreglo1[ix1] = i;
        ix1++;
        //alert(arreglo1[ix1]);
    }
}
console.log(arreglo1);
for (j=1; j <= nro2; j++){
    if ((nro2 % j) === 0){
        arreglo2[ix2] = j;
        ix2++;
        //alert(arreglo2[ix2]);
    }
}
console.log(arreglo2);

// hasta aca carga perfecto los dos arreglos

for (a=0; a < arreglo1.length; a++){
    //b=0; 
    for (b=0; b < arreglo2.length; b++){
        if (arreglo1[a] === arreglo2[b]){
            arreglo3[c] = arreglo1[a];         
        
        } 
        
    }
    
    c++
}
console.log(arreglo3);
for (d=0; d < arreglo3.length; d++){
     if (mcd < arreglo3[d]){
         mcd = arreglo3[d];
     }
}alert(" EL Maximo Comun Divisor de "+nro1+" y "+nro2+" es: "+mcd)
    