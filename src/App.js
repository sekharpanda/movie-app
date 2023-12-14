import React from 'react';
import {Routes, Route} from 'react-router-dom';
import "./App.css";


import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";
import Navbar from './components/Navbar';
import Movielist from './components/MovieList/Movielist';
import SingleMovie from './components/MovieList/SingleMovie';

const App = () => {
  return (
    <div className='App'>
          <div className='container-fluid'>
<Navbar/>
<main>
  <Routes>
    <Route path ="/" element={<Movielist type="popular" title="Popular" emoji ={Fire}/>}></Route>
    <Route path ="/top_rated" element={<Movielist type="top_rated" title="Top Rated" emoji ={Star}/>}></Route>
    <Route path ="/upcoming" element={ <Movielist type="upcoming" title="Upcoming" emoji ={Party}/>}></Route>
    <Route path ="/movie/:movieId" element={<SingleMovie/>}/>
  </Routes>
</main>

     
    </div>
    </div>
  )
}

export default App
