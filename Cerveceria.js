/*Una cervecería necesita realizar un sistema de ventas online, donde se calculará las preferencias de 10 clientes. Los datos necesarios son:
-Nombre del cliente (no puede contener números)
-Edad (validar que sea mayor a 18 años)
-Tipo de cerveza: Roja – Honey – Negra
-Preferencia: (tirada – en botella)
-Precio por unidad
-Cantidad de unidades
 Calcular y mostrar en un document.write:
a) A la compra más grande realizada, se le otorgará un 10% de descuento, mostrando el nombre del cliente y su edad.
b) La mínima cantidad de botellas vendidas.
c) Cuantas cervezas honey en botella se compraron.
d) El cliente más viejo que compró cerveza roja.
e) El porcentaje de clientes que compraron cerveza roja, cerveza negra y cerveza honey.*/

function mostrar()
{
    var nombre;
    var edad;
    var tipoCerveza;
    var preferencia;
    var precioUnidad;
    var cantidad;
    var contador;
    var totalVenta;
    var primerTotal;
    var mayorTotal;
    var mayorNombre;
    var mayorEdad;
    var contadorHoneyBotella;
    var primerEdad;
    var masViejo;
    var contadorHoney;
    var contadorNegra;
    var contadorRoja;
    var primerBotella;
    var menorBotella;
    var porcentajeRoja;
    var porcentajeNegra;
    var porcentajeHoney;

    contador = 0;
    primerTotal = true;
    contadorHoney = 0;
    contadorHoneyBotella = 0;
    contadorNegra =0;
    contadorRoja = 0;
    primerEdad = true;
    primerBotella = true;

    while(contador < 5)
    {
        nombre = prompt("Ingrese su nombre: ");
        nombre = nombre.toLowerCase();
        while(isNaN(nombre)== false)
        {
            nombre = prompt("Error, reingrese ");
            nombre = nombre.toLowerCase();
        }

        edad = prompt("Ingrese su edad: ");
        edad = parseInt(edad);
        while(edad < 18 || isNaN(edad)== true)
        {
            edad = prompt("Error, reingrese ");
            edad = parseInt(edad);
        }

        tipoCerveza = prompt("Ingrese tipo cerveza: ");
        tipoCerveza = tipoCerveza.toLowerCase()
        while(tipoCerveza != "roja" && tipoCerveza != "negra" && tipoCerveza != "honey" || isNaN(tipoCerveza)== false)
        {
            tipoCerveza = prompt("Error, reingrese ");
            tipoCerveza = tipoCerveza.toLowerCase();
        }
                
        switch(tipoCerveza)
        {
            case "honey":
                contadorHoney ++;
                break;
            case "negra":
                contadorNegra ++;
                break;
            default:
                contadorRoja ++;
                if(primerEdad == true)
                {
                    masViejo = edad;
                    primerEdad = false;
                }else{
                    if(edad > masViejo)
                    {
                        masViejo = edad;
                    }
                }
                break;
        }
        
        preferencia = prompt("Ingrese preferencia: ");
        preferencia = preferencia.toLowerCase(); 
        while(preferencia != "tirada" && preferencia != "botella" || isNaN(preferencia) == false)
        {
            preferencia = prompt("Error, reingrese ");
            preferencia = preferencia.toLowerCase();
        }
    
        precioUnidad = prompt("Ingrese precio: ");
        precioUnidad = parseInt(precioUnidad);
        while(precioUnidad < 0 || isNaN(precioUnidad)== true)
        {
            precioUnidad = prompt("Error, reingrese ");
            precioUnidad = parseInt(precioUnidad);
        }

        cantidad = prompt("Ingrese la cantidad: ");
        cantidad = parseInt(cantidad);
        while(cantidad < 0 || isNaN(cantidad)== true)
        {
            cantidad = prompt("Error, reingrese ");
            cantidad = parseInt(cantidad);
        }
        if(primerBotella == true && preferencia == "botella")
        {
            menorBotella = cantidad;
            primerBotella = false;
        }else{
            if(preferencia == "botella" && menorBotella > cantidad)
            {
                menorBotella = cantidad;
            }
        }
        totalVenta = precioUnidad * cantidad;
        if(primerTotal == true)
        {
            mayorTotal = totalVenta;
            mayorNombre = nombre;
            mayorEdad = edad;
            primerTotal = false;
        }else{
            if(totalVenta > mayorTotal)
            {
                mayorTotal = totalVenta;
                mayorEdad = edad;
                mayorNombre = nombre;
            }
        }
        if(tipoCerveza == "honey" && preferencia == "botella")
        {
            contadorHoneyBotella ++;
        }
        contador++;
    }
    porcentajeHoney = (contadorHoney / contador) * 100;
    porcentajeNegra = (contadorNegra / contador) *100;
    porcentajeRoja = (contadorRoja / contador) * 100;
    mayorTotal = mayorTotal - mayorTotal * 0.10;

    document.write("La mayor compra la realizo: " + mayorNombre + " con una edad de " + mayorEdad + " y quedando su total con el descuento en: " + mayorTotal);
    document.write("<br>" + "La menor cantidad de botellas vendidas fue de: " + menorBotella);
    document.write("<br>" + "La cantidad de cerveza Honey en botella vendidas fue de: " + contadorHoneyBotella);
    document.write("<br>" + "El cliente mas viejo que compro cerveza roja tiene: " + masViejo + " años.");
    document.write("<br>" + "El porcentaje de cerveza roja comprada es: " + porcentajeRoja + "%, el de negra: "+ porcentajeNegra + "% y el de honey: " + porcentajeHoney + "%");

}
