
import Input from './Input'

export default function Interests({ interests, formData, setFormData }) {
  let { interestsData } = formData;
  
  const handleInterest = (label) => {
    setFormData((prev)=>{
      
      if(interestsData.includes(label)){
        interestsData=interestsData.filter((el)=>el!==label)
      }else{
        interestsData.push(label)
      }
      return {...prev,interestsData}
    })
  }
  return (
    <>
      {interests.map((interest) => {
        return (
          <Input
            labelPosition="after"
            key={interest.id}
            id={interest.id}
            type={interest.type}
            label={interest.label}
            checked={interestsData.includes(interest.label)}
            onChange={() => handleInterest(interest.label)}
          />
        );
      })}
    </>
  );
}
