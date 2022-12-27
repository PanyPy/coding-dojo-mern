import React from "react";

const SpecieView = props => {
  const {
    name, classification, average_lifespan, average_height, designation, eye_colors, hair_colors, language
    // films, homeworld
    // birth_year, eye_color, gender, hair_color, height, mass, skin_color, name, 
    // homeworld, films, starships, vehicles, species
  } = props.result;

  console.log(props.result);
  return (
    <div className="card">
      {/* <img src="..." className="card-img-top" alt="..."/> */}
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><i>(classification) </i>{classification}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><i>designation: </i>{designation}</li>
        <li className="list-group-item"><i>language: </i>{language}</li>
        <li className="list-group-item"><i>eye colors: </i>{eye_colors}</li>
        <li className="list-group-item"><i>hair colors: </i>{hair_colors}</li>
        <li className="list-group-item"><i>average height: </i>{average_height}</li>
        <li className="list-group-item"><i>average lifespan: </i>{average_lifespan}</li>
      </ul>
    </div>
	)
}

export default SpecieView;