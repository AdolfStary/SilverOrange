import React, { useEffect, useState } from 'react';
import { getRepos } from '../utility/api-calls';
import '../css/repo-list.css';

const RepoDetails = () => {
  const [repositories, setRepositories] = useState([]);
  const [response, setResponse] = useState('Success');
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const repos = await getRepos();
        setRepositories(repos);
        setResponse('Success');
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
          {repositories.length > 0 ? (
            repositories.map((repo) => (
              <tr key={repo.id}>
                <td>{repo.name}</td>
                <td>{repo.description}</td>
                <td>{repo.language}</td>
                <td>{repo.forks_count}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data was retrieved</td>
            </tr>
          )}
        </tbody>
      </table>
    </React.Fragment>
  );
};
export default RepoDetails;
