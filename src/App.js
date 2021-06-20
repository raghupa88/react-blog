import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route path="/" exact >
              <HomePage />
            </Route>
            <Route path="/about" >
              <AboutPage />
            </Route>
            <Route path="/articles" exact >
              <ArticlesListPage />
            </Route>
            <Route path="/articles/:name" >
              <ArticlePage />
            </Route>
            <Route >
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
