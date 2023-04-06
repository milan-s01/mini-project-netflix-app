import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./home.scss";
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import { apiurl } from '../config/apiurl';
import Navbar from './navbar/Navbar';
import Featured from './featured/Featured';
import ListMovie from './ListMovie/ListMovie';
import Listcard from './listcard/Listcard';
import ListMovie2 from './ListMovie/ListMovie2';
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
      const response = await axios.post(apiurl.genreurl, { genre });
      setGenres(response.data.genres);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    // debugger
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
    <div className='main'>
        <Navbar />
      <div className='hbody'>
        <Featured type="series"></Featured>
        <ListMovie></ListMovie>
        <ListMovie2></ListMovie2>
        <ListMovie></ListMovie>
        <Listcard></Listcard>
      </div>
    </div>
  )
}

export default Home