import { Router, Request, Response } from 'express';
import jsonFileRepos from '../../data/repos.json';
import axios from 'axios';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header({
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json'
  });

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  try{
    const githubRepos = await getGithubRepos();
    let mergedRepos = githubRepos.concat(jsonFileRepos);
    
    // Filters Repos
    const filteredRepos = mergedRepos.filter((repo:any) => {
      return repo.fork === false;
    });
  
    res.status(200);
    res.json(filteredRepos);  
  }
  catch (err){
    res.status(400);
    res.json(err);
  }

});

const getGithubRepos = async () => {
  const repos = await axios(
    {
      method: 'get',
       url: 'https://api.github.com/users/silverorange/repos'
    }
  ).then((res) => {
    return res.data;
  }).catch((err) => {
    throw err;
  });
  return repos;
}
