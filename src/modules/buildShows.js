import { getLikes } from "./getInvolvement"
import likeBuild from "./likeBuild"
import { postLikes } from "./postInvolvement"
import getLikesCount from "./counters"

const buildShows = async (showsList, container) => {
  
  for (let i = 0; i <= showsList.length - 1; i++) {
    const showContainer = document.createElement('div')
    showContainer.id = `movie_${showsList[i].id}`

    const img = document.createElement('img')
    img.src = showsList[i].image.medium
    img.style.width = '20rem'
    showContainer.appendChild(img)

    const titleLike = document.createElement('div')
    const title = document.createElement('h3')
    const likeBtn = document.createElement('i')
    const likeDisplay = document.createElement('span')
    likeDisplay.innerHTML = '0 likes'

    likeBtn.classList.add('bx')
    likeBtn.classList.add('bx-heart')
    likeBtn.classList.add('bx-sm')
    likeBtn.style.cursor = 'pointer'
    likeBtn.id = `${showContainer.id}`
    
    title.textContent = `${showsList[i].name}`

    titleLike.style.margin = '5px'
    titleLike.style.textAlign = 'center'

    titleLike.appendChild(title)
    titleLike.appendChild(likeBtn)
    titleLike.appendChild(likeDisplay)
    showContainer.appendChild(titleLike)

    const commentBtn = document.createElement('div');
    commentBtn.innerHTML = `<button class="comment-popup">Comment</button>`
    showContainer.appendChild(commentBtn)

    container.appendChild(showContainer)

    const listOfLikes = await getLikes()
    getLikesCount(likeBtn, listOfLikes, likeDisplay)

    likeBtn.addEventListener('click', async (e) => {
      await likeBuild(e.target, likeDisplay)
      await postLikes(e.target.id)
      const getReq = await getLikes()

      getLikesCount(e.target, getReq, likeDisplay)
    })
  }
}

export default buildShows