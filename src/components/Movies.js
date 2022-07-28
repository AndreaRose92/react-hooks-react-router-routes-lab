import React from "react";
import { movies } from "../data";


function Movies() {

  const displayMovies = movies.map(movie => 
  <div key={movie.time} >
    <h1>{movie.title}</h1>
    <h2>{movie.time}</h2>
    <ul>{movie.genres.map(genre => <li key={Math.random()} >{genre}</li> )}</ul>
  </div>
  )

  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovies}
    </div>
  )
}

export default Movies;
