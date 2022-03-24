//Ejercicio 6
n = prompt ("Contar intervalos de a: ");
Contador = 0;
for (i= parseInt(n);i<=30;){
document.write("<P>"+i+"</P>");
document.write("<br>"); 
Contador = Contador + 1;
i = i + parseInt(n);
}
document.write("<br>");
document.write("<span>"+"La cantidad de intervalos son: "+Contador+"</span>");