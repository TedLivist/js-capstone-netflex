const postLikes = async (item) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jOmvR28ksoZ7GUF5P2Cy/likes', {
    method: 'POST',
    body: JSON.stringify({ item_id: item }),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });

  return response.text();
};

const postComments = async (button, userName, comment) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/jOmvR28ksoZ7GUF5P2Cy/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: button,
      username: userName.value,
      comment: comment.value,
    }),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });

  return response.text();
};

export { postLikes, postComments };