import React from "react";
import Input from "./Input";

export default function Settings({ settings,formData }) {
const {theme} =  formData
console.log(theme);
  return (
    <>
      {settings.map((setting) => {
        return (
          <Input
            key={setting.id}
            id={setting.id}
            type={setting.type}
            label={setting.label}
            checked={theme === (setting.label).toLowerCase()}
          />
        );
      })}
    </>
  );
}
