async function traerPeliculas(){

    const api = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=772c6935b7a9437236ddd7d87bbf941d&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
    const data = await api.json()
    const discover = data.results

    const api2 = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=772c6935b7a9437236ddd7d87bbf941d")
    const data2 = await api2.json()
    const trending = data2.results
    //crearCardsPelis(discover,"card-container")
   //crearCardsPelis(trending,"card-container2")

   renderEach("card-container", trending)

}


let peliculas = [movie1,movie2,movie3,movie4]


function renderFor (div, arrayMovies){
    for (let i = 0; i < arrayMovies.length; i++) {
        printOnHtml(div,arrayMovies[i])
    }
}

//renderFor("todos", peliculas)


function renderForOf(div, arrayMovies){
    for (let movie of arrayMovies) {
        printOnHtml(div,movie)
    }

}

//renderForOf("todos", peliculas)

function renderForIn(div, arrayMovies){
    for (let movie in arrayMovies) {
        printOnHtml(div,arrayMovies[movie] )
    }
}

//renderForIn("todos", peliculas)


function renderEach(div, arrayMovies){
    arrayMovies.forEach( movie =>{
        printOnHtml(div,movie )
    })
}



function filterConFor(div,arrayMovies){
    for (let index = 0; index < arrayMovies.length; index++) {
        if (arrayMovies[index].lanzamiento > 2021){
            printOnHtml(div,arrayMovies[index] )
        }
        
    }
}

//filterConFor("nuevos",peliculas)

function filterForOf(div,arrayMovies){
for (let movie of arrayMovies ){
    if(movie.lanzamiento < 2021){
        printOnHtml(div,movie )
    }
}
}

//filterForOf("viejos",peliculas)

function renderFilter(div,arrayMovies) {
   let oldMovies = arrayMovies.filter(movie =>  movie.lanzamiento > 2021)
   renderEach(div, oldMovies)
   
}

const boton2020 = document.getElementById("movies2020")
const botonClear = document.getElementById("clearMovies")
const divOlds = document.getElementById("viejos")
console.log(divOlds)

boton2020.addEventListener("click",()=>{
    if (divOlds.innerHTML == ""){
        renderFilter("viejos",peliculas)
    }
    
})

botonClear.addEventListener("click", ()=>{
    divOlds.innerHTML = ""
})





//
