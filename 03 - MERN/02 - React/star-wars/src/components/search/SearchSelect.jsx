import React from "react";
import { ITEM_TYPES } from "../../helper";

const SearchSelect = props => {

	return (
		<div className="col">
			<div className="input-group">
				<label className="input-group-text">Search for</label>
				<select disabled={props.disabled} className="form-select" ref={ props.selectRef }>
					<option value={ITEM_TYPES.PEOPLE}>🥷 People</option>
					<option value={ITEM_TYPES.FILMS}>🎥 Films</option>
					<option value={ITEM_TYPES.STARSHIPS}>🚀 Starships</option>
					<option value={ITEM_TYPES.VEHICLES}>🚘 Vehicles</option>
					<option value={ITEM_TYPES.SPECIES}>🤖 Species</option>
					<option value={ITEM_TYPES.PLANETS}>🪐 Planets</option>
				</select>
			</div>
		</div>
	)
}

export default SearchSelect;