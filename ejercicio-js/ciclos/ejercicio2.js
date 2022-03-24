//Ejercicio 2
n = prompt("Ingrese la cantidad de notas a ingresar: ");
Sum = 0;
for (i=1;i<=n;i++){
    Notas = prompt("Digite la nota "+i+" :");
    Sum = Sum + parseInt(Notas);
}
prom = Sum / n;
if (prom>=3){
    alert("Su nota final es: "+prom+" por tanto, aprueba el curso");
} 
else{
    alert("Su nota final es: "+prom+" por tanto, reprueba el curso");
}