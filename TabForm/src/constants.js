
import About from "./components/About";
import Interests from "./components/Interests";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

export const tabs = [
  {
    id:1,
    label:'Profile',
    Component : Profile
  },
  {
    id:2,
    label:'Interests',
    Component : Interests
  },
  {
    id:3,
    label:'About',
    Component : About
  },
  {
    id:4,
    label:'Settings',
    Component : Settings
  },
]
