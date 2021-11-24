
document.getElementById(`searchBtn`).addEventListener(`click`, event => {
  event.preventDefault()
  const ingredient = document.getElementById('ingredient').value

  axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${ingredient}&addRecipeInformation=true&fillIngredients=true&instructionsRequired=true&apiKey=0ccd34341a57418f9bbc6d88b80a81e2`)
    .then(res => {
      const food = res.data
      console.log(food)

      let randomIndex = Math.floor(Math.random() * 10)

      const currentElem = document.createElement('div')
      currentElem.innerHTML = `
        <h3>"${food.results[randomIndex].title}"</h3>
        <img src="${food.results[randomIndex].image}" alt="${food.results[randomIndex].title}">
        
      `

      document.getElementById('recipe').append(currentElem)
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

          const currentElem = document.createElement('div')
          currentElem.innerHTML = `

            <h1>${title}</h1>
            <img src="${picture}" alt="${title} Poster">
            <h3>Release Date: ${movie.releaseYear}
            <h3>Genre: ${movie.genre}
            <h3>Rating: ${movie.imdbRating}
            <h3>Summary: ${descript}</h3>
          `
          document.getElementById('movie').append(currentElem)
        })
    })
})

