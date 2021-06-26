/*
    Vamos a realizar una cotizadora de seguros! 
    * Como primer paso, vamos a solicitar al cliente los siguientes datos: 
        Año de nacimiento, Nombre, sueldo bruto. 
    * En base a su año de nacimiento, vamos a calcular su edad. 
    * Luego, en base a su edad, seleccionar el plan que le corresponda:
        Hasta 18 años: Plan Niños ($4000)
        Hasta 30 años: Plan Joven. ($5200)
        Hasta 60 años: Plan Adulto ($6400)
        60 en adelante: Plan Adultos Mayores. ($9700)
    * Luego en base al plan, mostrar el monto a pagar . 
    * Por último, en base al bruto calcular si la persona es apta, el monto de la cuota no debe superar 
      el 20% del sueldo bruto!
    * Mostrarle al cliente un mensaje personalizado con su nombre, indicando plan y precio si corresponde, 
      y sino, indicar que no puede acceder al plan de salud.
    * BONUS adicional: Agregar la chance de que pueda incluir a su grupo familiar. En este caso, debería 
      agregar un dato más, cuántas personas hay en su familia. (Más adelante solicitaremos sus edades). 
      El monto total del grupo familiar no debe superar el 30% del sueldo bruto.

     Script   
     genero un cliente para probar
     AnioNac=11/04/1970
     Nombre= Jorge Tizziani
     SueldoB=160000   
     Llamo a la funcion que calcula su edad
     en base a su edad calculo que plan?
     elejido el plan muestro el monto a pagar
     muestro el sueldo bruto y determino si la persona es apta o no(el 20% debe ser menor o igual al plan)
     Mostrar al cliente su nombre, plan y precio o sino puede acceder a un plan


 */
var cliente_id=21407958;
var cliente_an=1970;
var cliente_sb=160000;
var id_cliente = parseInt(prompt("Ingrese DNI Cliente: "));
var an_cliente = parseInt(prompt("Ingrese Anio Nacimiento Cliente: "));
var sb_cliente = parseFloat(prompt("Ingrese Sueldo Bruto Cliente: "));
var fecha = new Date();
var ano = fecha.getFullYear();
var resultado;
let plan;
edad = ano - an_cliente;

function cal_apto(sb_cliente){
        resultado = (sb_cliente*(20/100));
        alert(resultado)
        return resultado

}

//alert("la edad es "+edad)
/*
        Hasta 18 años: Plan Niños ($4000)
        Hasta 30 años: Plan Joven. ($5200)
        Hasta 60 años: Plan Adulto ($6400)
        60 en adelante: Plan Adultos Mayores. ($9700)

        Mostrarle al cliente un mensaje personalizado con su nombre, indicando plan y 
        precio si corresponde, y sino, indicar que no puede acceder al plan de salud.
*/        
if (id_cliente === cliente_id){
    if (edad <18){
        plan = 4000;
        console.log("El monto a pagar del plan segun su edad es de $ "+plan);
        alert("El monto a pagar del plan segun su edad es de $ "+plan);
        cal_apto(sb_cliente);
        if (resultado => plan){
            alert("El Sr/Sra : "+id_cliente+"\n su plan es Plan Niños \n y puede acceder al plande salud por "+resultado);
        }else alert("El Sr/Sra : "+id_cliente+"\n su plan es Plan Niños \n y NO PUEDE acceder al plan de salud");
    }
    if (edad >17 & edad <30){
        plan = 5200;
        console.log("El monto a pagar del plan segun su edad es de $ "+plan);
        alert("El monto a pagar del plan segun su edad es de $ "+plan);  
        cal_apto(sb_cliente);
        if (resultado => plan){
            alert("El Sr/Sra : "+id_cliente+"\n su plan es Plan Joven \n y puede acceder al plande salud por "+resultado);
        }else alert("El Sr/Sra : "+id_cliente+"\n su plan es Plan Joven \n y NO PUEDE acceder al plan de salud");
    }  
    if (edad >29 & edad <60){
        plan = 6400;
        console.log("El monto a pagar del plan segun su edad es de $ "+plan);
        alert("El monto a pagar del plan segun su edad es de $ "+plan); 
        cal_apto(sb_cliente);
        alert("cincuentos"+resultado);
        if (resultado => plan){
            alert("El Sr/Sra : "+id_cliente+"\n su plan es Plan Adulto \n y puede acceder al plande salud por "+resultado);
        }else alert("El Sr/Sra : "+id_cliente+"\n su plan es Plan Adulto \n y NO PUEDE acceder al plan de salud");
    }
    if (edad >59){
        plan = 9700;
        console.log("El monto a pagar del plan segun su edad es de $ "+plan);
        alert("El monto a pagar del plan segun su edad es de $ "+plan);        
        cal_apto(sb_cliente);
        if (resultado => plan){
            alert("El Sr/Sra : "+id_cliente+"\n su plan es Plan Adultos Mayores \n y puede acceder al plande salud por "+resultado);
        }else alert("El Sr/Sra : "+id_cliente+"\n su plan es Plan Adultos Mayores \n y NO PUEDE acceder al plan de salud");
    }
}    
