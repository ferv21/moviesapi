import Header from './components/Header';
import MovieList from './components/MovieList';
import TopRatedList from './components/TopRatedList';

function App() {

  return (
    <>
        <Header/>
        <div className="container">
        <MovieList />
        <TopRatedList />
        </div>
    </>
  );
}

export default App;
