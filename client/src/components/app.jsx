import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../styles/main.scss';
import Home from './Home.jsx';
import Favorites from './Favorites.jsx';

export default function App() {
  return (
    <Router>
      <main id="main" role="main">
        <nav>
          <ul>
            <li>
              <Link to={'/'}> Home </Link>
            </li>
            <li>
              <Link to={'/favorites'}>My Favorite Characters</Link>
            </li>
          </ul>
        </nav>
        <h1>Rick Loves Morty</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
      </main>
    </Router>
  );
}
