//1) De los 32 equipos participantes de la Copa del Mundo Qatar 2022, se deben ingresar los datos de acuerdo a lo //siguiente 
//● Nombre del país. 
//● Continente (“AMÉRICA”, “ASIA”, “EUROPA”, “OCEANIA”) 
//● Grupo (“A”, “B”, “C”, “D”, “E”, “F”, “G”, “H”) 
//● puntos obtenidos (validar de manera coherente) 
//Informar 
//a) El total de los puntos obtenidos en el grupo “H”. 
//b) La cantidad de selecciones americanas participantes.
//c) El promedio total de los puntos obtenidos por las selecciones participantes.
//Pedir datos por prompt y mostrar la información por alert.

function mostrar()
{
    var nombreEquipo;
    var continenteEquipo;
    var grupoEquipo;
    var puntajeEquipo;
    var contador;
    var acumuladorPuntosH;
    var contadorAmericanas;
    var acumuladorSelecciones;
    var promedioSelecciones;

    contador = 0;
    acumuladorPuntosH = 0;
    contadorAmericanas = 0;
    promedioSelecciones = 0;
    acumuladorSelecciones = 0;
    
    do
    {
        nombreEquipo = prompt("Ingrese el nombre del equipo: ");
        while(isNaN(nombreEquipo)== false)
        {
            nombreEquipo = prompt("Ingrese el nombre del equipo: ");
        }

        continenteEquipo = prompt("Ingrese el continente del equipó: ");
        continenteEquipo = continenteEquipo.toLocaleUpperCase();
        while(continenteEquipo != "AMERICA" &&  continenteEquipo != "ASIA" 
        && continenteEquipo != "EUROPA" && continenteEquipo != "OCEANIA" 
        && continenteEquipo != "AFRICA" || isNaN(continenteEquipo) == false)
        {
            continenteEquipo = prompt("Ingrese el continente del equipó: ");
            continenteEquipo = continenteEquipo.toLocaleUpperCase();
        }

        grupoEquipo = prompt("Ingrese el grupo del equipo: ");
        grupoEquipo = grupoEquipo.toUpperCase();
        while(grupoEquipo != "A" && grupoEquipo != "B" && grupoEquipo != "C" 
        && grupoEquipo != "D" && grupoEquipo != "E" && grupoEquipo != "F" 
        && grupoEquipo != "G" && grupoEquipo != "H" && isNaN(grupoEquipo) == false)
        {
            grupoEquipo = prompt("Ingrese el grupo del equipo: ");
            grupoEquipo = grupoEquipo.toUpperCase();
        }

        puntajeEquipo = prompt("Ingrese puntaje obtenido: ");
        puntajeEquipo = parseInt(puntajeEquipo);
        while(isNaN(puntajeEquipo) == true)
        {
            puntajeEquipo = prompt("Ingrese puntaje obtenido: ");
            puntajeEquipo = parseInt(puntajeEquipo);
        }

        if(grupoEquipo == "AMERICA")
        {
            contadorAmericanas++;
        }

        if(grupoEquipo == "H")
        {
            acumuladorPuntosH = acumuladorPuntosH + puntajeEquipo;
        }

        acumuladorSelecciones = acumuladorSelecciones + puntajeEquipo;
        contador++;
  
    }while(contador < 32);
  
    promedioSelecciones = acumuladorSelecciones / contador;


    alert("El total de puntos obtenidos en el grupo H es: " + acumuladorPuntosH);
    alert("La cantidad de selecciones de America es: " + contadorAmericanas);
    alert("El promedio total de todos los puntos obtenidos es: " + promedioSelecciones);
}