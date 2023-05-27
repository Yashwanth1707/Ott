import MoviesList from "./MoviesList";
import { useState,useEffect } from "react";

const RelevantMovie = (genre , title) => {
    
    let[movies,setMovies]= useState(null);
    let[error,setError] =useState(null);
    let[pending,setPending]=useState(true);

    useEffect( ()=>{
    setTimeout( ()=>{ fetch("http://localhost:4000/movies")
        .then((res)=>{return res.json()})
        .then((data)=>{console.log(data);
                        setMovies(data)
                        setPending(false)
                      })
      .catch((err)=>{setError(err.message);
                      setPending(false)})
                      console.log("error");
                    },3000)
    },[])
    // console.log(relMovies);
    return ( 
        <div>
             {  movies && <MoviesList   movies={movies.filter((m)=>{return m.genre.includes(genre)})} title="Relevent Movies"/>
                }
              
       </div>
           );
}
 
export default RelevantMovie;