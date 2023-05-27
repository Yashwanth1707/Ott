import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies, title }) => {
  let [favId,setFavId] = useState(undefined);
  let [alter,setAlter] = useState(0);

  useEffect(()=>{
    let fav = JSON.parse(localStorage.getItem("fav"));
    setFavId(fav.map((m)=>{return m.id}));
  },[alter])

    let favMovie = (movie) => {
        let fav = JSON.parse(localStorage.getItem("fav"));
        if(fav.some((m)=>{return m.id==movie.id})){
            alert("Already added to favourite")
        }else{
           
        fav.push(movie);
        localStorage.setItem("fav", JSON.stringify(fav));
        alert("movie added to fav");
        setAlter(alter+1);
        }
    }


    let removeFav =(id)=>{
        let fav = JSON.parse(localStorage.getItem("fav"));
        fav =  fav.filter((m)=>{return m.id != id })
        localStorage.setItem("fav", JSON.stringify(fav));
        alert("movie removed from favorites")
        setAlter(alter+1)
    }
  

    return (<div className="home">


        {<div> <h1 id="title">{title}</h1><br />
            <div id="movies">
                {movies.map((movie) => {
                    return (<div id="cnt">
                        <Link to={`/MovieDetails/${movie.id}`} id="lnk"  >
                            <img src={movie.poster} alt="" width="200px" height="250px" />
                            <h1 align="center">{movie.name}</h1>
                            <h6 align="center">{movie.genre}</h6>
                        </Link>
                     {favId&&favId.includes(movie.id)?<button onClick={() => { removeFav(movie.id);}}>💝 </button> :<button onClick={() => { favMovie(movie);}}>💟 </button>}
                      
                    </div>)
                })}
            </div> </div>}
    </div>);
}

export default MoviesList;