import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./home.scss";
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import { apiurl } from '../config/apiurl';
function Home() {
  const [movies, setMovies] = useState([]);
  const url = "https://api.themoviedb.org/3/movie/popular?api_key=03732a642aba67864e7018998055639d&language=en-US&page=1";
  // useEffect(() => {
  //   console.log(movies);
  //   let token = sessionStorage.getItem("jwtToken");
  //   axios.get(url).then(response => setMovies(response.data)).catch(error => console.log(error));
  // }, []);

  const [genres, setGenres] = useState([]);
  
  const handleSubmit = async (genre) => {
    try {
      const response = await axios.post(apiurl.genreurl,{ genre });
      setGenres(response.data.genres);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    debugger
    console.log(movies)
    let token = sessionStorage.getItem("jwtToken");
    axios.get(url, {
      headers: {
        "Authorization": `x-auth-token ${token}`
      }
    }).then(response => {
      setMovies(response.data.results);
    }).catch(error => console.log(error));
  }, []);

  useEffect(() => {
    // Fetch the genres data when the component mounts
    const fetchGenres = async () => {
      try {
        const response = await axios.get(apiurl.genreurl);
        setGenres(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGenres();
  }, []);
  

  return (
    <div>
      <div className='header'>
        <img src='https://i.ibb.co/r5krrdz/logo.png' className='logo'></img>
        <div className='grid'>
          <div className='grid-item'><button>Home</button></div>
          <div className='grid-item'>Movies</div>

          <div className='grid-item'><button onClick={() => handleSubmit()}>Genres </button></div>

          <div className='grid-item'>favourites</div>
          <div className='grid-item'>My list</div>
        </div>
        <Link to="/" className='logout'><LogoutIcon></LogoutIcon></Link>
      </div>
      <div className='hbody'>
        <p>Popular on netflix</p>
        <div className='scrollbar'>
            <div className='movie-list'>
              {movies.map((movie) => (
                <div key={movie.id} className='movie'>
                  <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="movie"/>
                  {/* <h3>{movie.title}</h3>
                  // <p>{movie.overview}</p> */}
                  
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home