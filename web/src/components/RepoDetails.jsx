import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getLatestCommit } from '../utility/api-calls';

const RepoDetails = () => {
  const [commit, setCommit] = useState(undefined);
  const repo =
    sessionStorage.getItem('repo') !== null &&
    sessionStorage.getItem('repo').trim() !== ''
      ? JSON.parse(sessionStorage.getItem('repo'))
      : '';
  useEffect(() => {
    const fetchCommit = async () => {
      const thisCommit = await getLatestCommit(repo.commits_url);
      setCommit(thisCommit);
    };
    fetchCommit();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className="repo-info">
        <ul>
          <li>
            <b>Most Recent commit: </b>
            {commit && new Date(commit.author.date).toLocaleString()}
          </li>
          <li>
            <b>Author: </b>
            {commit && commit.author.name}
          </li>
          <li>
            <b>Message: </b>
            {commit && commit.message}
          </li>
        </ul>
      </div>
      <Link to="/RepoList">
        <button>Return to List</button>
      </Link>
    </div>
  );
};
export default RepoDetails;
