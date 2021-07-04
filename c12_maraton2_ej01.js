/*

Un hotel recibe huéspedes durante el día, y necesita que el recepcionista haga el ingreso a 
las habitaciones. Cada cliente que entre, se le asignará un número de habitación consecutivamente 
(Es decir: el primero tendrá la habitación 1, el segundo el 2, y así sucesivamente). 

El sistema deberá pedir datos huéspedes hasta que el recepcionista desee finalizar la carga. 
En la carga se guarda por habitación UN solo nombre, de quien realiza la reserva, no de todas 
las personas alojadas. 

La carga se realizará de la siguiente manera: 

	El cliente deberá darle su: Nombre,tipo de habitación y número de días de estancia. Se le 
    brinda el valor a abonar en base :
            -Valor por noche por de habitación:
            * Standard: $2500
            * Doble: $3300
            * Triple: $4300
            * Suite: $7250
-Si tiene más de 5 noches, se realiza un 10% de descuento.
-Si es Standard, se le pregunta si quiere desayuno. Tiene un costo adicional de $90 por noche. 


Al finalizar la carga, nos mostrará un reporte automático con: 

* La facturación total, es decir el monto total pagado por todos los huespedes. 
* Un listado con los nombres de todos los huespedes alojados (quienes reservaron).
* Listado de habitaciones ocupadas.


Al finalizar agregar un readme con el algoritmo y una breve explicación.


BONUS!

Ponerle un nombre copado al hotel :D




*/

let a_habitac = {};
let a_listado ={};
let a_huesped = new Array;
let fact_total = parseFloat(0);
let desayuno = parseFloat();
let cos_habitacion = parseFloat();
let nro_habitacion = 1;
let nro_dias;
let i =1;
let j =1;
let tipo_habitacion;
let salir = "S";
while (salir !== "N"){
      cliente = prompt("Ingrese Nombre del Cliente");
      a_huesped[j]= cliente;  // para j=1 voy atener el nombre del cliente 
      tipo_habitacion = prompt("Ingrese el tipo de Habitacion: \n  E - Standard: \n D - Doble: \n T - Triple: \n S - Suite: ");
      tipo_habitacion =  tipo_habitacion.toLocaleUpperCase();
      while ((tipo_habitacion !== "E") && (tipo_habitacion !== "D") && (tipo_habitacion !== "T") && (tipo_habitacion !== "S")){
            tipo_habitacion = prompt("Ingrese el tipo de Habitacion: \n  E - Standard: \n D - Doble: \n T - Triple: \n S - Suite: ");
            tipo_habitacion =  tipo_habitacion.toLocaleUpperCase(); 
      }
      if ((tipo_habitacion === "E") | (tipo_habitacion === "D") | (tipo_habitacion === "T") |(tipo_habitacion === "S")){
          a_huesped[j]= tipo_habitacion; // para j=2 voy a tener el tipo de habitacion
          if  ((tipo_habitacion === "E")){
              desayuno = prompt("Desea agregar el desayuno? S/N");
              desayuno = desayuno.toLocaleUpperCase();
              cos_habitacion = 2500;
              
          }
          if  ((tipo_habitacion === "D")){
            cos_habitacion = 3300;
            
          }
          if  ((tipo_habitacion === "T")){
            cos_habitacion = 4300;
            
          }
          if  ((tipo_habitacion === "S")){
            cos_habitacion = 7250;
            
          }
      }
      nro_dias = parseInt(prompt("Ingrese el nro de Dias:"));
      a_habitac.id = nro_habitacion;
      a_habitac.name = cliente;
      a_habitac.hab = tipo_habitacion;
      a_habitac.est = nro_dias;
      if (desayuno === "S"){
          a_habitac.des = (90 * (nro_dias-1)); // calculo del desayuno
      }else a_habitac.des = 0;
      a_habitac.tot = (cos_habitacion * (nro_dias-1));
      a_habitac.thb =  a_habitac.tot + a_habitac.des; // total habitacion = costo de la habitacion x cant noches + cargos habitacion 
      if ((nro_dias - 1)>5){
          a_habitac.tap = a_habitac.thb - (a_habitac.thb * 0,1);
      }else a_habitac.tap = a_habitac.thb;
      fact_total = fact_total + a_habitac.tap;
      
      console.log("Nro de Habitacion: "+a_habitac.id+"- Nombre del Huesped: "+(a_habitac.name.charAt(0).toUpperCase()+a_habitac.name.slice(1))+" - Tipo de Hab. "+a_habitac.hab+"- Estadia "+a_habitac.est+" dias $"+a_habitac.des+"$"+a_habitac.tot+"$"+a_habitac.thb+"$"+a_habitac.tap);
      
      nro_habitacion = nro_habitacion + 1;      
      salir = prompt("Desea continuar? S/N");
      salir = salir.toLocaleUpperCase();
       
     
}    
alert("La facturación total de todos los huespedes es: "+fact_total);
console.log("La facturación total de todos los huespedes es: "+fact_total); 
console.log(a_listado);



