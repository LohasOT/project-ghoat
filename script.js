
// document.getElementById(`submit`).addEventListener(`click`, event => {
//   event.preventDefault()
//   const ingredient = document.getElementById('ingredient').value

//   axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${ingredient}&apiKey=537e785a5f5e4d618536a1641da530d3`)
//     .then(res => {
//       const food = res.data
//       console.log(food)
//     })
// })

document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()
  axios.get(`https://k2maan-moviehut.herokuapp.com/api/random`)
    .then(res => {
      const movie = res.data
      let title = movie.name
      console.log(movie)

      axios.get(`http://www.omdbapi.com/?t=${title}&apikey=39892eb2`)
        .then(resp => {
          
          const poster = resp.data
          console.log(poster)
          picture = poster.Poster
          console.log(picture)
          descript = poster.Plot

          const currentElem = document.createElement('div')
          currentElem.innerHTML = `

          <div>
            <h1>${title}</h1>
            <h3>Summary: ${descript}</h3>
            <img src="${picture}" alt="${title} Poster">
          </div>
          `
          document.getElementById('movie').append(currentElem)
        })

    })

})
