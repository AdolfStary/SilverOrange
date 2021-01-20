import { Router, Request, Response } from 'express';
import jsonFileRepos from '../../data/repos.json';
import axios from 'axios';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  res.json(jsonFileRepos);
  
});

const getGithubRepos = async () => {


}
