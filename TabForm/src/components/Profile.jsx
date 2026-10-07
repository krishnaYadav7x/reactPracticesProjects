import Input from "./Input";

export default function Profile({ fields, formData, setFormData }) {
  const { Profile } = formData;
  const handleChange = (e, name) => {
    setFormData((prev) => {
      return { ...prev, Profile: { ...prev.Profile, [name]: e.target.value } };
    });
  };
  return (
    <>
      {fields.map((field,i) => {
        return (
          <div key={i} className="input-container">
            <Input
              labelPosition="before"
              key={field.id}
              id={field.id}
              type={field.type}
              label={field.label}
              name={field.name}
              value={Profile[field.name]}
              placeholder={field.placeholder}
              onChange={(e) => handleChange(e, field.name)}
            />
            {/* <p className="error">error</p> */}
          </div>
        );
      })}
    </>
  );
}
