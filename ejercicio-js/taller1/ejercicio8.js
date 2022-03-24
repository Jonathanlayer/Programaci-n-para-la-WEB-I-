//ejercicio 8
//	Pide al usuario un número y determina si es par o impar y si es positivo o negativo.
var numero = prompt("Digite un numero");

if ((numero % 2) == 0 && numero > 0)  {
    alert ( + numero + " es un numero par y positivo: ");
}

else if (numero < 0) {
alert ( + numero + " es un numero negativo");

}
else  {
    alert ( + numero + " es un numero impar  ");
    }