import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import RelevantMovie from "./RelevantMovies";


const MovieDetails = () => {

  let { id } = useParams();
  let navigate = useNavigate();
  let [movie, setMovie] = useState(null);
  let [error, setError] = useState(null);
  let [pending, setPending] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:4000/movies/" + id)
      .then((res) => { return res.json() })
      .then((data) => {
        console.log(data);
        setMovie(data)
        setPending(false)
      })
      .catch((err) => {
        setError(err.message);
        setPending(false)
      })
    }, 3000)
  }, [id])

  let deleteMovie = () => {
    fetch("http://localhost:4000/movies/" + id, { method: "DELETE" })
      .then(() => { navigate("/") })
  }




  return (<div>

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

    {movie && <div align="center">

      <div id="moviedet">
        <div id="poster">
          <img src={movie.poster}></img>
        </div>

        <div id="cont">
          <h1>{movie.name}</h1>   <br />
          <p>Rating : {movie.rating}</p>
          <p> {movie.genre}</p>
          <p>Director : {movie.director}</p>
          <p>Hero : {movie.hero}</p>
          <p>Heroine: {movie.heroine}</p>
          <p>Languages : {movie.languages.join(', ')}</p>
          <p>{movie.synopsis}</p>

        </div>
      </div>
      <iframe src={movie.trailer} frameborder="0" height="250px" width="200px" ></iframe>

      <br />
      <div id="mvebtn">
      <button onClick={deleteMovie}>Delete</button>
    <Link to={`/update/${movie.id}`}> <button>Update</button> </Link> 
      </div>
    </div>}
    {movie && <RelevantMovie genre={movie.genre} />}

  </div>);
}


export default MovieDetails;