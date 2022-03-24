//ejercicio 15

var diash= prompt("ingrese los dias hospitalizados ");
var edadp = prompt("ingrese la edad del paciente");

switch (true){
    case edadp <= 10:
        if(diash<=1){
            CostoDía = 20000;
            Recargo = 0;
        }
        else if (diash<=4){
            CostoDía = 30000;
            Recargo = 0;
        }
        else if (diash<=7){
            CostoDía = 25000;
            Recargo = 0.05;
        }
        else {
            CostoDía = 15000;
            Recargo = 0.10;  
        }
        break;
        case edadp <= 17:
        if(diash<=1){
            CostoDía = 20000;
            Recargo = 0;
        }
        else if (diash<=4){
            CostoDía = 30000;
            Recargo = 0;
        }
        else if (diash<=7){
            CostoDía = 25000;
            Recargo = 0;
        }
        else {
            CostoDía = 15000;
            Recargo = 0.10;  
        }
        break;
        case edadp <= 49:
        if(diash<=1){
            CostoDía = 20000;
            Recargo = 0;
        }
        else if (diash<=4){
            CostoDía = 30000;
            Recargo = 0;
        }
        else if (diash<=7){
            CostoDía = 25000;
            Recargo = 0;
        }
        else {
            CostoDía = 15000;
            Recargo = 0.15;  
        }
        break;
        default :
        if(diash<=1){
            CostoDía = 20000;
            Recargo = 0;
        }
        else if (diash<=4){
            CostoDía = 30000;
            Recargo = 0;
        }
        else if (diash<=7){
            CostoDía = 25000;
            Recargo = 0.15;
        }
        else {
            CostoDía = 15000;
            Recargo = 0.20;  
        }
}
Subt = (diash * CostoDía);
ValorRec = Subt * Recargo;
Costo = Subt + ValorRec;
alert ("los dias hospitalizados del paciente fueron "+diash+", el costo por día es: "+CostoDía+", el valor del recargo es: "+ValorRec+" y el valor a pagar es: "+Costo);