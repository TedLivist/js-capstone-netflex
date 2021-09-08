const getShows = async () => {
  const response = await fetch(' https://api.tvmaze.com/shows');
  return response.json();
};

export default getShows;