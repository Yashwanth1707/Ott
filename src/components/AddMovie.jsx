import { useRef } from "react";

const Addmovie = () => {

    let moviename = useRef();
    let hero = useRef();
    let heroine = useRef();
    let director = useRef();
    let genre = useRef();
    let yor = useRef();
    let rating = useRef();
    let poster = useRef();
    let trailer = useRef();
    let synopsis = useRef();


    let handleAddMovie = (e)=>{
        e.preventDefault()

        let newMovie = {
            name: moviename.current.value,
            hero: hero.current.value,
            heroine: heroine.current.value,
            director: director.current.value,
            genre: genre.current.value,
            poster: poster.current.value,
            trailer: trailer.current.value,
            release: yor.current.value,
            rating: rating.current.value,
            synopsis : synopsis.current.value,
           languages : []
          };
          let options = document.getElementsByName("lang");
          for(let i = 0; i < options.length; i++) 
          {
              if(options[i].checked==true)
              {
                  newMovie.languages.push( options[i].value )
              }  
          }
  
        console.log(newMovie);

        fetch("http://localhost:4000/movies" , 
        {
            method : "POST" ,
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(newMovie)
        } 
        )
        .then(()=>{
            alert("new data added");
            window.location.reload();
        })

    }

    return ( 
        <div className="add-movie">
            <h1 align="center">Add new Movie</h1> <hr />
            <form onSubmit={handleAddMovie}>
                <input type="text" placeholder="Movie name" ref={moviename} required />
                <input type="text" placeholder="hero name" ref={hero} required/>
                <input type="text" placeholder="heroine name" ref={heroine} required />
                <input type="text" placeholder="director" ref={director}  required/>
                <fieldset required>
                    <legend>Select languages</legend>

                    <input type="checkbox" name="" value="kannada" /><label>Kannada</label>
                    <input type="checkbox" name="" value="tamil"/><label>tamil</label>
                    <input type="checkbox" name="" value="telugu"/><label>telugu</label>
                    <input type="checkbox" name="" value="malayalam"/><label>malayalam</label>
                    <input type="checkbox" name="" value="hindi"/><label>hindi</label>
                </fieldset>
                <input type="text" placeholder="Genre" ref={genre}  required/>
                <input type="url" placeholder="poster link" ref={poster}required />
                <input type="url" placeholder="trailer link" ref={trailer} required/>
                <input type="number" min="1950" max="2024" placeholder="relese" ref={yor} required />
                <input type="number" step="0.1" min="1" max="10" placeholder="rating" ref={rating} required/>
                <textarea cols="70" rows="6" ref={synopsis} required></textarea>

                <input type="submit" value="add" />
            </form>
        </div>
     );
}
 
export default Addmovie;