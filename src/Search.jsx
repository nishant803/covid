import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const inputEvent = (event) => {
    const data = event.target.value;
    setSearch(data);
    console.log(data);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={inputEvent}
      />
    </div>
  );
}

export default Search;
