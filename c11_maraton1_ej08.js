/*
8)	 
 Ejercicio 8   
    Para una veterianaria. (Descomentar el codigo) dado el siguiente array de nombres de 
     mascotas completar el código con las  siguentes reglas de negocio:
        - Si el nombre tiene más de 6 caracteres, informar: "Nombre largo"
        - Si tiene menos o es igual a 3 caracteres, informar: "Nombre corto"
        - Si es igual a "Fido" o "Gertrudis", informar: "Hay que vacunar contra la rabia"
        - Si es igual a "Tuerca", informar: "Entregar alimento balanceado"
     const ej8Mascotas = ["Tuerca","Ramshanaram","Perro","Gertrudis","Kat","Fido","Lo","Loko","MAX"];



*/

const ej8Mascotas = ["Tuerca","Ramshanaram","Perro","Gertrudis","Kat","Fido","Lo","Loko","MAX"];
alert(ej8Mascotas);

for (let i =0; i<ej8Mascotas.length; i++){
     alert(ej8Mascotas[i]);
     if (ej8Mascotas[i].length > 6){
          alert(ej8Mascotas[i]+"Tienen nombre largo");

     }
     if (ej8Mascotas[i].length <= 3){
        alert(ej8Mascotas[i]+"Tienen nombre corto");
     } 
     if ((ej8Mascotas[i] === "Fido")|(ej8Mascotas[i] === "Gertrudis")){
        alert(ej8Mascotas[i]+"Hay que vacunar contra la rabia");
     }
     if ((ej8Mascotas[i] === "Tuerca")|(ej8Mascotas[i] === "Gertrudis")){
        alert(ej8Mascotas[i]+"Entregar alimento balanceado");
     }

}

// se podrian hacer mas validaciones en los if y que entre sin cumple si o si, ejemplo Gertrudis, es nombre largo
// y hay que vacunar contra la rabia y asi con varios
