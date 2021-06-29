/*
Ejercicio 10
        De un consultorio médico nos piden automatizar el proceso de recepción de los pacientes. 
        Para ello:
        - Ingresar código de paciente (Number XXX, 3 dígitos de 1 a 999).
        - Si el código ingresado esta entre 1 y 99, es un paciente VIP.
            - Preguntarles "Como valoran la calidad del servicio? (1..10)". Guardar el resultado ingresado.
            - Agregar el código de paciente adelante en la cola (array) de turnos
        - Si el código ingresado esta entre 100 y 500, es un paciente de prepaga.
            - Agregar el código de paciente al final de la cola (array) de turnos
        - Si el código ingresado esta entre 501 y 999, es un paciente nuevo.
            - Preguntarles "Desea pasarse a VIP?". Si la respuesta es afirmativa, guardar el código de 
              paciente.
            - Agregar el código de paciente al final de la cola (array) de turnos
            
        - Si todos los pacientes fueron ingresados, informar en pantalla:
            - Calidad del servicio VIP. Informar valor promedio, valor máximo y valor mínimo.
            - Ingreso al consultorio: Mostrar en pantalla el orden de ingreso x código de paciente.
            - Pasarse a VIP: Mostrar en pantalla todos los códigos de pacientes que desean ser VIP
        
        - Nota: Escribir código con funciones para facilitar su lectura.


*/

function promedio(arreglo_vip){
    for (t of arreglo_vip){
        valor = arreglo_vip[t];
        suma = suma + valor;
        w = w+1;
    } 
    promedio = (suma / w);
    //alert("valores vips"+arreglo_vip+" la suma es"+suma+"el valor de w"+w);
    return promedio;
    
}






var arreglo_pacientes = new Array;  //guardo los codigos de los pacientes
var arreglo_turnos = new Array;  //guardo los turnos de los pacientes
var arreglo_vip = new Array; // guardo la calidad del servicio vip 
//let codigo_p = parseInt(prompt("Ingrese el codigo del paciente:"));
let codigo_p;
let continuar = "S";
let cal_serv = 0;;
let i = 0;
let opc_a_vip;
let maximo = 0;
let minimo = 10;
var t = 0;
var suma = 0;;
var promedio = 0;
var w = 0;
var valor = 0;



while (continuar === "S"){
    codigo_p = parseInt(prompt("Ingrese el codigo del paciente:"));    
    if ((codigo_p > 0) && (codigo_p < 1000)){
          if ((codigo_p > 0) && (codigo_p< 100)){
                cal_serv = parseInt(prompt("Como valoran la calidad del servicio? (1..10"));
                if ((cal_serv > 0) && (cal_serv < 11)){
                        arreglo_vip[i] = cal_serv;
                        suma = suma + cal_serv; 
                        i = i + 1;
                        promedio = (suma / i);
                        if (maximo < cal_serv){
                            maximo = cal_serv;
                        } 
                        if (minimo > cal_serv){
                            minimo = cal_serv;
                        }          
                }                  
                arreglo_turnos.unshift(codigo_p);
                
                
          } 
          if ((codigo_p > 99) && (codigo_p < 501)){
            arreglo_turnos.push(codigo_p);             
          }
          if ((codigo_p > 500) && (codigo_p < 1000)){
            opc_a_vip = prompt("Desea pasarse a VIP? S/N ");
            opc_a_vip = opc_a_vip.toUpperCase();
            if (opc_a_vip === "S"){
                arreglo_pacientes.push(codigo_p);
            }
            arreglo_turnos.push(codigo_p);             
          }
     } else alert("rl codigo ingresado no corresponde a un paciente!!! ");
    continuar = prompt("Desea seguir cargando pacientes? S/N");
    continuar = continuar.toUpperCase();
    
}

//promedio(arreglo_vip);
//console.log("valores vips"+arreglo_vip+" la suma es"+suma+"el valor de w"+w)
//alert("valores vips"+arreglo_vip+" la suma es"+suma+"el valor de w"+w);
//maximo = Math.max(arreglo_vip);
//minimo = Math.min(arreglo_vip);
alert("Calidad del servicio VIP \n Informar valor promedio:"+promedio+"\n valor máximo:"+maximo+"\n valor minimo:"+minimo);
console.log("Calidad del servicio VIP \n Informar valor promedio:"+promedio+"\n valor máximo:"+maximo+"\n valor minimo:"+minimo);
alert("Ingreso al consultorio x nro de paciente:"+arreglo_turnos);
alert("Estos Codigos quieren pasar a ser Vips:"+arreglo_pacientes)
