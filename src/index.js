import './assets/stylesheets/style.css';
import getShows from './modules/getShows.js';

const allShowsContainer = document.querySelector('.shows-list')

window.addEventListener('load', async () => {
  const shows = await getShows()
  const sixShows = shows.slice(0, 6)
  console.log(sixShows)

  const firstShow = sixShows[0]
  console.log(firstShow)

  for (let i = 0; i <= sixShows.length - 1; i++) {

    const firstContainer = document.createElement('div')
    firstContainer.id = `movie${sixShows[i].id}`

    const img = document.createElement('img')
    img.src = sixShows[i].image.medium
    firstContainer.appendChild(img)

    const title = document.createElement('h4')
    title.textContent = `${sixShows[i].name}`
    firstContainer.appendChild(title)

    const commentBtn = document.createElement('div')
    commentBtn.innerHTML = `<button>Comment</button>`
    firstContainer.appendChild(commentBtn)

    allShowsContainer.appendChild(firstContainer)

  }

  // for (let i = 0; sixShows.length - 1; i++) {
  //   const showContainer = document.createElement('div')

  //   allShowsContainer.appendChild(showContainer)
  // }
})