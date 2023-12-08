import React from 'react';
import "./Navbar.css";
import DarkMode from './DarkMode/DarkMode';
import Fire from '../assets/fire.png';
import Star from '../assets/glowing-star.png';
import Party from '../assets/partying-face.png';

const Navbar = () => {
  return (
   <nav className="navbar">
    <h1>Sekhar's Movie</h1>
   
    <div className="navbar_links">
      <DarkMode/>
    <a href="#popular">Popular <img src={Fire} alt ="Fire emoji" className="navbar-emoji"/></a>
    <a href="#top_rated">Top Rated <img src={Star} alt ="Top rated emoji" className="navbar-emoji"/></a>
    <a href="#upcoming">Upcoming<img src={Party} alt ="Party emoji" className="navbar-emoji"/></a>
    </div>
    </nav>
  )
}

export default Navbar
