import React from "react";
import { buildLink } from "../../helper";

const PlanetView = props => {
  const {
    name, climate, diameter, gravity, orbital_period, population, 
    rotation_period, surface_water, terrain,
    films, residents
  } = props.result;

  // get links to render
  const filmLinks = films.length > 0 && <> {films.map(film => buildLink("films", film, "Film"))}<br></br> </>;
  const residentLinks = residents.length > 0 && <> {residents.map(resident => (buildLink("people", resident, "Resident")))}<br></br> </>;
  

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><i>(terrain)</i> {terrain}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><i>climate: </i>{climate}</li>
        <li className="list-group-item"><i>diameter: </i>{diameter}</li>
        <li className="list-group-item"><i>gravity: </i>{gravity}</li>
        <li className="list-group-item"><i>population: </i>{population}</li>
        <li className="list-group-item"><i>orbital preiod: </i>{orbital_period}</li>
        <li className="list-group-item"><i>surface water: </i>{surface_water}</li>
        <li className="list-group-item"><i>rotation period: </i>{rotation_period}</li>
      </ul>
      <div className="card-body">
          <i>click to view in a new tab</i><br></br>
          {filmLinks && (<><>related films:</> {filmLinks}</>)}
          {residentLinks && (<><>related resident:</> {residentLinks}</>)}
        </div>
    </div>
	)
}

export default PlanetView;