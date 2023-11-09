// import { useState } from 'react';
import Movie from './Components/Movie/Movie';
// import MovieD from './Components/MovieDetail';
// import style from './Components/Movie.style';
import { movies } from './movieDummy';

function App() {
  // const [isHover, setIsHover] = useState(false);

  // const handleMouseOver = () => {
  //   setIsHover(true);
  // };
  // const handleMouseOut = (Movie) => {
  //   setIsHover(false);
  // };
  return (
    // <>
    //   <div
    //     className={isHover ? 'Hover' : ''}
    //     onMouseOver={handleMouseOver}
    //     onMouseOut={handleMouseOut}
    //   ></div>

    <div className="App">
      <div className="app-container">
        {movies.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              overview={item.overview}
            />
          );
        })}
      </div>
    </div>
    // </>
  );
}

export default App;
