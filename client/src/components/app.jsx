import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../styles/main.scss';
import Home from './Home.jsx';
import Favorites from './Favorites.jsx';
import ScrollBar from './ScrollBar.jsx';
import NavBar from './NavBar.jsx';

export default function App() {
  return (
    <Router>
      <header className="main">
        <NavBar />
        <h1>Rick Loves Morty</h1>
      </header>
      <main className="main" role="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
      </main>
      <footer>
        <ScrollBar />
      </footer>
    </Router>
  );
}
