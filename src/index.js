import './assets/stylesheets/style.css';
import buildShows from './modules/buildShows';
import getShows from './modules/getShows.js';

const allShowsContainer = document.querySelector('.shows-list')

window.addEventListener('load', async () => {
  const shows = await getShows()
  const sixShows = shows.slice(0, 6)
  console.log(sixShows)

  const firstShow = sixShows[0]
  console.log(firstShow)

  buildShows(sixShows, allShowsContainer)

})