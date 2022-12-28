import React from "react";
import { buildLink } from "../../helper";

const FilmView = props => {
  const {
    title, director, opening_crawl, producer, release_date,
    characters, planets, species, starships, vehicles
  } = props.result;

  // get links to render
  const starshipLinks = starships.length > 0 && <> {starships.map(starship => buildLink("starships", starship, "Starship"))}<br></br> </>;
  const vehicleLinks = vehicles.length > 0 && <> {vehicles.map(vehicle => (buildLink("vehicles", vehicle, "Vehicle")))}<br></br> </>;
  const specieLinks = species.length > 0 && <> {species.map(specie => (buildLink("species", specie, "Specie")))}<br></br> </>;
  const planetLinks = planets.length > 0 && <> {planets.map(planet => (buildLink( "planets", planet, "Planet")))}<br></br> </>;
  const characterLinks = characters.length > 0 && <> {characters.map(character => (buildLink("people", character, "Character")))}<br></br> </>;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{opening_crawl}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><i>director: </i>{director}</li>
        <li className="list-group-item"><i>producer: </i>{producer}</li>
        <li className="list-group-item"><i>Release Date: </i>{release_date}</li>
      </ul>
      <div className="card-body">
        <i>click to view in a new tab</i><br></br>
        {starshipLinks && (<>related starships: {starshipLinks}</>)}
        {vehicleLinks && (<>related vehicles: {vehicleLinks}</>)}
        {specieLinks && (<>related species: {specieLinks}</>)}
        {planetLinks && (<>related planets: {planetLinks}</>)}
        {characterLinks && (<>related characters: {characterLinks}</>)}
      </div>
    </div>
	)
}

export default FilmView;