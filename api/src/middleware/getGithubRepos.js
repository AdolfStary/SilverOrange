import axios from 'axios';
const getGithubRepos = async () => {
    const githubRepos = await axios(
      {
        method: 'get',
         url: 'https://api.github.com/users/silverorange/repos'
      }
    ).then((res) => {
      return res.data;
    }).catch((err) => {
      throw err;
    });
    return githubRepos;
  }
export default getGithubRepos;