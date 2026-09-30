import React from 'react'

export default function Button({className,label,onClick=()=>{},style}) {
  console.log(style);
  return (
    <button style={style} className={className} onClick={onClick}>{label}</button>
  )
}
