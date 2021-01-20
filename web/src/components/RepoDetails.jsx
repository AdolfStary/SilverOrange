import React from 'react';
import { Link } from 'react-router-dom';

const RepoDetails = () => {
  const repo =
    sessionStorage.getItem('repo') !== null &&
    sessionStorage.getItem('repo').trim() !== ''
      ? JSON.parse(sessionStorage.getItem('repo'))
      : '';

  return (
    <div>
      <div className="repo-info">{repo.name}</div>
      <Link to="/RepoList">Return to List</Link>
    </div>
  );
};
export default RepoDetails;
