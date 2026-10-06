import React, { useState } from "react";
import Tablist from "./Tablist";
import { tabs } from "../constants";



const fields = [
  {
    id: 1,
    type: "text",
    placeholder: "enter your name",
    label: "Name",
    name: 'name'
  },
  {
    id: 2,
    type: "number",
    placeholder: "enter your number",
    label: "Number",
    name: 'number'
  },
  {
    id: 3,
    type: "email",
    placeholder: "enter your email",
    label: "Email",
    name: 'email'
  },
  {
    id: 4,
    type: "password",
    placeholder: "enter your password",
    label: "Password",
    name: 'password'
  },
];
const interests = [
  {
    id: 1,
    type: "checkbox",

    label: "coding",
  },
  {
    id: 2,
    type: "checkbox",

    label: "running",
  },
  {
    id: 3,
    type: "checkbox",

    label: "cricket",
  },
  {
    id: 4,
    type: "checkbox",

    label: "working",
  },
];
const settings = [
  {
    id: 1,
    type: "radio",

    label: "Light",
  },
  {
    id: 2,
    type: "radio",

    label: "Dark",
  },
];

export default function TabForm() {
  const [formData, setFormData] = useState(
    {
      Profile: {
        name: "",
        number: "",
        email: "",
        password: "",
      },
      interestsData:['',''],
      theme:'',
      about:''
    },
  ); 
  console.log(formData);
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  return (
    <div className="tabForm-parent">
      <Tablist setActiveTabIndex={setActiveTabIndex} />
      <div className="tab-form">
        {tabs.map((t, i) => {
          return (
            activeTabIndex === i && (
              <t.Component
                formData={formData}
                setFormData={setFormData}
                key={t.id}
                fields={fields}
                interests={interests}
                settings={settings}
              />
            )
          );
        })}
        {activeTabIndex === tabs.length - 1 && (
          <button className="submit-btn">Submit</button>
        )}
      </div>
    </div>
  );
}
