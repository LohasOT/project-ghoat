let myStoredPoster = JSON.parse(localStorage.getItem('myPoster')) || []
console.log(myStoredPoster)

let myStoredMovie = JSON.parse(localStorage.getItem('myMovie')) || []
console.log(myStoredMovie)

for (let i = 0; i < myStoredMovie.length; i++) {
  let movieCard = document.getElementById('movieCard')
  movieCard.innerHTML += `

      <div class="col s6">
        <div class="card">
          <div class="card-image">
            <img style= "height: 50vh;" src="${myStoredPoster[i].Poster}">
            </div>
            <span class="card-title">${myStoredMovie[i].name}</span>
        <div class="card-content">
            <p>Release Date: ${myStoredMovie[i].releaseYear}</p>
            <p>Genre: ${myStoredMovie[i].genre}</p>
            <p>Rating: ${myStoredMovie[i].imdbRating}</p>
        </div>
      </div>
    </div>
`
}
let myStoredFood = JSON.parse(localStorage.getItem('myFood')) || []

console.log(myStoredFood)



for (let i = 0; i < myStoredFood.length; i++) {
  let foodCard = document.getElementById('foodCard')
  foodCard.innerHTML += `
    <div class="col s6">
      <div class="card">
        <div class="card-image">
          <img style= "height: 50vh;" src="${myStoredFood[i].poster}">
        </div>
        <span class="card-title">${myStoredFood[i].title}</span>
        <ol></ol>
      </div>
    </div>
    `
  let steps = myStoredFood[i].steps;
  let foodSteps = document.getElementById('foodSteps');

  for (let j = 0; j < steps.length; j++) {

    let stepList = document.getElementById('foodCard').getElementsByTagName('ol')[i];

    let step = document.createElement("li");
    step.innerText = ` ${steps[j].step} `

    stepList.append(step);
  }

}