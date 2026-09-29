import React, { useEffect, useState } from "react";
import Search from "./Search";
import Button from "./Button";
import Suggestions from "./Suggestions";
import {getData} from '../api/data'

export default function Autocomplete() {
  
  useEffect(()=>{
    const getApiData = async()=> {
      const data = await((await getData()).json())
      console.log(data);
    }
    getApiData()
  },[])
  
  return (
    <main>
      <div className="search-control">
        <Search />
        <Button className='clear-search' label={'Clear'} />
      </div>
      <Suggestions />
    </main>
  );
}
