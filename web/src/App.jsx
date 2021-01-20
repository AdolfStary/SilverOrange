import React from 'react';
import RepoList from './components/RepoList';
import RepoDetails from './components/RepoDetails';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

export function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route exact={true} path="/" component={RepoList} />
        <Route path="/RepoList" component={RepoList} />
        <Route path="/RepoDetails" component={RepoDetails} />
      </BrowserRouter>
    </React.Fragment>
  );
}
