import React from "react";

export default function Search({ setQuery, query ,setShowList}) {
  
  const handleChange = (e)=>{
    setQuery(e.target.value)
    setShowList(true)
  }
  return (
    <input
      type="text"
      name="text"
      id="text"
      value={query}
      onChange={handleChange}
    />
  );
}
