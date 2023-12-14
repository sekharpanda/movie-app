import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import "./Navbar.css";

import DarkMode from './DarkMode/DarkMode';
import Fire from '../assets/fire.png';
import Star from '../assets/glowing-star.png';
import Party from '../assets/partying-face.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg ">
    <h1 className="navbar-brand">Sekhar Movies</h1>
   
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
</button>

    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
            <DarkMode />
          
                <NavLink to="/">
                    Popular{""} <img src={Fire} alt="Fire emoji" className="navbar-emoji" />
                </NavLink>
            
                <NavLink to="/top_rated">
                    Top Rated{""} <img src={Star} alt="Top rated emoji" className="navbar-emoji" />
                    </NavLink>
              
            <NavLink to="/upcoming">
                    Upcoming{""}<img src={Party} alt="Party emoji" className="navbar-emoji" />
                    </NavLink>
           
        </ul>
    </div>
</nav>



    
  )
}

export default Navbar
