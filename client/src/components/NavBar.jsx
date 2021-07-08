import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';

export default function NavBar() {
  return (
    <nav id="navbar">
      <ul>
        <li>
          <Link to={'/'}> Home </Link>
        </li>
        <li>
          <Link to={'/characters'}> All Characters </Link>
        </li>
        <li>
          <Link to={'/favorites'}> My Favorite Characters </Link>
        </li>
        <li>
          <Link to={'/about'}> About </Link>
        </li>
      </ul>
    </nav>
  );
}
