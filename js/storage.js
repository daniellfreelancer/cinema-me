
let peliculasUser = []

if ( localStorage.getItem('moviesUser') ){

    peliculasUser =  JSON.parse(localStorage.getItem('moviesUser')) 

}

console.log("storage")
console.log(peliculasUser)