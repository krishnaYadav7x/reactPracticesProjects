import React, { useEffect, useState } from "react";
import Search from "./Search";
import Button from "./Button";
import Suggestions from "./Suggestions";
import {getData} from '../api/data'

export default function Autocomplete() {
  const [suggestions,setSuggestions] = useState([])
  const [query,setQuery] = useState('')
  const [showList,setShowList] = useState(false)


  
  useEffect(()=>{
    const getApiData = async()=> {
      const {recipes} = await((await getData({query})).json())
      setSuggestions(recipes);
      console.log(recipes);
      
    }
    getApiData()
  },[query])
  
  return (
    <main>
      <div className="search-control">
        <Search setQuery={setQuery} query={query} setShowList={setShowList} />
        <Button
          className="clear-search"
          label={"Clear"}
          onClick={() => setQuery("")}
        />
      </div>
      
        <Suggestions
        suggestions={suggestions}
        query={query}
        setQuery={setQuery}
        showList={showList}
        setShowList={setShowList}
      />
      
    </main>
  );
}
