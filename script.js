// Declaring variables for local storages
let movie
let poster
let food
let foodObject

// On click event
document.getElementById(`searchBtn`).addEventListener(`click`, getData)

// function to remove hide css and make the card appear
function getData() {

  let cardDiv = document.getElementById("card");
  cardDiv.classList.remove("hide");

// declaring ingredient value

  const ingredient = document.getElementById('ingredient').value

// getting information from spoonacular API
  axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${ingredient}&addRecipeInformation=true&fillIngredients=true&instructionsRequired=true&apiKey=6b9d0e1539434e12ab8da9fd6d0a1184`)
    .then(function(res){

      food = res.data
console.log(food)
// making random index for random food

      let randomIndex = Math.floor(Math.random() * 10)

// declaring variables on the food contents

      let steps = food.results[randomIndex].analyzedInstructions[0].steps
      let ingredients = food.results[randomIndex].extendedIngredients
// appending information into the innerHTML
      const foodPic = document.getElementById('foodPoster')

// getting food informations into the card
      foodPic.innerHTML = `<img src="${food.results[randomIndex].image}" alt="${food.results[randomIndex].title}">`


      document.getElementById('foodTitle').innerHTML = `
            <br>
            <h5>${food.results[randomIndex].title}</h5>
          `
      document.getElementById('foodSum').innerHTML = `
      <p style= "font-size: 15px;">${food.results[randomIndex].summary}</p>
      `
// looping the steps
      for (let i = 0; i < steps.length; i++) {
        const stepElem = document.createElement('li')
        stepElem.innerHTML = `
        "${steps[i].step}"
        `
      }
// looping the ingredients
      for (let e = 0; e < ingredients.length; e++) {
        const ingredientsElem = document.createElement('li')
        ingredientsElem.innerHTML = `
        "${ingredients[e].original}"
        `
        document.getElementById('ingredientNeed').append(ingredientsElem)
// making key values on food to pull from local storage later
      }
      foodObject = {
        title: food.results[randomIndex].title,
        poster: food.results[randomIndex].image,
        steps: steps,
        ingredients: ingredients
      }

    })
// getting information from the randomized movie API
  axios.get(`https://k2maan-moviehut.herokuapp.com/api/random`)
    .then(res => {
      movie = res.data
      let title = movie.name

// getting poster and summary from the 2nd API
      axios.get(`https://www.omdbapi.com/?t=${title}&apikey=39892eb2`)
        .then(resp => {
// declaring variables for movie

          poster = resp.data
          picture = poster.Poster
          descript = poster.Plot

// appending movie information into the innerHTML
          const moviepic = document.getElementById('moviePoster')

          moviepic.innerHTML = `<img src="${picture}">`

          const movieName = document.getElementById('movieTitle')

          movieName.innerHTML = `
            
            <h5>${title}</h5>
          `
          const movieContent = document.getElementById('movieContent')

          movieContent.innerHTML = `
              <p>Release Date: ${movie.releaseYear}</p>
              <p>Genre: ${movie.genre}</p>
              <p>Rating: ${movie.imdbRating}</p>
              <br>
              <p>Summary: ${descript}</p>
          `
        })
    })
}
// onclick function when saveCombo is clicked
document.getElementById('saveCombo').addEventListener('click', event => {
// making localStorage for both movie and food API
  event.preventDefault()
  let myStoredPoster = JSON.parse(localStorage.getItem('myPoster')) || []
  let myStoredMovie = JSON.parse(localStorage.getItem('myMovie')) || []
  let myStoredFood = JSON.parse(localStorage.getItem('myFood')) || []
// pushing into localStorage

  myStoredMovie.push(movie)
  myStoredPoster.push(poster)
  myStoredFood.push(foodObject)
// stringifying the contents

  localStorage.setItem('myMovie', JSON.stringify(myStoredMovie))
  localStorage.setItem('myPoster', JSON.stringify(myStoredPoster))
  localStorage.setItem('myFood', JSON.stringify(myStoredFood))

// bring the user over to myResults.html
  window.location.href = "myResults.html"

})

