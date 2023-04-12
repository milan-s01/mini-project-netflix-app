<div className='results'>
          <div className='listitem'>
            <div className='movie-list'>
              {Array.isArray(display) && display.map((movie) => (
                <div key={movie._id}>
                  <h3>{movie.title}</h3>
                  <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className='movie'></img>
                </div>
              ))}
              {/* {movies.map((movie) => (
                    <div key={movie.id} className='movie'>
                        <Link to={`/movie/${movie.id}`} key={movie.id} className='movie-link'>
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className="movie" />
                        </Link>
                    </div>
                ))} */}
            </div>
          </div>

          {/* {Array.isArray(display) && display.map((movie) => (
            <div key={movie._id}>
              <h3>{movie.title}</h3>
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} className='movie'></img>
            </div>
          ))} */}
        </div>