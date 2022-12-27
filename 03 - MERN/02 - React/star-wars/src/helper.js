import { Link } from "react-router-dom";

export const ITEM_TYPES = {
  PEOPLE: "people",
  FILMS: "films",
  STARSHIPS: "starships",
  VEHICLES: "vehicles",
  SPECIES: "species",
  PLANETS: "planets",
};

export const buildLink = (index, path, id, name) => <div key={index} style={{display:"inline"}}><Link to={`/${path}${id.match(/.+(\/.+)$/)[1]}`} target="_blank">{name} {index}</Link> </div>;