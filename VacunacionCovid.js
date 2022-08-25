/*
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
*/

function mostrar()
{
	var respuesta;
	var nombre;
	var edad;
	var genero;
	var vacuna;
	var temperatura;
	var primerTemperatura;
	var mayorTemperatura;
	var mayorNombre;
	var mayorVacuna;
	var femeninoSput;
	var nbVacunas;
	var astraTemp;

	respuesta = true;
	primerTemperatura = true;
	femeninoSput = 0;
	nbVacunas = 0;
	astraTemp = 0;

	while(respuesta == true)
	{
		nombre = prompt("Ingrese su nombre: ");
		nombre = nombre.toLowerCase();

		while(isNaN(nombre)== false)
		{
			nombre = prompt("Error no admite numeros, reingrese su nombre: ");
			nombre = nombre.toLowerCase();
		}

		edad = prompt("Ingrese su edad: ")
		edad = parseInt(edad);

		while(edad < 0 || edad > 110 || isNaN(edad)== true)
		{	
			edad = prompt("Error, reingrese su edad: ")
			edad = parseInt(edad);
		}

		genero = prompt("Ingrese f para femenino, m para masculino o nb para no binario");
		genero = genero.toLowerCase();

		while(genero != "f" && genero != "m" && genero != "nb" || isNaN(genero) == false)
		{
			genero = prompt("Ingrese f para femenino, m para masculino o nb para no binario");
			genero = genero.toLowerCase();
		}

		vacuna = prompt("Ingrese la vacuna aplicada: (SputnikV, AstraZeneca, Otra)");
		vacuna = vacuna.toLowerCase();

		while(vacuna != "sputnikv" && vacuna != "astrazeneca" && vacuna != "otra" || isNaN(vacuna) == false)
		{
			vacuna = prompt("Error nombre incorrecto: (SputnikV, AstraZeneca, Otra)");
			vacuna = vacuna.toLowerCase();
		}

		if(vacuna == "sputnikv" && genero == "f")
		{
			femeninoSput ++;
		}else{
			if(genero == "nb" && vacuna == "sputnikv" || vacuna == "otra")
			{
				nbVacunas ++;
			}
		}

		temperatura = prompt("Ingrese la temperatura la noche de la vacuna: ");
		temperatura = parseInt(temperatura);

		while(temperatura < 34 || temperatura > 45 || isNaN(temperatura)== true)
		{
			temperatura = prompt("Error reingrese la temperatura la noche de la vacuna: ");
			temperatura = parseInt(temperatura);
		}
		if(vacuna = "astrazeneca" && temperatura < 38)
		{
			astraTemp++;
		}

		if(primerTemperatura == true)
		{
			mayorTemperatura = temperatura;
			mayorNombre = nombre;
			mayorVacuna = vacuna;
			primerTemperatura = false;
		}else
		{
			if(temperatura > mayorTemperatura)
			{
				mayorTemperatura = temperatura;
				mayorNombre = nombre;
				mayorVacuna = vacuna;
			}
		}
		respuesta = confirm("¿Desea ingresar a otra persona?")
	}
	document.write("El nombre de la persona con mayor temperatura es: " + mayorNombre + " y se dio la vacuna: " + mayorVacuna);
	document.write("<br>" + "La cantidad de femeninos que se aplicaron la vacuna SputnikV es: " + femeninoSput);
	document.write("<br>" + "La cantidad de personas de sexo nb que se dieron distintos a SputnikV es: " + nbVacunas);
	document.write("<br>" + "La cantidad de personas de que se dieron AstraZeneca y tuvieron mas de 38° es: " + astraTemp);
}