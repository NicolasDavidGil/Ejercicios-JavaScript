var variable1;
var variable2;
var variable3;
var variable4;
var variable5;
var variable6;
var respuesta;
var contador;

contador = 0;
respuesta = true;

while(respuesta == true)
{
    variable1 = prompt("Ingrese ");
    variable1 = variable1.toLowerCase();
    while(           isNaN(variable1)== )
    {
        variable1 = prompt("Error, reingrese ");
        variable1 = variable1.toLowerCase();
    }

    variable2 = prompt("Ingrese ");
    variable2 = variable2.toLowerCase(); parseInt(variable2);
    while(            isNaN(variable2)== )
    {
        variable2 = prompt("Error, reingrese ");
        variable2 = variable2.toLowerCase(); parseInt(variable2);
    }

    variable3 = prompt("Ingrese ");
    variable3 = variable3.toLowerCase(); parseInt(variable3);
    while(       isNaN(variable3)==)
    {
        variable3 = prompt("Error, reingrese ");
        variable3 = variable3.toLowerCase(); parseInt(variable3);
    }

    variable4 = prompt("Ingrese ");
    variable4 = variable4.toLowerCase(); parseInt(variable4);
    while(    isNaN(variable4) ==)
    {
        variable4 = prompt("Error, reingrese ");
        variable4 = variable4.toLowerCase(); parseInt(variable4);
    }

    variable5 = prompt("Ingrese ");
    variable5 = variable5.toLowerCase(); parseInt(variable5);
    while(       isNaN(variable5)== )
    {
        variable5 = prompt("Error, reingrese ");
        variable5 = variable5.toLowerCase(); parseInt(variable5);
    }

    variable6 = prompt("Ingrese ");
    variable6 = variable6.toLowerCase(); parseInt(variable6);
    while(          isNaN(variable6)== )
    {
        variable6 = prompt("Error, reingrese ");
        variable6 = variable6.toLowerCase(); parseInt(variable6);
    }



    contador++;
    respuesta = confirm("Desea continuar??");
}

