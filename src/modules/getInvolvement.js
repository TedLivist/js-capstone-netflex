const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IEprda6bVbN0jOFjgzgK/likes')
  return response.json()
}

const getComments = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IEprda6bVbN0jOFjgzgK/comments?item_id=item1')
  return response.json()
}

export { getLikes, getComments }