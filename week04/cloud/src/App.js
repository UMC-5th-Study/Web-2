import { useEffect, useState } from "react";
import { Movie } from "./components/Movie";

// import { getFetchOption } from "./utils/api";
import { movies } from "./utils/constants";

const App = () => {
  const [movieList, setMoiveList] = useState([]);

  const getData = async () => {
    try {
      // const { results: datas } = await fetch(
      //   "https://api.themoviedb.org/3/movie/popular?language=ko-KR",
      //   getFetchOption()
      // ).then((res) => res.json());
      const { results: datas } = movies;

      setMoiveList(datas);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {movieList.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </>
  );
};

export default App;
