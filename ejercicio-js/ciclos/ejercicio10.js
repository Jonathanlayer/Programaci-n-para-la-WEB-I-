n = prompt("Digite el número de facturas a registrar: ")

total = 0;
for (a=1;a<=n;a++){
    document.write("<br>"); 
    CantProduc = prompt("Cuantos productos va a comprar el cliente: "+a+": ");
    document.write("<p>"+"Cliente "+a+" "+"</p>");
    document.write("<p>"+"Número de productos cliente"+a+": "+CantProduc+"</p>");
    Subt=0;
    for(b=1;b<=CantProduc;b++){
        let PrecioUNit = prompt("Ingrese el valor del producto:"+b);
        document.write("<p>"+"Valor producto "+b+": $"+PrecioUNit+"</p>");
        
        Subt = Subt + parseInt(PrecioUNit);
        
    }   
    total = total + Subt;
    document.write("<p>"+"Total compras"+": $"+Subt+"</p>");
    document.write("<br>"); 

}
document.write("<p>"+"Total compras del dia"+": $"+total+"</p>");
document.write("<p>"+"Total facturas del dia"+": "+n+"</p>");
