
document.getElementById(`submit`).addEventListener(`click`, event => {
  event.preventDefault()
  const ingredient = document.getElementById('ingredient').value

  axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${ingredient}&apiKey=537e785a5f5e4d618536a1641da530d3`)
    .then(res => {
      const food = res.data
      console.log(food)
    })

document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()
  axios.get(`https://k2maan-moviehut.herokuapp.com/api/random`)
  .then(res => {
    const movie = res.data
    console.log(movie)
  })
})
