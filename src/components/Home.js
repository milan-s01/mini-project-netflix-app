import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./home.scss";
import LogoutIcon from '@mui/icons-material/Logout';
import { apiurl } from '../config/apiurl';
import axios from 'axios';
import MovieList from './MovieList';


function Home() {
  const [movies, setMovies] = useState([{
    "_id": {
      "$oid": "6412c0f01e7ba57fb4423f6a"
    },
    "poster_path": "https://image.tmdb.org/t/p/original/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
    "adult": false,
    "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    "release_date": {
      "$date": "2022-12-07T00:00:00.000Z"
    },
    "genre_ids": [
      {
        "$oid": "6412c08155baa85292a70354"
      },
      {
        "$oid": "6412c08155baa85292a70353"
      },
      {
        "$oid": "6412c08155baa85292a70355"
      },
      {
        "$oid": "6412c08155baa85292a70359"
      }
    ],
    "id": "315162",
    "original_title": "Puss in Boots: The Last Wish",
    "original_language": "en",
    "title": "Puss in Boots: The Last Wish",
    "backdrop_path": "/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg",
    "popularity": 1972.345,
    "vote_count": 4613,
    "video": false,
    "vote_average": 8.4,
    "__v": 0
  }, {
    "_id": {
      "$oid": "6412c0f01e7ba57fb4423f6b"
    },
    "poster_path": "https://image.tmdb.org/t/p/original/x3PIk93PTbxT88ohfeb26L1VpZw.jpg",
    "adult": false,
    "overview": "At the turn of the 19th century, Pugilism was the sport of kings and a gifted young boxer fought his way to becoming champion of England.",
    "release_date": {
      "$date": "2022-06-30T00:00:00.000Z"
    },
    "genre_ids": [
      {
        "$oid": "6412c08155baa85292a70358"
      },
      {
        "$oid": "6412c08155baa85292a7035b"
      }
    ],
    "id": "943822",
    "original_title": "Prizefighter: The Life of Jem Belcher",
    "original_language": "en",
    "title": "Prizefighter: The Life of Jem Belcher",
    "backdrop_path": "/2Eewgp7o5AU1xCataDmiIL2nYxd.jpg",
    "popularity": 2522.636,
    "vote_count": 38,
    "video": false,
    "vote_average": 6.8,
    "__v": 0
  }, {
    "_id": {
      "$oid": "6412c0f01e7ba57fb4423f6d"
    },
    "poster_path": "https://image.tmdb.org/t/p/original/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    "adult": false,
    "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    "release_date": {
      "$date": "2022-11-09T00:00:00.000Z"
    },
    "genre_ids": [
      {
        "$oid": "6412c08155baa85292a70352"
      },
      {
        "$oid": "6412c08155baa85292a70353"
      },
      {
        "$oid": "6412c08155baa85292a70360"
      }
    ],
    "id": "505642",
    "original_title": "Black Panther: Wakanda Forever",
    "original_language": "en",
    "title": "Black Panther: Wakanda Forever",
    "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    "popularity": 1798.789,
    "vote_count": 4097,
    "video": false,
    "vote_average": 7.3,
    "__v": 0
  }, {
    "_id": {
      "$oid": "6412c0f01e7ba57fb4423f74"
    },
    "poster_path": "https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    "adult": false,
    "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    "release_date": {
      "$date": "2022-12-14T00:00:00.000Z"
    },
    "genre_ids": [
      {
        "$oid": "6412c08155baa85292a70360"
      },
      {
        "$oid": "6412c08155baa85292a70353"
      },
      {
        "$oid": "6412c08155baa85292a70352"
      }
    ],
    "id": "76600",
    "original_title": "Avatar: The Way of Water",
    "original_language": "en",
    "title": "Avatar: The Way of Water",
    "backdrop_path": "/ovM06PdF3M8wvKb06i4sjW3xoww.jpg",
    "popularity": 956.637,
    "video": false,
    "vote_average": 7.7,
    "__v": 0
  }, {
    "_id": {
      "$oid": "6412c0f01e7ba57fb4423f76"
    },
    "poster_path": "https://image.tmdb.org/t/p/original/cmWTZj9zzT9KFt3XyL0gssL7Ig8.jpg",
    "adult": false,
    "overview": "Erstwhile Special Forces operative Doc Alexander is asked to broker a truce with the Mexican drug cartel in secrecy. When Oklahoma Governor Richard Jeffs celebrates the execution of a high-ranking cartel member on TV, his Chief of Staff and Doc inform him about the peace he just ended. But it’s too late, as Cuco, the cartel’s hatchet man, has set his vengeful sights on Doc’s daughter Dixie.",
    "release_date": {
      "$date": "2023-02-03T00:00:00.000Z"
    },
    "genre_ids": [
      {
        "$oid": "6412c08155baa85292a70362"
      },
      {
        "$oid": "6412c08155baa85292a70352"
      },
      {
        "$oid": "6412c08155baa85292a70358"
      },
      {
        "$oid": "6412c08155baa85292a70356"
      }
    ],
    "id": "1058949",
    "original_title": "Little Dixie",
    "original_language": "en",
    "title": "Little Dixie",
    "backdrop_path": "/k4V6EvpcOsu8CX10JD0H53lFXLq.jpg",
    "popularity": 918.963,
    "video": false,
    "vote_average": 6,
    "__v": 0
  }, {
    "_id": {
      "$oid": "6412c0f01e7ba57fb4423f7b"
    },
    "poster_path": "https://image.tmdb.org/t/p/original/n9YWVQRc0zw0nwrFcOkOpffZxjc.jpg",
    "adult": false,
    "overview": "When Jason Dyson refuses to make his prized fighter throw an MMA match, a notorious gangster collects his debt by killing the fighter and kidnapping Jason's daughter. Now he must train a prisoner to endure five consecutive underground fights to save her.",
    "release_date": {
      "$date": "2022-04-22T00:00:00.000Z"
    },
    "genre_ids": [
      {
        "$oid": "6412c08155baa85292a70352"
      }
    ],
    "id": "965839",
    "original_title": "Lord of the Streets",
    "original_language": "en",
    "title": "Lord of the Streets",
    "backdrop_path": "/32GH8Mi4GmTPIQyd6IW1FFrHWrj.jpg",
    "popularity": 776.661,
    "video": false,
    "vote_average": 5.4,
    "__v": 0
  }]);

  const getMovieRequest = async () => {
    const url = "http://localhost:4000/movies/76600"

    const response = axios.get(url)
      .then(function (response) {
        getMovieRequest(response)
      })
      .catch(function (error) {
        console.log(error);
      });
    const responseJson = await response.json();
    console.log(responseJson);

  }

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div>
      <div className='header'>
        <img src='https://i.ibb.co/r5krrdz/logo.png' className='logo'></img>
        <div className='grid'>
          <div className='grid-item'><button>Home</button></div>
          <div className='grid-item'>Movies</div>

          <div className='grid-item'><button>Genres </button></div>

          <div className='grid-item'>favourites</div>
          <div className='grid-item'>My list</div>
        </div>
        <Link to="/" className='logout'><LogoutIcon></LogoutIcon></Link>
      </div>
      <div className='hbody'>
        <p>Popular on netflix</p>
        <div className='scrollbar'>
          <div className='row'><MovieList movies={movies} /></div>
        </div>
        <p>Trending Now</p>
        <div className='imgrid'>
          <div className='imgrid-item'><img src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/972101153209333.Y3JvcCwyMzkwLDE4NjksMTQyLDIxMw.jpg' className='img'></img></div>
          <div className='imgrid-item'><img src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/29730a158858869.63d50c7894fa3.jpg' className='img'></img></div>
          <div className='imgrid-item'><img src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/96d7bb166238771.Y3JvcCwxNjMxLDEyNzYsMzYsMA.jpg' className='img'></img></div>
          <div className='imgrid-item'><img src='https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/271790165212961.Y3JvcCwxMzA5LDEwMjQsNDUsMA.jpg' className='img'></img></div>
        </div>
      </div>
    </div>
  )
}

export default Home