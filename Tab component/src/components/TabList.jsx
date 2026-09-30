import { useState } from "react"
import Button from "./Button"


export default function TabList({tabs}) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  const handleTabChange = (index)=>{
    setSelectedTabIndex(index)
    console.log(index);
  }

  return (
    <div className="tablist-container">
      <div className="tab-container">
        {tabs.map((t, i) => {
          return (
            <Button
              className="tab-btn"
              style={{
                backgroundColor: i === selectedTabIndex ? "skyblue" : "transparent",
                border: i === selectedTabIndex ? "1px solid green" : "none",
              }}
              label={t.label}
              key={t.id}
              onClick={() => handleTabChange(i)}
            />
          );
        })}
      </div>
      {tabs.map((t, i) => {
       return  i === selectedTabIndex&&<t.Component key={t.id}/>
      })}
    </div>
  );
}
