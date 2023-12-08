import React from 'react';
import "./App.css";
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";
import Navbar from './components/Navbar';
import Movielist from './components/MovieList/Movielist';

const App = () => {
  return (
    <div className='App'>
<Navbar/>
      <Movielist type="popular" title="Popular" emoji ={Fire}/>
      <Movielist type="top_rated" title="Top Rated" emoji ={Star}/>
      <Movielist type="upcoming" title="Upcoming" emoji ={Party}/>
    </div>
  )
}

export default App
