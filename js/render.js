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

renderEach("todos", peliculas)

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
   let oldMovies = arrayMovies.filter(movie =>  movie.lanzamiento < 2021)
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
