import React, { useEffect, useState } from 'react'
import _ from 'lodash';
import "./Movielist.css";
import Fire from "../../assets/fire.png";
import MovieCard from './MovieCard';
import FilterGroup from './FilterGroup';


const MovieList = ({type,title,emoji}) => {

    const [movies,setMovies]=useState([]);
    const [filterMovies,setFilterMovies] = useState([]);
    const [minRating, setMinRating] = useState(0);
    const [sort,setSort]= useState({
        by:"default",
        order:"asc"
    })
    useEffect(() => {
        fetchMovies();
    }, [type]);

    useEffect(()=>{
        if(sort.by!=="default"){
            const sortedMovies = _.orderBy(filterMovies,[sort.by],[sort.order])
            setFilterMovies(sortedMovies);
        }
    },[sort])

    const fetchMovies = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=9c5cc1fe4f84b51961e2da3bc27c3c28`);
            const data = await response.json();
            console.log(data.results);
            setMovies(data.results);
            setFilterMovies(data.results); // You can handle the received data here
        } catch (error) {
            console.error("Error fetching movies:", error);
            // Handle errors here
        }
    }

    const  handlefilter = rate => {

        if(rate === minRating){
            setMinRating(0)
            setFilterMovies(movies)
        }else{
            setMinRating(rate);
        const filtered = movies.filter((movie) => Math.floor(movie.vote_average) == rate);
        setFilterMovies(filtered);
     
        
    }
      };

      const handleSort=e=>{
        const {name,value}= e.target;

        setSort(prev =>({...prev,[name]:value}))

      
    }
   
      
  return (
  
    <div className="row ">
    <div className="movie_list col-md-12 col-sm-12 col-xs-12" id={type}>
        <header className='movie_list_header'>
            <h2 className='movie_list_heading'>{title}
            <img src={emoji} alt = "${emoji} "/>
            
            </h2>
            <div className='movie_list_fs align_center'>
               <FilterGroup minRating={minRating} 
               onRatingClick={handlefilter}
               ratings={[8,7,6]}
               />

                <select name ="by" id="" onChange={handleSort} value={sort.by} className='"movie_sorting'>
                    <option value='default'>Sort By</option>
                    <option value='release_date'>Date</option>
                    <option value='vote_average'>Rating</option>

                </select>
                <select name ="order" id="" onChange={handleSort} value={sort.order} className='"movie_sorting'>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                 

                </select>
            </div>
        </header>

        <div className="movie_cards col-md-12">
            {
           filterMovies.map(movie =>< MovieCard key={movie.id} movie={movie}/>)
        }

        </div>

    </div>
     </div>
 
  )
}

export default MovieList
