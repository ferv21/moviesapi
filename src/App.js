import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {

  return (
    <>
        <Header/>
        <div className="container">
        <MovieList />
        </div>
    </>
  );
}

export default App;
