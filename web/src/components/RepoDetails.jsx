import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import marked from 'marked';
import parse from 'html-react-parser';
import { getLatestCommit, getReadme } from '../utility/api-calls';
import '../css/repo-details.css';
// Used 'marked' package for automatic markdown
const RepoDetails = () => {
  const [commit, setCommit] = useState(undefined);
  const [readme, setReadme] = useState(undefined);
  // Pull clicked repo JSON from sessionStorage
  const repo =
    sessionStorage.getItem('repo') !== null &&
    sessionStorage.getItem('repo').trim() !== ''
      ? JSON.parse(sessionStorage.getItem('repo'))
      : '';
  useEffect(() => {
    const fetchData = async () => {
      const thisCommit = await getLatestCommit(repo.commits_url);
      const fetchedReadme = await getReadme(repo.full_name);
      setCommit(thisCommit);
      setReadme(fetchedReadme);
    };
    fetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className="repo-info">
        <div className="right">
          <Link to="/RepoList">
            <button>Return to List</button>
          </Link>
        </div>
        <h2>Latest Commit Details</h2>
        {commit ? (
          <ul>
            <li>
              <b>Time: </b>
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
        ) : (
          <p>Commit data is not available</p>
        )}

        {readme && <div>{parse(marked(readme))}</div>}
      </div>
      <Link to="/RepoList">
        <button>Return to List</button>
      </Link>
    </div>
  );
};
export default RepoDetails;
