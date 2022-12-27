import React from "react";

const ShipView = props => {
  const {
    name, model, cost_in_credits, consumables, cargo_capacity, crew, manufacturer, passengers, starship_class
    // films, pilots optional
  } = props.result;

  console.log(props.result);
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
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    </div>
	)
}

export default ShipView;