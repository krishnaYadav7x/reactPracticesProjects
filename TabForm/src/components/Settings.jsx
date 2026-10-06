import React from "react";
import Input from "./Input";

export default function Settings({ settings, formData, setFormData }) {
  let { theme } = formData;
  
  const handleSettings = (label) => {
    setFormData((prev)=>{
      return {...prev,theme:label}
    })
  };
  return (
    <>
      {settings.map((setting) => {
        return (
          <Input
            key={setting.id}
            id={setting.id}
            type={setting.type}
            label={setting.label}
            checked={theme === setting.label}
            onChange={() => handleSettings(setting.label)}
          />
        );
      })}
    </>
  );
}
