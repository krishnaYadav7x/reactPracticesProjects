import { tabs } from "../constants";

export default function Tablist({ setActiveTabIndex, validate ,activeTabIndex}) {
let currentTabIndex = activeTabIndex

  const tabErrorMap = {
    Profile: "Profile",
    Interests: "interestsData",
    About: "about",
    Settings: "theme",
  };
  const changeTab = (i,t) => {
    
    const errorsData = validate()
 
     
    const profileErrorsLength = Object.keys(errorsData.Profile ?? {});
    let errorsArray = Object.keys(errorsData)
    if(profileErrorsLength.length===0){
      errorsArray = errorsArray.filter((el)=>el!=='Profile')
    }
    console.log(errorsArray);
    console.log(tabErrorMap[tabs[i].label]);
    console.log(i);
    if(errorsArray.includes(tabErrorMap[tabs[currentTabIndex].label])) return
  
    setActiveTabIndex(i);
  };

  return (
    <div className="tablists">
      {tabs.map((t, i) => {
        return (
          <button
            className="tablist-btn"
            onClick={() => changeTab(i,t)}
            key={t.id}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
