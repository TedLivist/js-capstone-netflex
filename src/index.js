import './assets/stylesheets/style.css';
import getShows from './modules/getShows.js';

const showsContainer = document.querySelector('.shows-list')

window.addEventListener('load', async () => {
  const shows = await getShows()
  const sixShows = shows.slice(0, 6)
  console.log(sixShows)

  console.log(showsContainer)
})