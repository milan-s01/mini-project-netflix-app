function Featured(type) {
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("");
    const url = "http://localhost:4000/movies/genre";

    useEffect(() => { 
        console.log(genres)
        let token = sessionStorage.getItem("jwtToken");
        axios.get(url , {
            headers: {
                "Authorization" : `x-auth-token ${token}`
            }
        }).then(response => {
            setGenres(response.data);
        }).catch(error=>console.log(error));
    }, []);

    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
    };

    return (
        <div className='featured'>
            {type && (
                <div className='category'>
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select value={selectedGenre} onChange={handleGenreChange}>
                        <option value="">All Genres</option>
                        {genres.map((genre) => (
                            <option key={genre.id} value={genre.name}>{genre.name}</option>
                        ))}
                    </select>
                </div>
            )}
            <img src='https://wallpaper.dog/large/20447047.jpg'></img>
            <div className='info'>
                <div className='title'>Title</div>
                <div className='description'>Description</div>
                <div className='buttons'>
                    <button>Play</button>
                    <button>My List</button>
                </div>
            </div>
            <div className='fade-bottom'></div>
            <div className='movie-list'>
                {movies
                    .filter(movie => !selectedGenre || movie.genre.includes(selectedGenre))
                    .map((movie) => (
                        <div key={movie.id} className='movie'>
                            <Link to={`/movie/${movie.id}`} key={movie.id} className='movie-link'>
                                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="movie" />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
