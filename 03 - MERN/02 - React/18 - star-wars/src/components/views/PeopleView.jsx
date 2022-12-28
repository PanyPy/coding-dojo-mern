import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import PlanetView from "./PlanetView";
import { buildLink } from "../../helper";

const PeopleView = props => {
  // attributes to render
  const {
    birth_year, eye_color, gender, 
    skin_color, name, homeworld,
    hair_color, height, mass,
    starships, vehicles, species, films
  } = props.result;

  // Load world or ERROR
  const [planet, setPlanet] = useState(null);
  useEffect(() => {
    axios.get(homeworld)
    .then(response => setPlanet(response.data))
    .catch(() => console.log("ERROR"))
  }, [homeworld]);

  // get links to render
  const starshipLinks = starships.length > 0 && <> {starships.map(starship => buildLink("starships", starship, "Starship"))}<br></br> </>;
  const vehicleLinks = vehicles.length > 0 && <> {vehicles.map(vehicle => (buildLink("vehicles", vehicle, "Vehicle")))}<br></br> </>;
  const specieLinks = species.length > 0 && <> {species.map(specie => (buildLink("species", specie, "Specie")))}<br></br> </>;
  const filmLinks = films.length > 0 && <> {films.map(film => (buildLink("films", film, "Film")))}<br></br> </>;

	return (
    <div className="row">
      <h2>People</h2>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title"><i>name:</i> {name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><i>birth year: </i>{birth_year}</li>
          <li className="list-group-item"><i>eye color: </i>{eye_color}</li>
          <li className="list-group-item"><i>gender: </i>{gender}</li>
          <li className="list-group-item"><i>hair color: </i>{hair_color}</li>
          <li className="list-group-item"><i>height: </i>{height}</li>
          <li className="list-group-item"><i>mass: </i>{mass}</li>
          <li className="list-group-item"><i>skin_color: </i>{skin_color}</li>
        </ul>
        <div className="card-body">
          <i>click to view in a new tab</i><br></br>
          {starshipLinks}
          {vehicleLinks}
          {specieLinks}
          {filmLinks}
        </div>
      </div>

      <h4>Homeworld</h4>
        {planet && <PlanetView result={planet} />}
    </div>
	)
}

export default PeopleView;