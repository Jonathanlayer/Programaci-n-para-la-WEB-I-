/*
var n= prompt("digite un numero");
var con =1;
while (con <= parseInt (n)) {
    document.write( "<p> "+ con +"</p> ");
    con=con+1;
}*/

////////////////////////////////////////////////////////////////////////////////

/*
var n= prompt("digite un numero");
var con =1;
while (con <=30 ) {
    document.write( "<p> "+ n + " x "+con+ "="+ (n*con) +"</p> ");
    con=con+1;
}
*/

//////////////////////////////////////////////////////////////////////////////

/*
var n= prompt("digite un numero");
var con =1;
var acumulador=0
while (n !== "s" ) {
    //document.write( "<p> "+ n + " x "+con+ "="+ (n*con) +"</p> ");
    acumulador = n;
    n = prompt("digite un numero");
    document.write("<p> los numeros que digito son: "+ acumulador+"</p>")
    con=con+1;
}
*/

///////////////////////////////////////////////////////////////////////////////
/*
var n= prompt("digite un numero");
var con =1;
var acumulador=0

while(con <=n){
    var cono =1;
    while (cono <=3) {
        document.write("<span>" +cono+  "</span>");
        cono ++;
    }
    document-write("<br>");
    cono++;
}
*/

/*
var n= prompt("digite un numero");
var con =1;
var acumulador=0

do{
    document.write("<p>"+con+"</p>");
    con++;
}while(con<n)
*/

//Ejercicio 9
n = prompt("Digite un número: ");
for (a=n;a>=1;a--){
    for(b=a;b>=1;b--){
        document.write("<span>"+"*"+"</span>");
    }
    document.write("<br>"); 
}