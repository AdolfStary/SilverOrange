const saveRepoDetails = (repo) => {
  sessionStorage.setItem('repo', JSON.stringify(repo));
};

const sortByDateCreated = (a, b) => {
  if (a.created_at > b.created_at) {
    return -1;
  } else if (a.created_at < b.created_at) {
    return 1;
  }
  return 0;
};
export { saveRepoDetails, sortByDateCreated };
