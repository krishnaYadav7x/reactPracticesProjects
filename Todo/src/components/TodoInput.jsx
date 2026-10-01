export default function TodoInput({ value, onChange }) {
  const handleChange = (e) => {
    
    onChange(e.target.value);
  };

  return <input type="text" placeholder="enter task" onChange={handleChange} value={value}/>;
}
