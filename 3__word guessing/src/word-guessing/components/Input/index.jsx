import './style.css'

export default function Input({ value, handleInputValue,onFocus }) {
  function handleInput(e) {

      handleInputValue(e.target.value)
    
  }
 
  return (
    <input
      type="text"
      value={value}
      onInput={handleInput}
      onFocus={onFocus}
    />
  );
}
