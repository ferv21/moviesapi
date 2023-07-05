import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';


const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=a4ffcbf84beafd41f636bb89a5153ac2";

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      console.log(data.results);
      setMovies(data.results);
    })
  },[])


  return (
    <div className="App">
        {movies.map((movie) => (
         <MovieCard key={movie.id} {...movie}/> 
        ))}
    </div>
  );
}

export default App;
