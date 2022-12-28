import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';

import SearchID from "./search/SearchID";
import SearchSelect from "./search/SearchSelect";
import SearchResult from "./search/SearchResult";
import Loading from "./Loading";
import { ITEM_TYPES } from "../helper";

const SearchList = props => {
  let route, id;
  if(props.match){
    route = props.match.params.route;
    id = props.match.params.id;
  }

  const [isLoading, setIsLoading ] = useState(false);
  const [result, setResult ] = useState(null);
  const selectRef = useRef(route || "people");
  const idRef = useRef(id || "");

  const onSearch = () => {
    if(idRef.current.value.trim() === "") {
      setResult(null);
      return;
    }

    setIsLoading(true);
    axios.get(`https://swapi.dev/api/${selectRef.current.value}/${idRef.current.value}`)
      .then(response => setResult(response.data))
      .catch(() => setResult("ERROR"))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    if(route && route !== "" && id && id !== "") {
      selectRef.current.value = route;
      idRef.current.value = id;

      if(!Object.values(ITEM_TYPES).includes(route)) {
        setResult("ERROR");
        alert("Invalid Reouces, try one of these: " + Object.values(ITEM_TYPES).join(", "));
      } else {
        onSearch();
      }
    }
  }, [id, route]);

  return (
    <div className="container">
      <div className="row mt-3 mb-3">
        <SearchSelect disabled={isLoading || route} selectRef={selectRef} />
        <SearchID disabled={isLoading || id} idRef={idRef} onSearch= { onSearch } />
      </div>

      {(isLoading && Loading) || (idRef.current.value?.trim() !== "" && <SearchResult resultType={selectRef.current.value} result={result} id={idRef.current.value} />)}
    </div>
  )
}
export default SearchList;