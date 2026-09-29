import React from "react";
import Button from "./Button";

export default function Suggestions({
  suggestions,
  query,
  setShowList,
  setQuery,
  showList,
}) {
  const onListSelect = (listName) => {
    setQuery(listName);
    setShowList(false);
  };

  const filteredData = suggestions.filter((s, i) => {
    return s.name.toLowerCase().includes(query.toLowerCase());
  });
  return (
    <div className="suggestion-container">
      {query &&
        showList &&
        filteredData.map((s, i) => {
          return (
            <Button
              key={s.id}
              label={s.name}
              onClick={() => onListSelect(s.name)}
            />
          );
        })}
    </div>
  );
}
