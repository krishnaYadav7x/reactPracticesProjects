import React from 'react'
import './style.css'
export default function Button({label='',onClick=()=>{},disabled}) {
  return (
    <button onClick={onClick} disabled={disabled}>{label}</button>
  )
}
