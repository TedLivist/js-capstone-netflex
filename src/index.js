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

    const showContainer = document.createElement('div')
    showContainer.id = `movie${sixShows[i].id}`

    const img = document.createElement('img')
    img.src = sixShows[i].image.medium
    img.style.width = '20rem'
    showContainer.appendChild(img)

    const titleLike = document.createElement('div')
    const title = document.createElement('h3')
    const likeBtn = document.createElement('i')
    likeBtn.classList.add('bx')
    likeBtn.classList.add('bx-heart')
    likeBtn.classList.add('bx-sm')
    
    title.textContent = `${sixShows[i].name}`

    titleLike.style.margin = '5px'
    titleLike.style.textAlign = 'center'

    titleLike.appendChild(title)
    titleLike.appendChild(likeBtn)
    showContainer.appendChild(titleLike)

    const commentBtn = document.createElement('div')
    commentBtn.innerHTML = `<button>Comment</button>`
    showContainer.appendChild(commentBtn)

    allShowsContainer.appendChild(showContainer)

  }
})