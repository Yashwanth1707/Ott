import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import { useRef, useState } from 'react';

const Navbar = () => {

    let[searchWord,setSearchWord]=useState("");


    
    return (

        <nav>
            <div id="logo">
                <Link to='/'> Movies 🎥 </Link> 
            </div>

            <div id="searchbar">
                <input type="search" placeholder="Search For Movies" value={searchWord}
                onChange={(e)=>{setSearchWord(e.target.value)}} />
              <Link to={`/search/${searchWord}`}><button>🔍</button></Link>  
            </div>

            <div id="add-movie">
                <Link to="/fav">💟 </Link>
                <Link to="/addmovie"> ➕ </Link>
            </div>

        </nav>
    );
}

export default Navbar;