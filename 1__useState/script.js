//document
// It allows JavaScript to access and manipulate HTML elements, content, attributes, and styles.

const num1 = document.getElementById('input1')
const num2 = document.getElementById('input2')
const btn = document.querySelector('button')
const result = document.querySelector("span");




function useState(value) {
  let val = value;
  function setValue(newVal) {
    val  = newVal
    result.innerText  = val
  }
  return { val, setValue };
}

const obj = useState(0)
const {val,setValue} = obj

btn.addEventListener('click',()=>{
  const res = Number(num1.value) + Number(num2.value)
  setValue(res)
})















