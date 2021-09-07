const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IEprda6bVbN0jOFjgzgK/likes')
  return response.json()
}

const getComments = async (button) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cY3e66v2Klx3RmI3fcqJ/comments?item_id=${button}`)
  return response.json()
}

export { getLikes, getComments }