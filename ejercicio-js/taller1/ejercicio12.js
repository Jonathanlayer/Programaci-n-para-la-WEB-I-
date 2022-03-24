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