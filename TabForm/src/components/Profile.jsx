import Input from "./Input";

export default function Profile({ fields,formData }) {
  const {Profile} = formData

  
  return (
    <>
      {fields.map((field) => {
     
        return (
          <Input
            labelPosition="before"
            key={field.id}
            id={field.id}
            type={field.type}
            label={field.label}
            name = {field.name}
            value = {Profile[field.name]}
            placeholder={field.placeholder}
          />
        );
      })}
    </>
  );
}
