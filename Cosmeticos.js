/*Una empresa de venta de cosméticos necesita un programa que permita la carga de productos vendidos, 
junto a los datos del vendedor. Se requiere ingresar los siguientes campos:
-Código del vendedor (v1 -v2 -v3)
-Producto elegido: Crema, Perfume, Maquillaje
-Total de la venta
No hay un límite total de ventas.
Una vez finalizada la carga de productos se debe calcular la comisión del vendedor.
-Si el vendedor superó la cantidad de ventas de $5000 le corresponde una comisión del %20. Sino del %10.
Se debe mostrar:
*El producto más comprado.
*El código del vendedor con más dinero recaudado y la cantidad de ventas realizadas. 
(Mostrando el código, la cantidad de dinero recaudada y la cantidad total de ventas).*/

function mostrar()
{
    var codigoVendedor;
    var producto;
    var totalVenta;
    var respuesta;
    var contadorCrema;
    var contadorPerfume;
    var contadorMaquillaje;
    var totalVentas1;
    var totalVentas2;
    var totalVentas3;
    var contadorUno;
    var contadorDos;
    var contadorTres;
    var comisionUno;
    var comisionDos;
    var comisionTres;
    var mayorVentas;
    var codigoGanador;
    var productoGanador;
    var contadorGanador;

    respuesta = true;
    contadorCrema = 0 ;
    contadorPerfume = 0;
    contadorMaquillaje = 0;
    contadorUno = 0;
    contadorDos = 0;
    contadorTres = 0;
    totalVentas1 = 0;
    totalVentas2 = 0;
    totalVentas3 = 0;

    while(respuesta == true)
    {
        codigoVendedor = prompt("Ingrese su codigo: ");
        while(codigoVendedor != "v1" && codigoVendedor != "v2" && codigoVendedor != "v3")
        {
            codigoVendedor = prompt("Error, reingrese codigo: ");
        }
        
        producto = prompt("Ingrese el producto: ");
        producto = producto.toLowerCase();
        while(producto != "crema" && producto != "perfume" && producto != "maquillaje" || isNaN(producto) == false)
        {
            producto = prompt("Error reingrese producto:");
            producto = producto.toLowerCase();
        }

        switch(producto)
        {
            case "crema":
                contadorCrema ++;
                break;
            case "maquillaje":
                contadorMaquillaje++;
                break;
            default:
                contadorPerfume ++;
                break;
        }

        totalVenta = prompt("Ingrese el total de la venta: ");
        totalVenta = parseInt(totalVenta);
        while(isNaN(totalVenta)== true)
        {
            totalVenta = prompt("Error, reingrese el total de la venta: ");
            totalVenta = parseInt(totalVenta);
        }
        switch(codigoVendedor)
        {
            case "v1":
                totalVentas1 = totalVentas1 + totalVenta;
                contadorUno ++;
                break;
            case "v2":
                totalVentas2 = totalVentas2 + totalVenta;
                contadorDos ++;
                break;
            default:
                totalVentas3 = totalVentas3 + totalVenta;
                contadorTres ++;
                break;
        }

        respuesta = confirm("Desea continuar: ");
    }
    
    if(totalVentas1 > 5000)
    {
        comisionUno = totalVentas1 * 0.20;
    }else
    {
        comisionUno = totalVentas1 * 0.10;
    }
    if(totalVentas2 > 5000)
    {
        comisionDos = totalVentas2 * 0.20;
    }else{
        comisionDos = totalVentas2 *0.10;
    }
    if(totalVentas3 > 5000)
    {
        comisionTres = totalVentas3 * 0.20;
    }else{
        comisionTres = totalVentas3 * 0.10;
    }
    if(totalVentas1 > totalVentas2 && totalVentas1 > totalVentas3)
    {
        mayorVentas = totalVentas1;
        codigoGanador = "v1";
        contadorGanador = contadorUno;
    }else{
        if(totalVentas2 > totalVentas3)
        {
            mayorVentas = totalVentas2;
            codigoGanador = "v2";
            contadorGanador = contadorDos;
        }else{
            mayorVentas = totalVentas3;
            codigoGanador = "v3";
            contadorGanador = contadorTres;
        }
    }
    if(contadorCrema > contadorMaquillaje && contadorCrema > contadorPerfume)
    {
        productoGanador = "Crema";
    }else{
        if(contadorMaquillaje > contadorPerfume)
        {
            productoGanador = "Maquillaje";
        }else{
            productoGanador = "Perfume";
        }
    }

    document.write("La comision del vendedor uno es: " + comisionUno + " , la del vendedor dos es: " + comisionDos + " y la del vendedor tres es: " + comisionTres);
    document.write("<br>" + "El producto mas comprado fue: " + productoGanador);
    document.write("<br>" + "El codigo del mejor vendedor es: " + codigoGanador + " con un total de " + mayorVentas + " en un total de " + contadorGanador +  " ventas.");


}
