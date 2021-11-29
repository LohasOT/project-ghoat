
document.getElementById(`searchBtn`).addEventListener(`click`, event => {
  let cardDiv = document.getElementById("card");
  cardDiv.classList.remove("hide");
  event.preventDefault()
  const ingredient = document.getElementById('ingredient').value

  axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${ingredient}&addRecipeInformation=true&fillIngredients=true&instructionsRequired=true&apiKey=0ccd34341a57418f9bbc6d88b80a81e2`)
    .then(res => {
      const food = res.data
      console.log (food)

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
        currentElem.append(stepElem)
      }

      for (let e = 0; e < ingredients.length; e++) {
        const ingredientsElem = document.createElement('li')
        ingredientsElem.innerHTML = `
        "${ingredients[e].original}"
        `
        console.log(ingredientsElem)
      }

      // document.getElementById('recipe').append(currentElem)
    })
  axios.get(`https://k2maan-moviehut.herokuapp.com/api/random`)
    .then(res => {
      const movie = res.data
      let title = movie.name
      console.log(movie)

      axios.get(`https://www.omdbapi.com/?t=${title}&apikey=39892eb2`)
        .then(resp => {

          const poster = resp.data
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
              <p>Summary: ${descript}</p>
          
          `
        })
    })
})

document.getElementById('saveCombo').addEventListener('click', event => {

  event.preventDefault()

  let generatedMovie = document.getElementById('movieCard').value

  let myStoredMovie = JSON.parse(localStorage.getItem('myMovie')) || []

  //grabbing our array from localStorage, setting it to the variable myStoredStuff. IF this array does not exist then we set it to an empty array. Also we make sure to JSON.parse it so that we can get a real array, not a fake 'string array'.


  myStoredMovie.push(generatedMovie)
  //taking our value of the input, and pushing it to the array that we pulled down. This is just adding our stuff into our myStoredStuff


  localStorage.setItem('myMovie', JSON.stringify(myStoredMovie))
  //now we are taking the array that we pulled down, changed, and send it back to localStorage as myStuff. 


  //here we are looping through the array that we pulled down and added an item to. 
  for (let i = 0; i < myStoredMovie.length; i++) {
    let box = document.getElementById('box')
    box.innerHTML += `
  <li> ${myStoredMovie[i]} </li>
`

    window.location.href = "saved.html"
  }
})

