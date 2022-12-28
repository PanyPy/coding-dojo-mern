import { Link } from "react-router-dom";

export const ITEM_TYPES = {
  PEOPLE: "people",
  FILMS: "films",
  STARSHIPS: "starships",
  VEHICLES: "vehicles",
  SPECIES: "species",
  PLANETS: "planets",
};

export const buildLink = 
(path, id, name) => {
    const extractedId = id.match(/.+(\/.+)$/)[1];
    return (<div key={id} style={{display:"inline", marginLeft:"5px"}}>
      <Link to={`/${path}${extractedId}`} target="_blank">{name} {extractedId.replace("/", "").replace("/", " ") }</Link>
    </div>)
  };