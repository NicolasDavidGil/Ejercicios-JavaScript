/*
    Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), 
    la temperatura de almacenamiento(entre -30 y 30)  hasta que el
    usuario quiera e informar al terminar el ingreso por document.write:
    a)
    La cantidad de temperaturas pares.
    b)
    La marca del producto más pesado
    c)
    La cantidad de productos que se conservan a menos de 0 grados.
    d)
    El promedio del peso de todos los productos.				
    f)
    El peso máximo y el mínimo.
*/

function mostrar()
{
    var marcaProducto;
    var pesoProducto;
    var temperaturaProducto;
    var contadorTemperaturasPares = 0;
    var flagPrimerPesado = true;
    var pesoMasPesado;
    var marcaMasPesada;
    var contadorMenosCero = 0;
    var contador = 0;
    var acumuladorPesos = 0;
    var flagPeso = true;
    var menorPeso;
    var respuesta;


    do
    {
        marcaProducto = prompt("Ingrese la marca del producto: ");

        pesoProducto = prompt("Ingrese el precio del producto: ");
        pesoProducto = parseInt(pesoProducto);
        while(pesoProducto < 1 || pesoProducto > 100 || isNaN(pesoProducto) == true)
        {
            pesoProducto = prompt("Error, reingrese el precio del producto, entre (1 y 100): ");
            pesoProducto = parseInt(pesoProducto);
        }

        temperaturaProducto = prompt("Ingrese la temperatura de almacenaje: ");
        temperaturaProducto = parseInt(temperaturaProducto);
        while(temperaturaProducto < -30 || temperaturaProducto > 30 || isNaN(temperaturaProducto) == true)
        {
            temperaturaProducto = prompt("Error, reingrese la temperatura de almacenaje, entre (-30 y 30): ");
            temperaturaProducto = parseInt(temperaturaProducto);
        }

        acumuladorPesos = acumuladorPesos + pesoProducto;

        if(flagPrimerPesado == true || pesoProducto > pesoMasPesado)
        {
            pesoMasPesado = pesoProducto;
            marcaMasPesada = marcaProducto;
            flagPrimerPesado = false;
        }

        if(temperaturaProducto < 0)
        {
            contadorMenosCero++;
        }

        if(flagPeso == true || pesoProducto < menorPeso)
        {
            menorPeso = pesoProducto;
            flagPeso = false;
        }

        if(temperaturaProducto%2 == 0)
        {
            contadorTemperaturasPares++;
        }

        contador++;
        respuesta = confirm("Desea ingresar otro producto");
    }while(respuesta == true);


    document.write("La cantidad de temperaturas pares es: " + contadorTemperaturasPares);
    document.write("<br>" + "La marca del producto más pesado es: " + marcaMasPesada);
    document.write("<br>" + "La cantidad de productos que se conservan a menos de 0 grados es: " + contadorMenosCero);
    document.write("<br>" + "El peso máximo es: " + pesoMasPesado);
    document.write("<br>" + "El peso mínimo es: " + menorPeso);
}

