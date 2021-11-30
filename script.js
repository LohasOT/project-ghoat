let movie
let poster
let food
let foodObject
document.getElementById(`searchBtn`).addEventListener(`click`, event => {

  let cardDiv = document.getElementById("card");
  cardDiv.classList.remove("hide");
  event.preventDefault()
  const ingredient = document.getElementById('ingredient').value

  axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${ingredient}&addRecipeInformation=true&fillIngredients=true&instructionsRequired=true&apiKey=0ccd34341a57418f9bbc6d88b80a81e2`)
    .then(res => {
      food = res.data
      console.log(food)

      let randomIndex = Math.floor(Math.random() * 10)
      let steps = food.results[randomIndex].analyzedInstructions[0].steps
      let ingredients = food.results[randomIndex].extendedIngredients

      const foodPic = document.getElementById('foodPoster')

      foodPic.innerHTML = `<img src="${food.results[randomIndex].image}" alt="${food.results[randomIndex].title}">`


      document.getElementById('foodTitle').innerHTML = `
            ${food.results[randomIndex].title}
          `

      for (let i = 0; i < steps.length; i++) {
        const stepElem = document.createElement('li')
        stepElem.innerHTML = `
        "${steps[i].step}"
        `
        // currentElem.append(stepElem)
      }

      for (let e = 0; e < ingredients.length; e++) {
        const ingredientsElem = document.createElement('li')
        ingredientsElem.innerHTML = `
        "${ingredients[e].original}"
        `
        console.log(ingredientsElem)
      }
      foodObject = {
        title: food.results[randomIndex].title,
        poster: food.results[randomIndex].image,
        steps: steps,
        ingredients: ingredients
      }
      console.log(foodObject)
      // document.getElementById('recipe').append(currentElem)
    })
  axios.get(`https://k2maan-moviehut.herokuapp.com/api/random`)
    .then(res => {
      movie = res.data
      let title = movie.name
      console.log(movie)

      axios.get(`https://www.omdbapi.com/?t=${title}&apikey=39892eb2`)
        .then(resp => {

          poster = resp.data
          picture = poster.Poster
          descript = poster.Plot

          const moviepic = document.getElementById('moviePoster')

          moviepic.innerHTML = `<img src="${picture}">`

          const movieName = document.getElementById('movieTitle')

          movieName.innerHTML = `
            <p>${title}</p>
          `
          const movieContent = document.getElementById('movieContent')

          movieContent.innerHTML = `
              <p>Release Date: ${movie.releaseYear}</p>
              <p>Genre: ${movie.genre}</p>
              <p>Rating: ${movie.imdbRating}</p>
          
          `
        })
    })
})

document.getElementById('saveCombo').addEventListener('click', event => {

  event.preventDefault()
  let myStoredPoster = JSON.parse(localStorage.getItem('myPoster')) || []
  let myStoredMovie = JSON.parse(localStorage.getItem('myMovie')) || []
  let myStoredFood = JSON.parse(localStorage.getItem('myFood')) || []

  myStoredMovie.push(movie)
  myStoredPoster.push(poster)
  myStoredFood.push(foodObject)

  localStorage.setItem('myMovie', JSON.stringify(myStoredMovie))
  localStorage.setItem('myPoster', JSON.stringify(myStoredPoster))
  localStorage.setItem('myFood', JSON.stringify(myStoredFood))
  window.location.href = "myResults.html"

})

