import React from 'react'
import Input from './Input'

export default function Interests({ interests ,formData}) {
  const { interestsData } = formData;
  console.log(interestsData);
  return <>
  {
    interests.map((interest)=>{
      return (
        <Input
          labelPosition="after"
          key={interest.id}
          id={interest.id}
          type={interest.type}
          label={interest.label}
          checked={interestsData.includes(interest.label)}
        />
      );
    })
  }
  </>
}
