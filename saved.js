let myStoredMovie = JSON.parse(localStorage.getItem('myMovie')) || []
console.log(myStoredMovie)

for (let i = 0; i < myStoredMovie.length; i++) {
  let movieCard = document.getElementById('movieCard')
  movieCard.innerHTML += `
      <div class="col s12 m7 l3">
        <div class="card">
          <div id="moviePoster" class="card-image">
            <span class="card-title">${myStoredMovie[i].name}</span>
            </div>
        <div class="card-content">
            <p>Release Date: ${myStoredMovie[i].releaseYear}</p>
            <p>Genre: ${myStoredMovie[i].genre}</p>
            <p>Rating: ${myStoredMovie[i].imdbRating}</p>
        </div>
      </div>
    </div>
`
}
let myStoredPoster = JSON.parse(localStorage.getItem('myPoster')) || []
console.log(myStoredPoster)
for (let e = 0; e < myStoredPoster.length; e++) {
  let moviePoster = document.getElementById('moviePoster')
  moviePoster.innerHTML += `
  <img src="${myStoredPoster[e].Poster}">
  `
}