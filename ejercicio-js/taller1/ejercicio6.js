//ejercicio 6

// Calcule el porcentaje de alumnos y alumnas de un salón de clase, digitando el total de alumnos hombres y mujeres.

var alhombres = prompt("Digite el numero de hombres");
var almujeres = prompt("Digita el numero de mujeres ");
var total = parseInt (alhombres)+ parseInt ( almujeres);
var porchombres =parseInt  (alhombres * 100 / total);
var porcmujeres =parseInt  (almujeres * 100 / total);

alert("El porcentaje de alumnos hombres es de: " + porchombres + "%" + " " + "y" + " " + "El porcentaje de alumnos mujeres es de: " + porcmujeres + "%");