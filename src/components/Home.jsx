import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";

const Home = () => {

  let [movies, setMovies] = useState(null);
  let [error, setError] = useState(null);
  let [pending, setPending] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:4000/movies")
        .then((res) => { return res.json() })
        .then((data) => {//console.log(data);
          setMovies(data)
          setPending(false)
        })
        .catch((err) => {
          setError(err.message);
          setPending(false)
        })
    }, 3000)
  }, [])

  useEffect(() => {
    if (localStorage.getItem("fav") == null) {
      localStorage.setItem("fav", "[]");
    }
  }, [])

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

      {movies && <div>
        <MoviesList movies={movies} title="All Movies" />
        <MoviesList movies={movies.filter((m) => { return m.genre.includes("Action") })} title="Action Movies" />
        <MoviesList movies={movies.filter((m) => { return m.genre.includes("Drama") })} title="Drama" />
        <MoviesList movies={movies.filter((m) => { return m.genre.includes("Comedy") })} title="Comedy" />
      </div>
      }


    </div>
  );
}

export default Home