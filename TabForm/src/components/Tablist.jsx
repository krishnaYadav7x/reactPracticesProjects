import React from 'react'
import { tabs } from '../constants'

export default function Tablist({ setActiveTabIndex ,validate}) {

  const changeTab = (i) => {
    //here validation
    console.log(validate());
    
    setActiveTabIndex(i)
  };

  return (
    <div className="tablists">
      {tabs.map((t, i) => {
        return (
          <button className='tablist-btn' onClick={() => changeTab(i)} key={t.id}>
            {t.label}
          </button>
        )
      })}
    </div>
  );
}