/*

//let a_habitac = new Array;
let a_habitac = {};
//let a_habitac = {id:'', name:'', hab:'', est:'', des:'', mon:''};
let a_huesped = new Array;
//let alumno = prompt("Ingrese nombre de alumno");
//let i = 0;
//alumno = alumno.toUpperCase();
//let continua = "";
let fact_total = parseFloat(0);
let desayuno = parseFloat();
let cos_habitacion = parseFloat();
let nro_habitacion = 1;
let nro_dias;
let i =1;
let j =1;
let tipo_habitacion;
let salir = "S";
while (salir !== "N"){
      cliente = prompt("Ingrese Nombre del Cliente");
      a_huesped[j]= cliente;  // para j=1 voy atener el nombre del cliente 
      //alert(a_huesped[j]+"j"+j);
      tipo_habitacion = prompt("Ingrese el tipo de Habitacion: \n  E - Standard: \n D - Doble: \n T - Triple: \n S - Suite: ");
      tipo_habitacion =  tipo_habitacion.toLocaleUpperCase();
      while ((tipo_habitacion !== "E") && (tipo_habitacion !== "D") && (tipo_habitacion !== "T") && (tipo_habitacion !== "S")){
            tipo_habitacion = prompt("Ingrese el tipo de Habitacion: \n  E - Standard: \n D - Doble: \n T - Triple: \n S - Suite: ");
            tipo_habitacion =  tipo_habitacion.toLocaleUpperCase(); 
      }
      //j = j+1;
      if ((tipo_habitacion === "E") | (tipo_habitacion === "D") | (tipo_habitacion === "T") |(tipo_habitacion === "S")){
          a_huesped[j]= tipo_habitacion; // para j=2 voy a tener el tipo de habitacion
          if  ((tipo_habitacion === "E")){
              desayuno = prompt("Desea agreagr el desayuno? S/N");
              desayuno = desayuno.toLocaleUpperCase();
              cos_habitacion = 2500;
              
          }
          if  ((tipo_habitacion === "D")){
            cos_habitacion = 3300;
            
          }
          if  ((tipo_habitacion === "T")){
            cos_habitacion = 4300;
            
          }
          if  ((tipo_habitacion === "S")){
            cos_habitacion = 7250;
            
          }
      }
      //alert(a_huesped[j]+"j"+j);
      nro_dias = parseInt(prompt("Ingrese el nro de Dias:"));
      //j = j+1;
      //a_huesped[j]= nro_dias; // para j=3 voy a tener el nro de dias de estadia---> noches = nro de dias -1
      //alert(a_huesped[j]+"j"+j);
      
      //for (j=1; j < 4; j++){
         //a_habitac[nro_habitacion][j]=a_huesped[j];
      a_habitac.id = nro_habitacion;
      a_habitac.name = cliente;
      a_habitac.hab = tipo_habitacion;
      a_habitac.est = nro_dias;
      if (desayuno === "S"){
          a_habitac.des = (90 * (nro_dias-1)); // calculo del desayuno
      }else a_habitac.des = 0;
      a_habitac.tot = (cos_habitacion * (nro_dias-1));
      a_habitac.thb =  a_habitac.tot + a_habitac.des; // total habitacion = costo de la habitacion x cant noches + cargos habitacion 
      if ((nro_dias - 1)>5){
          a_habitac.tap = a_habitac.thb - (a_habitac.thb * 0,1);
      }else a_habitac.tap = a_habitac.thb;
      fact_total = fact_total + a_habitac.tap;
      
      console.log(a_habitac.id,a_habitac.name,a_habitac.hab,a_habitac.est,a_habitac.des,a_habitac.tot, a_habitac.thb, a_habitac.tap);
      //}
      
      //alert(a_habitac[nro_habitacion])
      nro_habitacion = nro_habitacion + 1;      
      salir = prompt("Desea continuar? S/N");
      salir = salir.toLocaleUpperCase();
       
     
      //j = 1;
      //alert(nro_habitacion);
}    
//console.log(a_habitac);
alert("La facturación total de todos los huespedes es: "+fact_total);
//console.log(a_habitac);
console.log("La facturación total de todos los huespedes es: "+fact_total); 

for (let key in a_habitac){
//    console.log(key + " => " + a_habitac[key]);
      console.log("Listado de Huespedes: \n"+a_habitac.name[key]+"\n Habitacion:"+a_habitac.id[key]);
}      
/

La facturación total, es decir el monto total pagado por todos los huespedes. 
* Un listado con los nombres de todos los huespedes alojados (quienes reservaron).
* Listado de habitaciones ocupadas.
*/

