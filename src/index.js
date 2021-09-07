import './assets/stylesheets/style.css';
import buildShows from './modules/buildShows';
import { showsCount } from './modules/counters';
import getShows from './modules/getShows.js';
import modalStructure from './modules/modal';

const itemsTitle = document.querySelector('.items-title')
const allShowsContainer = document.querySelector('.shows-list')

window.addEventListener('load', async () => {
  const shows = await getShows()
  const sixShows = shows.slice(0, 6)

  itemsTitle.innerHTML = `TV Shows (${showsCount(sixShows)})`
  
  await buildShows(sixShows, allShowsContainer)
  
  const commentPopup = [...document.querySelectorAll('.comment-popup')];
  modalStructure(commentPopup, sixShows)
})

