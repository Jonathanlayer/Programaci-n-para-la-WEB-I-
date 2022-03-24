
var nombre, materia, notas;
for ( i= 1; i <= 3; i++){
    document.write("<br>"); 
    promedio=0, suma=0;
    nombre = prompt("ingrese el nombre del estudiante: " +""+i);
    materia = prompt("ingrese el nombre de la materia: ")+"";

    document.write("<p>"+"nombre del estudiante "+i+":"+" "+""+nombre+"</p>");
    document.write("<p>"+"materia: "+""+""+materia+"</p>");

    for( n= 1; n <= 3; n++){
        notas = Number (prompt ("ingrese la nota"+n));
        suma += notas;
        document.write("<p>"+"notas: "+""+n+ ": "+notas+"</p>");
    }
    promedio = (suma / 3).toFixed(1);
    document.write("<p>"+"promedio: "+promedio+"</p>");

}

