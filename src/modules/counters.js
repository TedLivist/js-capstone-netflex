const getLikesCount = (target, likesArray, likesContainer) => {
  for (let i = 0; i <= likesArray.length - 1; i++) {
    if (likesArray[i]['item_id'] == target.id) {
      likesContainer.innerHTML = `${likesArray[i].likes} likes`
    }
  }
}

const showsCount = (showsList) => {
  return showsList.length
}

export { getLikesCount, showsCount }