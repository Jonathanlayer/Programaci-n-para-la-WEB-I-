//ejercicio 7
//calcule el promedio de 5 notas de un alumno, el rango de cada nota es del 1 al 5.

var nota1 = prompt("ingrese la primera nota: ");
var nota2 = prompt("ingrese la segunda nota: ");
var nota3 = prompt("ingrese la tercera nota: ");
var nota4 = prompt("ingrese la cuarta nota: ");
var nota5 = prompt("ingrese la quita nota: ");
var promedio = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)+parseFloat(nota4)+parseFloat(nota5))/5;

alert ("El promedio de las notas del alumno es de: " + promedio);