/*
2) Una plataforma de criptomonedas debe realizar el ingreso de los datos de los ventas que realiza, de acuerdo al
siguiente detalle:
● Nombre de la criptomoneda
● Cliente (nombre).
● Origen (“EEUU”, “ALEMANIA”, “JAPÓN”)
● Precio (mínimo $15000, máximo $50000)
Informar:
a) El nombre y precio de la criptomoneda más cara.
b) La cantidad total de ventas de origen nipón.
c) El promedio del precio de las ventas alemanas y cuyo precio supere $25.000.

Pedir datos por prompt y mostrar la información por document.write.*/


function mostrar()
{

    do
    {
        var nombreCriptomoneda;
        var origenCriptomoneda;
        var precioCriptomoneda;
        var respuesta;
        var flagPrimerMoneda;
        var mayorPrecio;
        var mayorNombre;
        var contadorNipon;
        var acumuladorVentasAlemanas;
        var promedioVentasAlemanas;
        var contadorVentasAlemanas;
        var mensajeJapon;
        var mensajeAlemania;

        flagPrimerMoneda = true;
        contadorNipon = 0;
        acumuladorVentasAlemanas = 0;
        promedioVentasAlemanas = 0;
        contadorVentasAlemanas = 0;

        nombreCriptomoneda = prompt("Ingrese el nombre de la criptomoneda: ");
        nombreCriptomoneda = nombreCriptomoneda.toLowerCase();
        while(isNaN(nombreCriptomoneda) == false)
        {
            nombreCriptomoneda = prompt("Ingrese el nombre de la criptomoneda: ");
            nombreCriptomoneda = nombreCriptomoneda.toLowerCase();
        }

        origenCriptomoneda = prompt("Ingrese el origen de la criptomoneda: ");
        origenCriptomoneda = origenCriptomoneda.toUpperCase();
        while(origenCriptomoneda != "EEUU" && origenCriptomoneda != "ALEMANIA" && origenCriptomoneda != "JAPON" || isNaN(origenCriptomoneda) == false)
        {
            origenCriptomoneda = prompt("Ingrese el origen de la criptomoneda: ");
            origenCriptomoneda = origenCriptomoneda.toUpperCase();
        }

        precioCriptomoneda = prompt("Ingrese el precio de la criptomoneda: ");
        precioCriptomoneda = parseFloat(precioCriptomoneda);
        while(isNaN(precioCriptomoneda) == true)
        {
            precioCriptomoneda = prompt("Ingrese el precio de la criptomoneda: ");
            precioCriptomoneda = parseFloat(precioCriptomoneda);
        }

        if(flagPrimerMoneda == true || precioCriptomoneda > mayorPrecio)
        {
            mayorNombre = nombreCriptomoneda;
            mayorPrecio = precioCriptomoneda;
            flagPrimerMoneda = false;
        }

        switch(origenCriptomoneda)
        {
            case "JAPON":
                contadorNipon++;
                break;
            case "ALEMANIA":
                if(precioCriptomoneda > 25000)
                {
                    acumuladorVentasAlemanas = acumuladorVentasAlemanas + precioCriptomoneda;
                    contadorVentasAlemanas ++;
                }
        }

        respuesta = confirm("Desea ingresar otra criptomoneda: ");


    }while(respuesta == true);
    
    if(contadorVentasAlemanas == 0)
    {
        promedioVentasAlemanas = "";
        mensajeAlemania = "No se han realizado ventas superiores a $25000";
    }else
    {
        promedioVentasAlemanas = acumuladorVentasAlemanas / contadorVentasAlemanas;
        mensajeAlemania = "El promedio de las ventas alemanas superiones a $25000 es: "
    }
    
    if(contadorNipon > 0)
    {
        mensajeJapon = "El total de ventas de origen Japon es: " +contadorNipon;
    }else
    {
        mensajeJapon = "No se han realizado ventas de origen Japon.";
    }
    
    document.write("El nombre de la criptomoneda mas cara es: " + mayorNombre + " y su precio es: " + mayorPrecio);
    document.write("<br>" + mensajeJapon);
    document.write("<br>" + mensajeAlemania + promedioVentasAlemanas);

}


