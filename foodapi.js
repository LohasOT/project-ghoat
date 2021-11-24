document.getElementById(`searchBtn`).addEventListener(`click`, event => {
  event.preventDefault()
  const ingredient = document.getElementById('ingredient').value

  axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${ingredient}&addRecipeInformation=true&fillIngredients=true&instructionsRequired=true&apiKey=0ccd34341a57418f9bbc6d88b80a81e2`)
    .then(res => {
      const food = res.data
      console.log(food)

      let randomIndex = Math.floor(Math.random() * 10)
      let steps = food.results[randomIndex].analyzedInstructions[0].steps

      const currentElem = document.createElement('div')
      currentElem.innerHTML = `
        <h3>"${food.results[randomIndex].title}"</h3>
        <img src="${food.results[randomIndex].image}" alt="${food.results[randomIndex].title}">
        <p>"${steps[0].step}"</p>
        <p>"${steps[1].step}"</p>
        <p>"${steps[2].step}"</p>
        <p>"${steps[3].step}"</p>
        <p>"${steps[4].step}"</p>
      `
      document.getElementById('recipe').append(currentElem)
    })
})