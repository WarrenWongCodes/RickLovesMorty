import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../styles/main.scss';
import '../styles/app.scss';
import Home from './Home.jsx';
import CharacterPage from './CharacterPage.jsx';
import Favorites from './Favorites.jsx';
import ScrollBar from './ScrollBar.jsx';
import NavBar from './NavBar.jsx';
import SocialMedia from './SocialMedia.jsx';
import About from './About.jsx';

export default function App() {
  return (
    <Router>
      <div id="mainApp">
        <header className="main">
          <NavBar />
        </header>
        <main className="main" role="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/characters" component={CharacterPage} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/about" component={About} />
          </Switch>
        </main>
        <footer className="main">
          <ScrollBar />
          <SocialMedia />
        </footer>
      </div>
    </Router>
  );
}
