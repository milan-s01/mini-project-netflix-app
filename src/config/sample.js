import React from 'react';
import "./navbar.scss";
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const searchUrl = `https://api.themoviedb.org/3/movie/popular?api_key=03732a642aba67864e7018998055639d&language=en-US&query=${searchQuery}`;

  useEffect(() => {
    if (searchQuery !== '') {
      axios.get(searchUrl)
        .then(response => {
          setMovies(response.data.results);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      setMovies([]);
    }
  }, [searchQuery, searchUrl]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  }

  return (
    <div className='navbar'>
      <div className='cntr'>
        <img src='https://i.ibb.co/r5krrdz/logo.png' className='logoim'></img>
        <div className='left'>
          <span>Home</span>
          <span>series</span>
          <span>Popular</span>
          <span>favourites</span>
        </div>
        <div className='right'>
          <div className='search'>
            <input type="text" onChange={handleSearch} />
            {movies.length > 0 && (
              <ul>
                {movies.map(movie => (
                  <li key={movie.id}>{movie.title}</li>
                ))}
              </ul>
            )}
            <img src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg' className='user'></img> 
            <Link to="/" className='logout'><LogoutIcon></LogoutIcon></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar