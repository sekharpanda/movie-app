import React from 'react';
import { Link } from 'react-router-dom';
import Star from "../../assets/star.png";
import "./MovieCard.css";

const MovieCard = ({movie}) => {
  return (
    <div class="row  movie_card col-md-12">
   
    <Link to={`/movie/${movie.id}`} >

     <img
  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
  alt='movie_poster'
  className='movie_poster img-responsive'
/>
     
     <div className='movie_details'>
      <h3 className='movie_details_heading'>{movie.original_title}</h3>
      <div className='align-center movie_date_rate'>
      <p>{movie.release_date}</p>
      <p>{movie.vote_average} <img src={Star} alt="rating_icon" className="card_emoji"/></p>
      
      </div>
      <p className='movie_description'>
       {movie.overview.slice(0,100)+"..."}
      </p>

     </div>
     
     </Link>
     </div>

  )
}

export default MovieCard
