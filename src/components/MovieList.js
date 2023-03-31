import { height, width } from '@mui/system';
import React from 'react';
import "./movie.scss";

 const MovieList = (props) => {
  return (
    <>{props.movies.map((movie,index)=><div>
        <img src={movie.poster_path} alt='movie' className='img'></img>
    </div>)}</>
  )
}

export default MovieList;