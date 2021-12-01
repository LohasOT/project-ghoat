// getting movie information from localStorage
let myStoredPoster = JSON.parse(localStorage.getItem('myPoster')) || []

let myStoredMovie = JSON.parse(localStorage.getItem('myMovie')) || []

// looping through the contents to append into new cards
for (let i = 0; i < myStoredMovie.length; i++) {

// making new card for movie
  let movieCard = document.getElementById('movieCard')
  movieCard.innerHTML += `

      <div class="col s6">
        <div class="card large">
          <div class="card-image">
            <img src="${myStoredPoster[i].Poster}">
            </div>
            <span class="card-title"><h5>${myStoredMovie[i].name}</h5></span>
        <div class="card-content">
            <p>Release Date: ${myStoredMovie[i].releaseYear}</p>
            <p>Genre: ${myStoredMovie[i].genre}</p>
            <p>Rating: ${myStoredMovie[i].imdbRating}</p>
            <p>Summary: ${myStoredMovie[i].overview}</p>
        </div>
      </div>
    </div>
`
}
// getting food information from localStorage
let myStoredFood = JSON.parse(localStorage.getItem('myFood')) || []
// looping through the saved content
for (let i = 0; i < myStoredFood.length; i++) {

// appending information into new cards
  let foodCard = document.getElementById('foodCard')
  foodCard.innerHTML += `
    <div class="col s6">
      <div class="card large">
        <div class="card-image">
          <img src="${myStoredFood[i].poster}">
        </div>
        <span class="card-title"><h5>${myStoredFood[i].title}</h5></span>
        <ol></ol>
      </div>
    </div> 
    `
// declaring variables for recipes steps

  let steps = myStoredFood[i].steps;
  let foodSteps = document.getElementById('foodSteps');

// looping through the steps to append into the food cards

  for (let j = 0; j < steps.length; j++) {
    
// appending into the "ol" inside the cards

    let stepList = document.getElementById('foodCard').getElementsByTagName('ol')[i];

// making each step a "li" to go through the steps

    let step = document.createElement("li");
    step.innerText = ` ${steps[j].step} `

// appending steps into the stepList
    stepList.append(step);
  }

}