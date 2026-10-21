import React from 'react'
import Tag from '../components/Tag'
import Text from '../components/Text'
import './style.css'
export default function Score({score}) {
  return (
    <div className='score'>
      <Tag label={'score'}/>
      <Text label={score}/>
    </div>
  )
}
