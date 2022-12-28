import React from "react";
import { buildLink } from "../../helper";

const SpecieView = props => {
  const {
    name, classification, average_lifespan, average_height, 
    designation, eye_colors, hair_colors, language,
    films, people
  } = props.result;

  const filmLinks = films.length > 0 && <> {films.map(film => (buildLink("films", film, "Film")))}<br></br> </>;
  const peopleLinks = people.length > 0 && <> {people.map(p => (buildLink("people", p, "People")))}<br></br> </>;

  return (
    <div className="card">
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
      <div className="card-body">
        <i>click to view in a new tab</i><br></br>
        {peopleLinks}
        {filmLinks}
      </div>
    </div>
	)
}

export default SpecieView;