function Listcard() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1); // initialize page number
    const url = `http://localhost:4000/movies?page=${page}&pageSize=10&orderBy=name`; // update url with page number
  
    const fetchMoreData = () => {
      setPage(page + 1); // increment page number
      let token = sessionStorage.getItem("jwtToken");
      axios
        .get(url, {
          headers: {
            Authorization: `x-auth-token ${token}`,
          },
        })
        .then((response) => {
          setMovies([...movies, ...response.data.docs]); // append new data to existing movies array
        })
        .catch((error) => console.log(error));
    };
  
    useEffect(() => {
      let token = sessionStorage.getItem("jwtToken");
      axios
        .get(url, {
          headers: {
            Authorization: `x-auth-token ${token}`,
          },
        })
        .then((response) => {
          setMovies(response.data.docs);
        })
        .catch((error) => console.log(error));
    }, [url]);
  
    return (
      <div className="listitem">
        <div className="scrollbar">
          <InfiniteScroll
            dataLength={movies.length} // set length of data
            next={fetchMoreData} // function to call when user scrolls to bottom
            hasMore={true} // set to false when all data is loaded
            loader={<h4>Loading...</h4>} // optional loading indicator
          >
            <div className="movielist">
              {movies.map((movie) => (
                <div key={movie.id} className="mov">
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title}
                    className="movie"
                  />
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
  