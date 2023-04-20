import React from 'react';
import "./navbar.scss";
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Navbar(type) {
  const [genres, setGenres] = useState([]);
  const url = "http://localhost:4000/movies/genre";
  const movieurl = "http://localhost:4000/movies?page=2&pageSize=10&orderBy=release_date";
  const [display, setDisplay] = useState([]);
  const[showing,setShowing] = useState(false);
  // const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  // const handleClickSearchIcon = () => {
  //   setShowOptions(!showOptions);
  // };

  useEffect(() => {
    console.log(genres)
    let token = sessionStorage.getItem("jwtToken");
    axios.get(url, {
      headers: {
        "Authorization": `x-auth-token ${token}`
      }
    }).then(response => {
      setGenres(response.data);
    }).catch(error => console.log(error));
  }, []);

  const handleclickGenre = (e) => {
    let genreId = e.target.value;
    navigate(`/genre/${genreId}`);
    let token = sessionStorage.getItem("jwtToken");
    // setShowing(true);
    let randomQuery = Math.random().toString(36).substring(7); // generate a random string
    axios.get(`${movieurl}&genre=${genreId}&${randomQuery}`, {
      headers: {
        "Authorization": `x-auth-token ${token}`
      }
    }).then(response => {
      setDisplay(response.data.docs);
    }).catch(error => console.log(error));
  };
 const handleLogout = () =>{
  sessionStorage.clear();
 }

 const handleClickinfo = () =>{
   setShowing(true);
 }
  return (
    <div className='navbar'>
      <div className='cntr'>
        <img src='https://i.ibb.co/r5krrdz/logo.png' className='logo'></img>
        <div className='left'>
          <span>Home</span>
          <span>series</span>
          <span>Popular</span>
          <Link to="/favourites" className='fav'>
          <span >favourites</span></Link>
          {type && (
            <div className='category'>
                <select onChange={handleclickGenre}>
                  {genres.map((genre) => (
                    <option key={genre._id} value={genre._id}>
                      {genre.name}
                    </option>
                  ))}
                </select>
            </div>
          )}
        </div>
        <div className='right'>
          <img src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg' className='user' onClick={handleClickinfo}></img>
          <Link to="/" className='logout'><LogoutIcon onClick={handleLogout}></LogoutIcon></Link>
        </div>
        {showing && (
        <div className='userinfo'>
         
        </div>)}

        {/* {showing && (
        <div className='results'>
          <div className='listtem'>
            <div className='movie-lst'>
              {Array.isArray(display) && display.map((movie) => (
                <div key={movie._id}>
                  <h3>{movie.title}</h3>
                  <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className='movi'></img>
                </div>
              ))}
            </div>
          </div>
        </div>)} */}

      </div>
    </div>
  )
}

export default Navbar