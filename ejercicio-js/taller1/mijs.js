// var nombre = "jonathan";

/* calcular el salario de un empleado que gana 2.500.000
descontando el 8% de salud y el 10% de pension.
*/

/*
var salario = prompt("Digita tu salario");
var salud = parseInt(salario)  *8/100;
var pension =parseInt  (salario) *10/100;
var sueldo_a_pagar = parseInt(salario) - salud - pension;*/

/*console.log("su sueldo es de:" + salario + 
"\ndescuento salud es de:" +salud+
"\ndescuento pension es de:" +pension+
"\nel sueldo a pagar es de: " + sueldo_a_pagar );
*/

/*alert("su sueldo es de:" + salario + 
"\ndescuento salud es de:" +salud+
"\ndescuento pension es de:" +pension+
"\nel sueldo a pagar es de: " + sueldo_a_pagar );
*/

/*confirm("su sueldo es de:" + salario + 
"\ndescuento salud es de:" +salud+
"\ndescuento pension es de:" +pension+
"\nel sueldo a pagar es de: " + sueldo_a_pagar );
*/

/*alert("su sueldo es de:" + salario + 
"\ndescuento salud es de:" +salud+
"\ndescuento pension es de:" +pension+
"\nel sueldo a pagar es de: " + sueldo_a_pagar );
*/

/*var nombre = "jonathan"
document.write("<h1> hola "+ nombre +" </h1>");*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
//ejercicio 2

var base = prompt("Digita la base del triangulo ");
var altura = prompt("Digita la altura del triangulo ");
var area = parseInt(base) * (altura)/2;
alert("el area del triangulo es" + area  );
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
//ejercicio 3

var num1 = prompt("Digita el primer numero");
var num2 = prompt("Digita el segundo numero");
var suma = parseInt (num1)+ parseInt (num2 );
var resta = parseInt (num1 - num2);
var multiplicacion = parseInt (num1 * num2);
var division = parseInt (num1 / num2);

alert("La suma de los numeros es: " + suma  );
alert("La resta de los numeros es: " + resta  );
alert("La multiplicacion de los numeros es: " + multiplicacion  );
alert("La division de los numeros es: " + division  );
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
//ejercicio 4

var numhm = prompt("Digita el numero de horas  ordinarias trabajadas al mes: ");
var numhex = prompt("Digita el numero de horas  extras trabajadas al mes: ");
var valorh = prompt("Digita el valor de la hora ordinaria ");
var valorhext = prompt("Digita el valor de las horas extras: "); 
var valorht = parseInt  (numhm * valorh);
var valorhex = parseInt (numhex * valorhext);
var sueldototal = parseInt (valorht)+ parseInt (valorhex);

alert("El sueldo mensual del trabajador es: " + sueldototal);
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
//ejercicio 5

var precioproducto = prompt("ingrese el precio del producto"); 
var iva = parseInt (precioproducto * 0.19);
var preciofinal = parseInt (precioproducto) + parseInt(iva);
var iva = parseInt (precioproducto) - parseInt(iva);

alert("El preio del prodcuto sin iva es del:  " + iva);
alert("El precio del prodcuto con el iva incluido es de:  " + preciofinal);
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
//ejercicio 6

// Calcule el porcentaje de alumnos y alumnas de un salón de clase, digitando el total de alumnos hombres y mujeres.

var alhombres = prompt("Digite el numero de hombres");
var almujeres = prompt("Digita el numero de mujeres ");
var total = parseInt (alhombres)+ parseInt ( almujeres);
var porchombres =parseInt  (alhombres * 100 / total);
var porcmujeres =parseInt  (almujeres * 100 / total);

alert("El porcentaje de alumnos hombres es de: " + porchombres + "%" + " " + "y" + " " + "El porcentaje de alumnos mujeres es de: " + porcmujeres + "%");

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
//ejercicio 7
//calcule el promedio de 5 notas de un alumno, el rango de cada nota es del 1 al 5.

var nota1 = prompt("ingrese la primera nota: ");
var nota2 = prompt("ingrese la segunda nota: ");
var nota3 = prompt("ingrese la tercera nota: ");
var nota4 = prompt("ingrese la cuarta nota: ");
var nota5 = prompt("ingrese la quita nota: ");
var promedio = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4)+parseFloat(nota5))/5;

alert ("El promedio de las notas del alumno es de: " + promedio);
*/

///////////////////////////////////////////////////////////////////////////////////////
/*
//ejercicio 8
//	Pide al usuario un número y determina si es par o impar y si es positivo o negativo.
var numero = prompt("Digite un numero");

if ((numero % 2) == 0 && numero > 0)  {
    alert ( + numero + " es un numero par y positivo: ");
}

else if (numero < 0) {
alert ( + numero + " es un numero negativo");

}
else  {
    alert ( + numero + " es un numero impar  ");
    }

*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//ejercicio 9
var numero1 = prompt("Digite el primer numero:");
var numero2 = prompt("Digite elsegundo numero:");
if (numero1 > numero2){
    alert ( "El numero " + numero1 + " mayor que el numero " + numero2);
}
else {
    alert ( "El numero " + numero2 + " mayor que el numero " + numero1);;
}
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//ejercicio 10

var dia = prompt("Digita un numero del 1 al 7 ");
switch( parseInt (dia)){
    case 1 : alert("lunes");
    break;
    case 2 : alert("martes");
    break;
    case 3 : alert("miercoles");
    break;
    case 4 : alert("jueves");
    break;
    case 5 : alert("viernes");
    break;
    case 6 : alert("sabado");
    break;
    case 7 : alert("domingo");
    break;
    default : alert( "numero incorrecto");
    break;
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
//ejercicio 11
var edad = prompt("Digitar su edad: ");

if(edad < 18){
    alert("usted es menos de edad");
}
else if (edad >= 18 && edad <=28){
    alert("usted es adulto");
}

else if(edad >=29 && edad <=49){
alert("usted es adulto")
}
else {
    alert("usted es adulto mayor");
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
var edad = prompt("Digitar su edad: ");
switch(true){
    case edad < 18 : alert("usted es menos");
    break;
    case edad >= 18 && edad <= 18 : alert("usted es adulto");
    break;
    case edad >=29 && edad <=49 : alert("usted es adulto mayor");
    break;
    default : alert( "adulto mayor");
    break;
}

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
//ejercicio 12
// Realice una factura de venta, ingrese el valor de 3 productos y calcule lo siguiente:
//si paga en efectivo paga el valor total.
//si paga con cupón realice un 3% de descuento
//si paga a crédito aumente el 5% al total.

var producto1 = prompt("Digite el costo del primer producto: ");
var producto2 = prompt("Digite el costo del segundo producto: ");
var producto3 = prompt("Digite el costo del tercer producto: ");
var total = prompt("Digite el numero de la forma como desea pagar , efectivo= 1, cupon= 2 credito= 3: ")

if (total == "1"){
    valortotal = parseInt(producto1) + parseInt(producto2) + parseInt(producto3);
    alert ("El costo a pagar por el producto es: "+valortotal);
}
else if (total == "2"){
    valortotal = parseInt(producto1) + parseInt(producto2) + parseInt(producto3);
    descuento = valortotal * 0.03;
    valortotal = valortotal - descuento;
    alert ("El costo a pagar por el producto es: "+valortotal);
}
else 
        valortotal =parseInt(producto1) + parseInt(producto2) + parseInt(producto3);
        descuento = valortotal * 0.05;
        valortotal = valortotal + descuento;
        alert ("El costo a pagar por el producto es: "+valortotal);
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//ejercicio 13

var nota1 = prompt("Digite la primera nota: ");
var nota2 = prompt("Digite la segunda nota: ");
var nota3 = prompt("Digite la tercera nota: ");
var promedio = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;

if (promedio <=10 ){
    alert ("El alumno es malo ");
}

else if (promedio >=11 && promedio <=13 ){
    alert ("El alumno es regular ");
}

else if (promedio <=14 && promedio <=16 ){
    alert ("El alumno es bueno ");
}

else
    alert ("El alumno es muy bueno ");
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////


/*
//ejercicio 14
//Calcula la edad actual de una persona a partir de su fecha de nacimiento.
//Los datos a pedir son: día, mes y año de nacimiento.

var dia = prompt("Digite el dia de nacimiento: ");
var mes = prompt("Digite el mes de nacimiento: ");
var año = prompt("Digite el año de nacimiento: ");
var edad = parseInt (2022 - año);

alert ("su edad actual es: " + edad);

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
//ejercicio 15

var diash= prompt("ingrese los dias hospitalizados ");
var edadp = prompt("ingrese la edad del paciente");

switch (true){
    case edadp <= 10:
        if(diash<=1){
            CostoDía = 20000;
            Recargo = 0;
        }
        else if (diash<=4){
            CostoDía = 30000;
            Recargo = 0;
        }
        else if (diash<=7){
            CostoDía = 25000;
            Recargo = 0.05;
        }
        else {
            CostoDía = 15000;
            Recargo = 0.10;  
        }
        break;
        case edadp <= 17:
        if(diash<=1){
            CostoDía = 20000;
            Recargo = 0;
        }
        else if (diash<=4){
            CostoDía = 30000;
            Recargo = 0;
        }
        else if (diash<=7){
            CostoDía = 25000;
            Recargo = 0;
        }
        else {
            CostoDía = 15000;
            Recargo = 0.10;  
        }
        break;
        case edadp <= 49:
        if(diash<=1){
            CostoDía = 20000;
            Recargo = 0;
        }
        else if (diash<=4){
            CostoDía = 30000;
            Recargo = 0;
        }
        else if (diash<=7){
            CostoDía = 25000;
            Recargo = 0;
        }
        else {
            CostoDía = 15000;
            Recargo = 0.15;  
        }
        break;
        default :
        if(diash<=1){
            CostoDía = 20000;
            Recargo = 0;
        }
        else if (diash<=4){
            CostoDía = 30000;
            Recargo = 0;
        }
        else if (diash<=7){
            CostoDía = 25000;
            Recargo = 0.15;
        }
        else {
            CostoDía = 15000;
            Recargo = 0.20;  
        }
}
Subt = (diash * CostoDía);
ValorRec = Subt * Recargo;
Costo = Subt + ValorRec;
alert ("los dias hospitalizados del paciente fueron "+diash+", el costo por día es: "+CostoDía+", el valor del recargo es: "+ValorRec+" y el valor a pagar es: "+Costo);
*/


