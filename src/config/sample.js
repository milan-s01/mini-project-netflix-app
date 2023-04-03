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