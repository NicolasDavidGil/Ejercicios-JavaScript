/*
3) Una plataforma de películas a demanda debe realizar el ingreso de los datos de las mismas, de acuerdo al
siguiente detalle:
● Título
● Género (“INFANTIL”, “COMEDIA”, “DRAMA”)
● Tiempo (dato numérico expresado en minutos)
● Calificación (1, 2, 3, 4 o 5)
Informar:
a) El promedio del tiempo de todas las películas del género INFANTIL.
b) La cantidad de películas cuya calificación no es mínima ni máxima.
c) El título de la película de género DRAMA que tiene menos tiempo y el título de la película del género COMEDIA
que tiene más tiempo.
Pedir datos por prompt y mostrar la información por document.write.
*/

function mostrar()
{
    var tituloPelicula;
    var generoPelicula;
    var duracionPelicula;
    var calificacionPelicula;
    var respuesta;
    var acumuladorInfantil;
    var contadorInfantil;
    var contadorCalificacion;
    var flagMenorDrama;
    var flagMayorComedia;
    var nombreMenorDrama;
    var menorTiempoDrama;
    var nombreMayorComedia;
    var mayorTiempoComedia;
    var mensajeInfantil;
    var promedioInfantil;
    var mensajeCalificacion;
    var mensajeDrama;
    var mensajeComedia;

    acumuladorInfantil = 0;
    contadorInfantil = 0;
    contadorCalificacion = 0;
    flagMayorComedia = true;
    flagMenorDrama = true;

    do
    {
        tituloPelicula = prompt("Ingrese el titulo de la pelicula: ");
        tituloPelicula = tituloPelicula.toLowerCase();
        while(isNaN(tituloPelicula) == false)
        {
            tituloPelicula = prompt("Error, reingrese el titulo de la pelicula: ");
            tituloPelicula = tituloPelicula.toLowerCase(); 
        }

        generoPelicula = prompt("Ingrese el genero de la pelicula: ");
        generoPelicula = generoPelicula.toUpperCase();
        while(generoPelicula != "INFANTIL" && generoPelicula != "COMEDIA" && generoPelicula != "DRAMA" || isNaN(generoPelicula) == false)
        {
            generoPelicula = prompt("Error, generos permitidos: Infantil, Comedia o Drama, reingrese: ");
            generoPelicula = generoPelicula.toUpperCase();
        }

        duracionPelicula = prompt("Ingrese la duracion de la pelicula: ");
        duracionPelicula = parseFloat(duracionPelicula);
        while(isNaN(duracionPelicula) == true)
        {
            duracionPelicula = prompt("Error, reingrese la duracion de la pelicula: ");
            duracionPelicula = parseFloat(duracionPelicula);
        }

        calificacionPelicula = prompt("Ingrese la calificacion de la pelicula: ");
        calificacionPelicula = parseInt(calificacionPelicula);
        while(calificacionPelicula != 1 && calificacionPelicula != 2 && calificacionPelicula != 3 && calificacionPelicula != 4
        && calificacionPelicula != 5 || isNaN(calificacionPelicula) == true)
        {
            calificacionPelicula = prompt("Error, reingrese la calificacion de la pelicula (1-5): ");
            calificacionPelicula = parseInt(calificacionPelicula);
        }

        switch(generoPelicula)
        {
            case "INFANTIL":
                acumuladorInfantil = acumuladorInfantil + duracionPelicula;
                contadorInfantil++;
                break;
            case "DRAMA":
                if(flagMenorDrama == true || duracionPelicula < menorTiempoDrama)
                {
                    nombreMenorDrama = tituloPelicula;
                    menorTiempoDrama = duracionPelicula;
                    flagMenorDrama = false;
                }
                break;
            case "COMEDIA":
                if(flagMayorComedia == true || duracionPelicula > mayorTiempoComedia)
                {
                    nombreMayorComedia = tituloPelicula;
                    mayorTiempoComedia = duracionPelicula;
                    flagMayorComedia = false;
                }                    
        }

        if(calificacionPelicula > 1 && calificacionPelicula < 5)
        {
            contadorCalificacion++;
        }

        respuesta = confirm("Desea ingresar otra pelicula?");

    }while(respuesta == true);


    if(contadorInfantil == 0)
    {
        promedioInfantil = " ";
        mensajeInfantil = "No se han ingresado peliculas infatiles.";
    }else
    {
        promedioInfantil = acumuladorInfantil / contadorInfantil;
        mensajeInfantil = "El promedio de tiempo de todas las peliculas infantiles es: ";
    }

    if(contadorCalificacion == 0)
    {
        mensajeCalificacion = "No se han ingresado peliculas con calificacion media.";
        contadorCalificacion = " ";
    }else
    {   
        mensajeCalificacion = "La cantidad de peliculas con calificacion media es:";
    }

    if(flagMenorDrama == true)
    {
        mensajeDrama = "No se han ingresado peliculas de drama.";
        nombreMenorDrama = " ";
    }
    else
    {
        mensajeDrama = "El titulo de la pelicula de drama de menor duracion es: "
    }
    if(flagMayorComedia == true)
    {
        mensajeComedia = "No se han ingresado peliculas de comedia.";
        nombreMayorComedia = " ";
    }else
    {
        mensajeComedia = "El titulo de la pelicula de comedia de mayor duracion es: "
    }


    document.write(mensajeInfantil + promedioInfantil);
    document.write("<br>" + mensajeCalificacion + contadorCalificacion);
    document.write("<br>" + mensajeDrama + nombreMenorDrama);
    document.write("<br>" + mensajeComedia + nombreMayorComedia);
    

}

