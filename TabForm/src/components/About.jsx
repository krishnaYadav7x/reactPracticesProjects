

export default function About({formData,setFormData}) {
  const {about} = formData
 const handleAbout = (e)=>{
  setFormData((prev)=>{
    return {...prev,about:e.target.value}
  })
 }
  return (
    <div className="about-container">
      <label htmlFor="about">About yourself</label>
      <textarea id="about" placeholder="Tell us about yourself" value={about} onChange={handleAbout}></textarea>
    </div>
  );
}
