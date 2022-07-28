import React from "react";
import { actors } from "../data";

function Actors() {

  const displayActors = actors.map(actor => 
    <div key={actor.name} >
      <h2>{actor.name}</h2>
      <ul>{actor.movies.map(movie => <li key={Math.random()*123498765} >{movie}</li>)}</ul>
    </div>
  )

  return (
    <div>
      <h1>Actors Page</h1>
      {displayActors}
    </div>
  )

}

export default Actors;
