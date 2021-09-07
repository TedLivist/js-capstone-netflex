const postLikes = async (item) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IEprda6bVbN0jOFjgzgK/likes', {
    method: 'POST',
    body: JSON.stringify({ item_id: item }),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  })

  return response.text()
}

const postComments = async (button, userName, comment) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cY3e66v2Klx3RmI3fcqJ/comments', {
    method: 'POST',
    body: JSON.stringify({
      "item_id": button,
      "username": userName.value,
      "comment": comment.value,
  }),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  })

  return response.text()
}

export { postLikes, postComments }