//retornar template strings
// let pelicula = {
//     nombre: nombre,
//     genero: genero,
//     poster: poster,
//     lanzamiento: year
// }


let movie1 = {
    nombre:'predador - "La presa"',
    genero:"ciencia Ficcion",
    poster: "https://image.tmdb.org/t/p/w500/sNAMqQ9T7YnXnvUSufeWzaRgK6Y.jpg",
    lanzamiento: 2022,
    votacion: 8.2,
    id: "001"

}

let movie2 = {
    nombre:"thor - 'Love and Thunder'",
    genero:"heroes",
    poster: "https://image.tmdb.org/t/p/w500/ehSQcx7fYCRe92FPRdOjVjlgM3W.jpg",
    lanzamiento: 2020,
    votacion: 6.8,
    id: "002"
}

let movie3 = {
    nombre:"jurassic world",
    genero:"ciencia ficcion",
    poster: "https://image.tmdb.org/t/p/w500/sXeWfpT1EhG7f4uBouqraOhmouH.jpg",
    lanzamiento: 2020,
    votacion: 7.1,
    id: "003"
}
let movie4 = {
    nombre:"top gun: 'Maverick'",
    genero:"accion",
    poster: "https://image.tmdb.org/t/p/w500/AlWpEpQq0RgZIXVHAHZtFhEvRgd.jpg",
    lanzamiento: 2022,
    votacion:8.3,
    id: "004"
}





function template(obj){
let nombreCorrecto = obj.nombre.charAt(0).toUpperCase()+obj.nombre.slice(1).toLowerCase() ;
let genero = obj.genero.charAt(0).toUpperCase()+obj.genero.slice(1).toLowerCase() ;
return `<div id=${obj.id} class="card" style="width: 18rem;">
            <img src="${obj.poster}" class="card-img-top" alt="${obj.poster}">
            <div class="card-body">
                <p class="card-text">Titulo: ${nombreCorrecto}</p>
                <p class="card-text">Genero: ${genero}</p>
                <p class="card-text">Votos: ${obj.votacion}</p>
                <p class="card-text">Lanzamiento: ${obj.lanzamiento}</p>
            </div>
        </div>`

}

function printOnHtml(div, obj){
    let print = template(obj)
    let container =    document.getElementById(`${div}`)
    container.innerHTML += print // acumulo a traves del += para no reagsinar
  //  document.querySelector(`#${id}`).innerHTML = template(obj)
}

