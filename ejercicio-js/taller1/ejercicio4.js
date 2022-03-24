//ejercicio 4

var numhm = prompt("Digita el numero de horas  ordinarias trabajadas al mes: ");
var numhex = prompt("Digita el numero de horas  extras trabajadas al mes: ");
var valorh = prompt("Digita el valor de la hora ordinaria ");
var valorhext = prompt("Digita el valor de las horas extras: "); 
var valorht = parseInt  (numhm * valorh);
var valorhex = parseInt (numhex * valorhext);
var sueldototal = parseInt (valorht)+ parseInt (valorhex);

alert("El sueldo mensual del trabajador es: " + sueldototal);