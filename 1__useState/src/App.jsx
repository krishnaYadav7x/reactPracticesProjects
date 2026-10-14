import { useState, useRef } from "react";
// ref = React way of doing document.getElementById
//re render = call the component with updated value
// useState return arr bcz we can give customize names,destructure with any name no destructure problem

//component only call when state update with some new value
import "./App.css";

function App() {
  const[count,setCount]=useState(0)
  function handleIncrease  (){
    setCount(count+1)
  }
  function handleDecrease() {
    setCount(count - 1);
  }
  return (
    <div>
      <ActionButton label="+" onClick={handleIncrease} />
      <h1>{count}</h1>
      <ActionButton label="-" onClick={handleDecrease} />
    </div>
  );
}

function ActionButton({label='',onClick=()=>{}}){
  return <button onClick={onClick}>{label}</button>
}







function Sum(props) {
    const [result, setResult] = useState(0);
  const num1 = useRef();
  const num2 = useRef();

  function addMe() {
    const n1 = num1.current.value;
    const n2 = num2.current.value;
    let res = Number(n1)+Number(n2)
    setResult(res)
    
  }
  return (
    <div>
      <input ref={num1} type="text" />+
      <input ref={num2} type="text" />
      <button onClick={addMe}>Add</button>
      <div>
        Result: <span id="result">{result}</span>
      </div>
    </div>
  );
}

export default App;
