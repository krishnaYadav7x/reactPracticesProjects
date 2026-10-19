import React from 'react'
import Tag from '../components/Tag'
import Text from '../components/Text'

export default function Score({score='0'}) {
  return (
    <div>
      <Tag label={'score'}/>
      <Text score={score}/>
    </div>
  )
}
