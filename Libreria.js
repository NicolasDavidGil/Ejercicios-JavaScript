/*Una librería que se especializa en venta de libros importados desea calcular ciertas métricas en base a las ventas de sus productos. Se ingresa de cada venta:
Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)
Se pide:
a) El más barato de Terror con su importe.
b) Del libro más caro el título.
c) El importe promedio del total
d) La cantidad de libros que sean de terror y cuesten menos de $700.*/

function mostrar()
{
	var nombreLibro;
	var generoLibro;
	var materialLibro;
	var importeLibro;
	var respuesta;
	var primerImporte;
	var menorImporte;
	var menorNombre;
	var mascaroImporte;
	var mascaroNombre;
	var primermasCaro;
	var importeTotal;
	var contador;
	var terrorCaros;
	var importePromedio;
	

	respuesta = true;
	primerImporte = true;
	primermasCaro = true;
	contador = 0;
	terrorCaros =0;
	importeTotal = 0;

	while(respuesta == true)
	{
		nombreLibro = prompt("Ingrese el nombre del libro: ", "harry");
		nombreLibro = nombreLibro.toLowerCase();
		while(isNaN(nombreLibro) == false)
		{
			nombreLibro = prompt("El nombre debe ir en letras: ");
			nombreLibro = nombreLibro.toLowerCase();
		}

		generoLibro = prompt("Ingrese el genero del libro: ");
		generoLibro = generoLibro.toLowerCase();
		while(generoLibro != "ciencia ficcion" && generoLibro != "drama" && generoLibro != "terror" || isNaN(generoLibro)== false)
		{
			generoLibro = prompt("Reingrese el genero: ciencia ficcion, drama o terror, no admite numeros")
			generoLibro = generoLibro.toLowerCase();
		}

		materialLibro = prompt("Ingrese el material de la tapa");
		materialLibro = materialLibro.toLowerCase();
		while(materialLibro != "rustica" && materialLibro != "tapa dura" || isNaN(materialLibro)== false)
		{
			materialLibro = prompt("Error, ingrese si la tapa es rustica o tapa dura");
			materialLibro = materialLibro.toLowerCase();
		}

		importeLibro = prompt("Ingrese el importe del libro");
		importeLibro = parseInt(importeLibro);
		while(importeLibro < 0 || importeLibro > 30000 || isNaN(importeLibro)== true)
		{
			importeLibro = prompt("Error ingrese valor entre 0 y 30000, solo admite numeros");
			importeLibro = parseInt(importeLibro);
		}
		if(primerImporte == true && generoLibro == "terror")
		{
			menorImporte = importeLibro;
			menorNombre = nombreLibro;
			primerImporte = false;
		}else{
			if(importeLibro < menorImporte && generoLibro == "terror")
			{
				menorImporte = importeLibro;
				menorNombre = nombreLibro;
			}
		}
		if(primermasCaro == true)
		{
			mascaroImporte = importeLibro;
			mascaroNombre = nombreLibro;
			primermasCaro = false;
		}else{
			if(importeLibro > mascaroImporte)
			{
				mascaroImporte = importeLibro;
				mascaroNombre = nombreLibro;
			}
		}
		if(importeLibro < 700 && generoLibro == "terror")
		{
			terrorCaros++;
		}
		importeTotal = importeTotal + importeLibro;
		contador ++;
		importePromedio = importeTotal / contador;
		respuesta = confirm("Desea ingresar otra compra?");
	}
	document.write("El libro mas barato de terror es: " + menorNombre + " y su importe es de: " + menorImporte);
	document.write("<br>" + "El nombre del libro mas caro es: " + mascaroNombre);
	document.write("<br>" + "El importe promedio total es de: " + importePromedio);
	document.write("<br>" + "Los libros de terror que cuestan menos de $700 son: " + terrorCaros);
	
}
