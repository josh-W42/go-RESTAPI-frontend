import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = (props) => {

  const [movie, setMovie] = useState({ });

  useEffect(() => {
    setMovie({ 
      ...movie,
      id: props.match.params.id,
      title: 'some movie',
      runtime: 150,
    });
  }, []);

  return (
    <>
      <div className="container">
        <h3>One movie</h3>

        <table className="table table-compact table-striped">
          <thead></thead>
          <tbody>
            <tr>
              <td><strong>Title:</strong></td>
              <td>{movie.title}</td>
            </tr>
            <tr>
              <td><strong>Runtime:</strong></td>
              <td>{movie.runtime} minutes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Movie;