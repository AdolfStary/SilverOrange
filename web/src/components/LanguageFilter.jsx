const LanguageFilter = ({ languages, defaultRepos, setRepositories }) => {
  const filterReposByLanguage = (language) => {
    const filteredRepos = defaultRepos.filter((repo) => {
      return repo.language === language;
    });
    setRepositories(filteredRepos);
  };

  return (
    <div className="buttons">
      {
        // Displays buttons based on languages present in repo array
        languages.length > 0 &&
          languages.map((language) => {
            return (
              <button
                key={language}
                onClick={() => filterReposByLanguage(language)}
              >
                {language}
              </button>
            );
          })
      }
      <button onClick={() => setRepositories(defaultRepos)}>Show All</button>
    </div>
  );
};
export default LanguageFilter;
