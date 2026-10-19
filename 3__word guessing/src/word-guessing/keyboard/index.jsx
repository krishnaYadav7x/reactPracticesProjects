
import Button from '../components/Button'
import './style.css'
export default function Keyboard({keyboardLetterLength ,handleKeyboard=()=>{}}) {
  function handleClick(i){
    return ()=>{
      handleKeyboard(String.fromCharCode(65 + i));
    }
  }
  return <div>
    {
      keyboardLetterLength.map((_,i)=>{
        return (
          <Button
            onClick={handleClick(i)}
            key={i}
            label={String.fromCharCode(65 + i)}
          />
        );
      })
    }
  </div>
}
