//ejercicio 5

var precioproducto = prompt("ingrese el precio del producto"); 
var iva = parseInt (precioproducto * 0.19);
var preciofinal = parseInt (precioproducto) + parseInt(iva);
var iva = parseInt (precioproducto) - parseInt(iva);

alert("El preio del prodcuto sin iva es del:  " + iva);
alert("El precio del prodcuto con el iva incluido es de:  " + preciofinal);