const buildShows = (showsList, container) => {
  
  for (let i = 0; i <= showsList.length - 1; i++) {
    const showContainer = document.createElement('div')
    showContainer.id = `movie${showsList[i].id}`

    const img = document.createElement('img')
    img.src = showsList[i].image.medium
    img.style.width = '20rem'
    showContainer.appendChild(img)

    const titleLike = document.createElement('div')
    const title = document.createElement('h3')
    const likeBtn = document.createElement('i')
    likeBtn.classList.add('bx')
    likeBtn.classList.add('bx-heart')
    likeBtn.classList.add('bx-sm')
    
    title.textContent = `${showsList[i].name}`

    titleLike.style.margin = '5px'
    titleLike.style.textAlign = 'center'

    titleLike.appendChild(title)
    titleLike.appendChild(likeBtn)
    showContainer.appendChild(titleLike)

    const commentBtn = document.createElement('div');
    // commentBtn.classList.add('comment-popup');
    commentBtn.innerHTML = `<button class="comment-popup">Comment</button>`
    showContainer.appendChild(commentBtn)

    container.appendChild(showContainer)

    // const btn = document.querySelector('.comment-popup')

    // btn.addEventListener('click', () => {
    //   console.log('Hahahaha')
    // })

  }
}

export default buildShows