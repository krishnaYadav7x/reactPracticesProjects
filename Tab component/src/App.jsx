import { useState } from "react";

import "./App.css";
import TabList from "./components/TabList";
import { tabs } from "./constant.js";

function App() {
  return <TabList tabs={tabs} />;
}

export default App;
