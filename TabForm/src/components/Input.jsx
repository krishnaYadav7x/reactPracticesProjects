import React from "react";

export default function Input({
  label,
  onChange = () => {},
  type,
  placeholder,
  id,
  labelPosition = "after",
  name,
  value,
  checked
}) {
  return (
    <div>
      {labelPosition === "before" && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        value={value}
        checked={checked}
      />
      {labelPosition === "after" && <label htmlFor={id}>{label}</label>}
    </div>
  );
}
