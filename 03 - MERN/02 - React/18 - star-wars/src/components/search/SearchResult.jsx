import React from "react";
import { ITEM_TYPES } from "../../helper";
import FilmView from "../views/FilmView";
import PeopleView from "../views/PeopleView";
import PlanetView from "../views/PlanetView";
import ShipView from "../views/ShipView";
import SpecieView from "../views/SpecieView";

const SearchResult = props => {
  // if there is an ERROR, show Obi Wan Kenobi
  if(props.result === "ERROR") {
    return (
      <div className="d-flex align-items-center flex-column bd-highlight mb-3">
        <div><p>These aren't the droids you're looking for.</p></div>
        <div><img src={require("../../img/obi-wan-kenobi.jpg")} height={200} alt="not found" /></div>
      </div>
    )
  }

  switch(props.resultType) {
    case ITEM_TYPES.PEOPLE:
      return <PeopleView result={props.result} id={props.id} />;
    case ITEM_TYPES.FILMS:
      return <FilmView result={props.result} />;
    case ITEM_TYPES.STARSHIPS:
    case ITEM_TYPES.VEHICLES:
      return <ShipView result={props.result} />;
    case ITEM_TYPES.SPECIES:
      return <SpecieView result={props.result} />;
    case ITEM_TYPES.PLANETS:
      return <PlanetView result={props.result} />;
    default:
      return <></>;
  }
}

export default SearchResult;
