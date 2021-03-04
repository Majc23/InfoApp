
//const api1 = "https://reactnd-books-api.udacity.com"
const api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
//const api3 = "https://reactnd-books-api.udacity.com"

const obj = [];

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

/*const headers = {
  'Accept': 'application/json',
  'Authorization': token
}*/
 function cargardatos(){
    console.log(obj);
}
cargardatos();



export const getAll = () =>{
  return fetch(api)
    .then(res => res.json())
    // .then(data => {
    //     console.log(data.results)
    //     obj = data.results
    //     //console.log("getAll => ",obj);
    // });
    
    
    }

//console.log(getAll);
/*
export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)

export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())

export const search = (query) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.books)


    fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&page=1&r=json",
     {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "172f19cf96mshfa424182abd6367p17b7f1jsn0532d112111c",
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});*/

  