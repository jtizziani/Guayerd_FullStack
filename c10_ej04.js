/*

Ejercicio 4
    Crear una función que reciba los parámetros, la temperatura y el sistema (Farenheit o Celsius), 
    y devuelva la temperatura transformada al otro sistema. (Si recibe Farenheit, devolver Celsius, 
    si recibe Celsius devolver Farenheit).
*/

function transf_temp(temp, sist){
        if (sist == 'f' | sist == 'F'){
            resultado = (temp - 32) *(5/9);
            sistema = "Grados";
        }
        if (sist == 'c' | sist == 'C'){
            resultado = (temp *9/5)+32;
            sistema = "Farenheit";
        }
    return(resultado, sistema);  
}


let temp = parseFloat(prompt("ingrese la temperatura:"));
let sist = prompt("Ingrese el sistema: \n f si es en Farenheit \n c si es en Celsius");

if (sist === 'f'  | sist === 'c'){
    transf_temp(temp, sist);
    alert("La temperatura de:"+temp+" "+sist+" es "+resultado+" "+sistema);

}else alert("Sistema erroneo")



