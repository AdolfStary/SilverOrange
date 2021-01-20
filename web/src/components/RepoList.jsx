import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRepos } from '../utility/api-calls';
import {
  saveRepoDetails,
  sortByDateCreated,
  getLanguages,
} from '../utility/general';
import '../css/repo-list.css';
import LanguageFilter from './LanguageFilter';

const RepoDetails = () => {
  const [repositories, setRepositories] = useState([]);
  const [defaultRepos, setDefaultRepos] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [response, setResponse] = useState('Success');

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const repos = await getRepos();
        // Sorts repos in reverse chronological order by date created
        repos.sort((a, b) => sortByDateCreated(a, b));
        setRepositories(repos);
        setDefaultRepos(repos);
        setResponse('Success');
        setLanguages(getLanguages(repos));
      } catch (err) {
        setResponse(err.message);
      }
    };
    fetchRepos();
  }, []);
  return (
    <React.Fragment>
      <h1>List of sample repositories</h1>
      {response !== 'Success' && <p>Error loading data: {response}</p>}
      <LanguageFilter
        languages={languages}
        defaultRepos={defaultRepos}
        setRepositories={setRepositories}
      />
      <table>
        <thead>
          <tr>
            <th>Repo Name</th>
            <th>Description</th>
            <th>Language</th>
            <th>Forks count</th>
          </tr>
        </thead>
        <tbody>
          {
            // If we received repos, creates clickable table rows with data.
            repositories.length > 0 ? (
              repositories.map((repo) => (
                <tr key={repo.id}>
                  <td>
                    <Link
                      to="/RepoDetails"
                      onClick={() => saveRepoDetails(repo)}
                    >
                      {repo.name}
                    </Link>
                  </td>
                  <td>{repo.description}</td>
                  <td>{repo.language}</td>
                  <td>{repo.forks_count}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No data was retrieved</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </React.Fragment>
  );
};
export default RepoDetails;
