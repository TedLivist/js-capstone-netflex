const renderComments = (commentContainer, list) => {
  if (list.length >= 1) {
    commentContainer.innerHTML = ''
    for (let i = 0; i <= list.length - 1; i++) {
      const commentsPara = document.createElement('p')
      commentsPara.innerHTML = `${list[i].creation_date} ${list[i].username}: ${list[i].comment}`
      commentContainer.appendChild(commentsPara)
    }
  }
}

export default renderComments