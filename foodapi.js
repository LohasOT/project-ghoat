
document.getElementById(`searchBtn`).addEventListener(`click`, event => {
  event.preventDefault()
  const ingredient = document.getElementById('ingredient').value

  axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${ingredient}&apiKey=537e785a5f5e4d618536a1641da530d3`)
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
})
