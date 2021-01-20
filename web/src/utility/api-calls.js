import axios from 'axios';
const getRepos = async () => {
  const repos = await axios({
    method: 'GET',
    url: 'http://localhost:4000/repos',
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
  return repos;
};
export { getRepos };
