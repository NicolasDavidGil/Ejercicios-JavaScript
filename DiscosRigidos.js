/*Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los 
siguientes datos:
Tipo: (validar "HDD", "SSD" o "SSDM2")
Precio: (validar entre 5000 y 18000),
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   disponibles. 
c) Cuántas unidades de HDD hay en total.*/


function mostrar()
{
	var contador;
   var producto;
   var precio;
   var cantidad;
   var marca;
   var capacidad;
   var primerSSD;
   var menorSSD;
   var menorCantidad;
   var menorMarca;
   var mayorPrecioHDD;
   var capacidadmayorHDD;
   var cantidadmayorHDD;
   var contadorHDD;
   var primerHDD;

   contador = 0;
   primerSSD = true;
   primerHDD = true;
   contadorHDD = 0;

   while(contador < 5)
   {
      producto = prompt("Ingrese si desea producto HDD, SSD o SSDM2: ");
      producto = producto.toLowerCase();

      while(producto != "hdd" && producto != "ssd" && producto != "ssdm2" || isNaN(producto) == false)
      {
         producto = prompt("Error producto invalido, reingrese: ");
         producto = producto.toLowerCase();
      }

      precio = prompt("Ingrese el precio del producto: ");
      precio = parseInt(precio);

      while(precio < 5000 || precio > 18000 || isNaN(precio)== true)
      {
         precio = prompt("Error, reingrese el precio del producto: ");
         precio = parseInt(precio);
      }
    
      cantidad = prompt("Ingrese la cantidad de productos: ");
      cantidad = parseInt(cantidad);

      while(cantidad < 1 || cantidad > 50 || isNaN(cantidad) == true)
      {
         cantidad = prompt("Error, reingrese la cantidad de productos: ");
         cantidad = parseInt(cantidad);
      }

      switch(producto)
      {
         case "hdd":
            contadorHDD = contadorHDD + cantidad;
            break;
      }

      marca = prompt("Confirme si la marca es: Seagate, Western Digital o Kingston");
      marca = marca.toLowerCase();

      while(marca != "seagate" && marca != "western digital" && marca != "kingston" || isNaN(marca) == false)
      {
         marca = prompt("Error, ingrese si la marca es: Seagate, Western Digital o Kingston");
         marca = marca.toLowerCase();
      }
      capacidad = prompt("Ingrese la capacidad del disco: 250, 500, 1, 2");
      capacidad = parseInt(capacidad);

      while(capacidad != 250 && capacidad != 500 && capacidad != 1 && capacidad != 2 || isNaN(capacidad)== true)
      {
         capacidad = prompt("Error, reingrese la capacidad del disco: 250, 500, 1, 2");
         capacidad = parseInt(capacidad);
      }
      if(primerSSD == true && producto == "ssd")
      {
         menorSSD = precio;
         menorCantidad = cantidad;
         menorMarca = marca;
         primerSSD = false;
      }else
      {
         if(precio < menorSSD && producto == "ssd")
         {
            menorSSD = precio;
            menorCantidad = cantidad;
            menorMarca = marca;
         }
      }
      if(primerHDD == true && producto == "hdd")
      {
         mayorPrecioHDD = precio;
         cantidadmayorHDD = cantidad;
         capacidadmayorHDD = capacidad;
         primerHDD = false;
      }else
      {
         if(mayorPrecioHDD < precio && producto == "hdd")
         {
            mayorPrecioHDD = precio;
            cantidadmayorHDD = cantidad;
            capacidadmayorHDD = capacidad;
         }
      }

      contador++;
   }
   document.write("El SSD mas barato vale: " + menorSSD + " ,la cantidad disponible es: " + menorCantidad + " y son de la marca: " + menorMarca);
   document.write("<br>" + "El HDD de mayor precio es: " + mayorPrecioHDD + " tiene un stock de " + cantidadmayorHDD + " unidades y las mismas poseen una capacidad de: " + capacidadmayorHDD + " gb");
   document.write("<br>" + "La cantidad total de unidades HDD en stock es: " + contadorHDD);
}
