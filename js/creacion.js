let cantidad = -1
const titleWeb = document.title
let peliculasArray = []

createMovies()

if (cantidad === 0) {
    alert("Gracias por su visita")
}



function createMovies() {


    
    while (cantidad < 0 || isNaN(cantidad)) {
        cantidad = parseInt(prompt("ingresa la cantidad de peliculas a listar en favoritos"))
    }
    if (cantidad > 0) {
        validData()

    }
    renderEach("todos", peliculasUser)
    renderFilter("nuevos",peliculasUser)

    return peliculasArray

}

function validData() {

    console.log("dentro del if")
    for (let index = 1; index <= cantidad; index++) {
        let nombre = ""
        while (nombre.length < 4) {
            nombre = prompt("Ingrese el nombre de la pelicula: N°" + index)
        }
        let genero = ""
        while (genero.length < 4) {
            genero = prompt("Ingrese el Genero de la pelicula: N°" + nombre)
        }
        let poster = ""
        while (poster.length < 8) {
            poster = prompt("Ingrese la foto de la pelicula: N°" + nombre)
        }
        let year = ""
        while (isNaN(year) || year < 1950) {
            year = parseInt(prompt("Ingrese el año de la pelicula: N°" + nombre))
        }

        let pelicula = {
            nombre: nombre,
            genero: genero,
            poster: poster,
            lanzamiento: year
        }
        console.log(pelicula)
        pelicula.id = parseInt(Math.random() * 100000)
        console.log(pelicula)

        peliculasArray.push(pelicula)
        peliculasUser.push(pelicula)
        localStorage.setItem("moviesUser", JSON.stringify(peliculasUser))
        console.log(peliculasUser)
    }
}

console.log(peliculasArray)




