document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()
  const title = document.getElementById('title').value
  axios.get(`http://www.omdbapi.com/?apikey=39892eb2&t=${title}`)
  .then(res => {
    const movie = res.data
    console.log(movie)
  })
})