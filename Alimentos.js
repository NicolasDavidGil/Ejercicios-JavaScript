/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos alimenticios, hasta que el cliente quiera. Por cada compra se ingresa:
Tipo: (validar "Yerba", "Azúcar", "Café").
Cantidad de bolsas. (más de cero).
Precio por bolsa (más de cero).
Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a pagar.
Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar.
Se pide mostrar por pantalla:
a)	El importe total a pagar bruto, sin descuento.
b)	El importe total a pagar con descuento (solo si corresponde)
c)	Informar el tipo con más cantidad de bolsas.
d)	El tipo de la compra más barata. (sobre el Bruto sin descuento)
*/

function mostrar()
{
  var respuesta;
  var producto;
  var precio;
  var cantidad;
  var total;
  var bruto;
  var contadorBolsas;
  var mayorBolsas;
  var mayorProducto;
  var primerBolsa;
  var primerPrecio;
  var menorPrecio;
  var menorProducto;
  

  respuesta = true;
  total = 0;
  bruto = 0;
  contadorBolsas = 0;
  primerBolsa = true;
  primerPrecio = true;

  while(respuesta == true)
  {
    producto = prompt("Ingrese el producto: ");
    producto = producto.toLowerCase();

    while(producto != "yerba" && producto != "azucar" && producto != "cafe" || isNaN(producto) == false)
    {
      producto = prompt("Error, reingrese el producto, recuerde que disponemos de yerba, azucar y cafe! ");
      producto = producto.toLowerCase();
    }

    cantidad = prompt("Ingrese la cantidad de bolsas a comprar: ");
    cantidad = parseInt(cantidad);

    while(cantidad < 0 || isNaN(cantidad) == true)
    {
      cantidad = prompt("Error, la cantidad de bolsas debe ser mayor a 0 y ser un numero: ");
      cantidad = parseInt(cantidad);
    }

    contadorBolsas = contadorBolsas + cantidad;

    if(primerBolsa == true)
    {
      mayorBolsas = cantidad;
      mayorProducto = producto;
      primerBolsa = false;
    }else
    {
      if(cantidad > mayorBolsas)
      {
        mayorBolsas = cantidad;
        mayorProducto = producto;
      }
    }

    precio = prompt("Ingrese el precio por bolsa: ");
    precio = parseInt(precio);

    while(precio < 0 ||isNaN(precio) == true)
    {
    precio = prompt("Precio incorrecto, ingrese el precio por bolsa: ");
    precio = parseInt(precio);
    }

    total = total + (precio * cantidad);
    bruto = bruto + (precio * cantidad);

    if(primerPrecio == true)
    {
      menorPrecio = precio;
      menorProducto = producto;
      primerPrecio = false;
    }else
    {
      if(precio < menorPrecio)
      {
        menorPrecio = precio;
        menorProducto = producto;
      }
    }

    respuesta = confirm("¿Desea realizar otra compra?")
  }
  if(contadorBolsas >= 5 && contadorBolsas < 10)
  {
    total = total - total * 10 / 100;
  }else
  {
    if(contadorBolsas >= 10)
    {
      total = total - total * 15 / 100
    }
  }

  document.write("El total a pagar bruto es: " + bruto);
  document.write("<br>" + "Su precio con el descuento aplicado es: " + total)
  document.write("<br>" + "El producto con mayor bolsas es: " + mayorProducto + " con una cantidad de: " + mayorBolsas + " bolsas.");
  document.write("<br>" + "El producto mas barato es: " + menorProducto + " con un valor de: " + menorPrecio);


}
