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