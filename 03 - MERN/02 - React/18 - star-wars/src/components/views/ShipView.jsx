import React from "react";
import { buildLink } from "../../helper";

const ShipView = props => {
  const {
    name, model, cost_in_credits, consumables, cargo_capacity, crew, 
    manufacturer, passengers, starship_class,
    films, pilots
  } = props.result;

  const filmLinks = films.length > 0 && <> {films.map(film => (buildLink("films", film, "Film")))}<br></br> </>;
  const pilotsLinks = pilots.length > 0 && <> {pilots.map(pilot => (buildLink("people", pilot, "Pilot")))}<br></br> </>;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><i>(class)</i> {starship_class} <i>(model)</i> {model}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><i>cost in credits: </i>{cost_in_credits}</li>
        <li className="list-group-item"><i>cargo_capacity: </i>{cargo_capacity}</li>
        <li className="list-group-item"><i>consumables: </i>{consumables}</li>
        <li className="list-group-item"><i>crew: </i>{crew}</li>
        <li className="list-group-item"><i>manufacturer: </i>{manufacturer}</li>
        <li className="list-group-item"><i>passengers: </i>{passengers}</li>
      </ul>
      <div className="card-body">
        <i>click to view in a new tab</i><br></br>
        {filmLinks}
        {pilotsLinks}
      </div>
    </div>
	)
}

export default ShipView;