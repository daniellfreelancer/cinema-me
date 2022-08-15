
async function traerPeliculas(){

    const api = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=772c6935b7a9437236ddd7d87bbf941d&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
    const data = await api.json()
    const discover = data.results

    const api2 = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=772c6935b7a9437236ddd7d87bbf941d")
    const data2 = await api2.json()
    const trending = data2.results
    //crearCardsPelis(discover,"card-container")
   //crearCardsPelis(trending,"card-container2")

}

traerPeliculas()


function crearCardsPelis(array,div){
    let container = document.getElementById(div)
    

    array.forEach(m => {
        let cardPeli = document.createElement("div")
        let transmision = m.media_type

        cardPeli.className = "card m-5"
        cardPeli.style.width = "18rem"
        cardPeli.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${m.poster_path}" class="card-img-top" alt="...">
                 <div class="card-body m-2">
                    <h5 class="card-title "> ${m.title ? m.title : m.name } </h5>
                    <p class="card-title">Lenguage: ${m.original_language.toUpperCase()} </p>
                    <p>Popularity: ${m.popularity} </p>
                    <p>Average: ${m.vote_average} </p>
                    <p>Transmision en: ${m.media_type ? transmision.toUpperCase() : 'Info no disponible' } </p>
                </div>
        `
        container.appendChild(cardPeli)
    });



}


