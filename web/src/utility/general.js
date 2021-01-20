const saveRepoDetails = (repo) => {
  sessionStorage.setItem('repo', JSON.stringify(repo));
  console.log(repo);
};
export { saveRepoDetails };
