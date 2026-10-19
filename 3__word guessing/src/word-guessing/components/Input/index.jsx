import './style.css'

export default function Input({value }) {
  function onInput() {}
  return <input type="text" value={value} onInput={onInput}/>
}
