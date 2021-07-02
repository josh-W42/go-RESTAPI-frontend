import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = (props) => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies([
      { id: 1, title: 'The Shawshank Redemption', runtime: 142 },
      { id: 2, title: 'The Godfather', runtime: 175 },
      { id: 3, title: 'The Dark Knight', runtime: 153 },
    ])
  }, []);

  return (
    <>
      <div className="container">
        <h3>This is the movies page</h3>
        <ul>
          {movies.map((movie, index) => {
            return (
              <li key={index}>
                <Link to={`/movies/${movie.id}`}>
                  {movie.title} - {movie.runtime} mins
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Movies;