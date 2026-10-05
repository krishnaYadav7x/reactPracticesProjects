import React from 'react'
import { tabs } from '../constants'

export default function Tablist({ setActiveTabIndex }) {
  return (
    <div className="tablists">
      {tabs.map((t, i) => {
        return (
          <button onClick={() => setActiveTabIndex(i)} key={t.id}>
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
