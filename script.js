document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()
  axios.get(`https://k2maan-moviehut.herokuapp.com/api/random`)
  .then(res => {
    const movie = res.data
    console.log(movie)
  })
})