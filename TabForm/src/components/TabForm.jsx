import React, { useState } from "react";
import Tablist from "./Tablist";
import { tabs } from "../constants";
import Button from "./Button";

const fields = [
  {
    id: 1,
    type: "text",
    placeholder: "enter your name",
    label: "Name",
    name: "name",
  },
  {
    id: 2,
    type: "number",
    placeholder: "enter your number",
    label: "Number",
    name: "number",
  },
  {
    id: 3,
    type: "email",
    placeholder: "enter your email",
    label: "Email",
    name: "email",
  },
  {
    id: 4,
    type: "password",
    placeholder: "enter your password",
    label: "Password",
    name: "password",
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
  const [formData, setFormData] = useState({
    Profile: {
      name: "",
      number: "",
      email: "",
      password: "",
    },
    interestsData: [],
    theme: "",
    about: "",
  });
  const handleSubmit = () => {
    console.log(formData);
  };

  const [errors, setErrors] = useState({});
  const validationConfig = {
    Profile: {
      name: [{ required: true, message: "Please enter your name" }],
      number: [{ required: true, message: "Please enter your number" }],
      email: [{ required: true, message: "Please enter your email" }],
      password: [{ required: true, message: "Please enter your password" }],
    },
    interestsData: [{ minLength: 1, message: "Please select any interest" }],
    theme: [{ required: true, message: "Please select theme" }],
    about: [{ required: true, message: "Describe something about yourself" }],
  };

  const validate = () => {
    const errorsData = {};
    Object.keys(formData).forEach((el) => {
      if (el === "Profile") {
        errorsData[el] = {};
        Object.keys(formData[el]).forEach((e) => {
          validationConfig[el][e].forEach((rule) => {
            if (rule.required && !formData[el][e]) {
              errorsData[el][e] = rule.message;
            }
          })
        })
      } else {
        validationConfig[el].forEach((rule) => {
          if (rule.required && !formData[el]) {
            errorsData[el] = rule.message;
          }
        });
      }
    });
    return errorsData;
  };

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="tabForm-parent">
      <Tablist validate={validate} setActiveTabIndex={setActiveTabIndex} />
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
          <Button
            label={"Submit"}
            onClick={handleSubmit}
            className="submit-btn"
          />
        )}
      </div>
    </div>
  );
}
