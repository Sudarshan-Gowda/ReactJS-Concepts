import React, { Fragment, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchMoviesHandler() {
    setLoading(true);
    // const response = await fetch("https://swapi.py4e.com/api/films");
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();

    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        releaseDate: movieData.release_date,
        openingText: movieData.opening_crawl,
      };
    });

    setMovies(transformedMovies);
    setLoading(false);
  }

  return (
    <Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!loading && movies.length > 0 && <MoviesList movies={movies} />}
        {!loading && movies.length === 0 && <p>Found no movies</p>}
        {loading && <p>Loading...</p>}
      </section>
    </Fragment>
  );
}

export default App;
