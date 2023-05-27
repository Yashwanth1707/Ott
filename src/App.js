
import './App.css';
import AddMovie from './components/AddMovie';
import Favorites from './components/Favorites';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import Search from './components/Search';
import Navbar from './components/navbar';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import UpdateMovie from './components/update';


function App() {
  
  return (
    <BrowserRouter>
        <div>
            <Navbar />

            <Routes>
              <Route path='/' element={ <Home />}/>
              <Route path='/addmovie' element={ <AddMovie /> }/> 
              <Route path='/MovieDetails/:id' element={<MovieDetails />}/>
              <Route path='/fav' element={<Favorites  />} />
              <Route path='/search/:searchkey' element={<Search />} />
              <Route path='/update/:id' element={<UpdateMovie  /> }/> 
              
              </Routes>

         </div>
   </BrowserRouter>
  );
}

export default App;