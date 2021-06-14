/*
13)	Realizar un programa que pida un número y diga todos sus divisores. 
    (Se verifica que un número es divisor del otro cuando el resto de dividir por ese número es 0.)


*/

let n = parseInt(prompt("Ingrese un valor"));
//let arreglo = new Array(n);
//let ia = 0;
for (let p = 0; p <= n; p++){
    if ((n % p) == 0){
        //arreglo[ia] = p;
        //ia ++;
        console.log("El valor "+n+"es divisible por "+p)
    }
}