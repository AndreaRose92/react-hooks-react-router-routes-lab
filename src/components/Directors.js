import React from "react";
import { directors } from "../data";

function Directors() {

  const displayDirectors = directors.map(director => 
    <div key={director.name} >
      <h2>{director.name}</h2>
      <ul>{director.movies.map(movie => <li key={Math.random()*123487612348761}>{movie}</li>)}</ul>
    </div>
  )

  return (
    <div>
      <h1>Directors Page</h1>
      {displayDirectors}
    </div>
  )

}

export default Directors;
