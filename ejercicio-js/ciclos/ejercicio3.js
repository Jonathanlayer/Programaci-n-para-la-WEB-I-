//Ejercicio 3
i = 1;
Sum = 0;    
Num = prompt("Ingrese el número "+i);
while (Num != "fin"){   
    document.write("<P>"+Num+"</P>");
    document.write("<br>");
    Sum = Sum +parseInt(Num);
    i = i + 1;
    Num = prompt("Ingrese el número "+i);
}
document.write("<br>");
document.write("<span>"+"La suma de los números ingresados es: "+Sum+"</span>");