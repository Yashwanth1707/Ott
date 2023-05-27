import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import { useParams } from "react-router-dom";

const Search = () => {
  let [error, setError] = useState(null);
  let [movies, setMovies] = useState(null);
  let [pending, setPending] = useState(true)


  let { searchkey } = useParams();

  useEffect(() => {
    setMovies(null);
    setPending(true);
    setTimeout(() => {
      fetch("http://localhost:4000/movies")
        .then((res) => { return res.json() })
        .then((data) => {//console.log(data);
          setMovies(data.filter((m) => {
            return ((m.name.toLowerCase().startsWith(searchkey)) ||
              (m.genre.toLowerCase().includes(searchkey))
            )

          }))
          setPending(false)

        })
        .catch((err) => {
          setError(err.message);
          setPending(true)

        })
    }, 3000)
  }, [searchkey])

  return (
    <div>

      {pending &&
        <div class="spinner-box">
          <div class="pulse-container">
            <div class="pulse-bubble pulse-bubble-1"></div>
            <div class="pulse-bubble pulse-bubble-2"></div>
            <div class="pulse-bubble pulse-bubble-3"></div>
          </div>
        </div>
      }

      {error && <h1>Failed To Fetch</h1>}
      {movies && <MoviesList movies={movies} title="Searched Movies" />}
    </div>
  );
}


export default Search;