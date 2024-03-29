import Movie from './Components/Movie/Movie';
// import style from './Components/Movie.style';
import { movies } from './Moviedummy';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {movies.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;