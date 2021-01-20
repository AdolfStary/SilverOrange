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

const getLatestCommit = async (url) => {
  url = url.slice(0, -6);
  const latestCommit = await axios({
    method: 'GET',
    url,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
  return latestCommit[0].commit;
};

const getReadme = async (fullRepoName) => {
  const url = `https://raw.githubusercontent.com/${fullRepoName}/master/README.md`;
  const readme = await axios({
    method: 'GET',
    url,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
  return readme;
}

export { getRepos, getLatestCommit, getReadme };
