document.getElementById(`searchBtn`).addEventListener(`click`, event => {
  event.preventDefault()
  const ingredient = document.getElementById('ingredient').value

  axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${ingredient}&addRecipeInformation=true&fillIngredients=true&instructionsRequired=true&apiKey=0ccd34341a57418f9bbc6d88b80a81e2`)
    .then(res => {
      const food = res.data

      let randomIndex = Math.floor(Math.random() * 10)
      let steps = food.results[randomIndex].analyzedInstructions[0].steps

      const currentElem = document.createElement('div')
      currentElem.innerHTML = `
        <h3>"${food.results[randomIndex].title}"</h3>
        <img src="${food.results[randomIndex].image}" alt="${food.results[randomIndex].title}">
      `
      for (let i = 0; i < steps.length; i++) {
        const stepElem = document.createElement('li')
        stepElem.innerHTML = `
        <li>"${steps[i].step}"</li>
        `
        currentElem.append(stepElem)
      }
      document.getElementById('recipe').append(currentElem)
    })
})