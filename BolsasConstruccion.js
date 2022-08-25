/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, 
hasta que el cliente quiera:
			Tipo validad(<"arena";"cal";"cemento">) 
			Cantidad de bolsas,
	    Precio por bolsa (más de cero ),
	    al terminar la compra el cliente accede a un descuento segun las bolsas en total
	    Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
      Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.	
			a)
			  El importe total a pagar , bruto sin descuento y...
			b)
				el importe total a pagar con descuento(solo si corresponde)
			d)
			  Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.		
			f)
				El tipo mas caro
*/


function mostrar()
{
  var respuesta;
  var tipoBolsa;
  var precioBolsa;
  var cantidadBolsas;
  var acumuladorPrecio = 0;
  var acumuladorBolsas = 0;
  var acumuladorArena = 0;
  var acumuladorCal  = 0;
  var acumuladorCemento = 0;
  var flagPrimerTipo = true;
  var masCaroTipo;
  var masCaroPrecio;
  var precioBruto;
  var mensajeTipo;

  do
  {
    tipoBolsa = prompt("Ingrese el tipo de bolsa (arena;cal;cemento): ");
    tipoBolsa = tipoBolsa.toLowerCase();
    while(tipoBolsa != "arena" && tipoBolsa != "cal" && tipoBolsa != "cemento"||isNaN(tipoBolsa) == false)
    {
      tipoBolsa = prompt("Error, reingrese el tipo de bolsa (arena;cal;cemento): ");
      tipoBolsa = tipoBolsa.toLowerCase();
    }

    precioBolsa = prompt("Ingrese el precio por bolsa: ");
    precioBolsa = parseInt(precioBolsa);
    while(precioBolsa < 1 || isNaN(precioBolsa) == true)
    {
      precioBolsa = prompt("Error, reingrese el precio por bolsa: ");
      precioBolsa = parseInt(precioBolsa);
    }

    cantidadBolsas = prompt("Ingrese la cantidad de bolsas: ");
    cantidadBolsas = parseInt(cantidadBolsas);
    while(cantidadBolsas < 1 || isNaN(cantidadBolsas) == true)
    {
      cantidadBolsas = prompt("Error, reingrese la cantidad de bolsas: ");
      cantidadBolsas = parseInt(cantidadBolsas);
    }

    acumuladorBolsas = acumuladorBolsas + cantidadBolsas;
    acumuladorPrecio = acumuladorPrecio + (precioBolsa * cantidadBolsas);

    switch(tipoBolsa)
    {
      case "arena":
        acumuladorArena = acumuladorArena + cantidadBolsas;
        break;
      case "cal":
        acumuladorCal = acumuladorCal + cantidadBolsas;
        break;
      case "cemento":
        acumuladorCemento = acumuladorCemento + cantidadBolsas;  
        break;
    }

    if(flagPrimerTipo == true || precioBolsa > masCaroPrecio)
    {
      masCaroPrecio = precioBolsa;
      masCaroTipo = tipoBolsa;
      flagPrimerTipo = false;
    }

    respuesta = confirm("Desea realizar otra comprar?");
  }while(respuesta == true);

  precioBruto = acumuladorPrecio;

  if(acumuladorBolsas > 10 && acumuladorBolsas < 30)
  {
    acumuladorPrecio = acumuladorPrecio - (acumuladorPrecio * 0.15);
  }             
  if(acumuladorBolsas > 30)
  {
    acumuladorPrecio = acumuladorPrecio - (acumuladorPrecio * 0.25);
  }                                                                                                                                                                                                                                                   

  if(acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento)
  {
    mensajeTipo = "El mayor tipo vendido es arena";
  }
  else if(acumuladorCal > acumuladorCemento)
  {
    mensajeTipo = "El mayor tipo vendido es cal";
  }
  else
  {
    mensajeTipo = "El mayor tipo vendido es cemento";
  }

  document.write("El precio total en bruto es: " + precioBruto);
  document.write("<br>" + "El importe a pagar final es: " + acumuladorPrecio);
  document.write("<br>" + mensajeTipo);
  document.write("<br>" + "El tipo mas caro fue: " + masCaroTipo + " con un precio de: " + masCaroPrecio);
}
