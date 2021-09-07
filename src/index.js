import './assets/stylesheets/style.css';
import buildShows from './modules/buildShows';
import getShows from './modules/getShows.js';
import modalStructure from './modules/modal';
import { postComments } from './modules/postInvolvement';


const allShowsContainer = document.querySelector('.shows-list')

window.addEventListener('load', async () => {
  const shows = await getShows()
  const sixShows = shows.slice(0, 6)
  
  buildShows(sixShows, allShowsContainer)
  
  const commentPopup = [...document.querySelectorAll('.comment-popup')];
  modalStructure(commentPopup, sixShows)

  const postComment1 = await postComments();
 
})

