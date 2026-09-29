export  async function getData (){
  const req = fetch("https://dummyjson.com/recipes?limit=500")
  const jsonData = await req
  
  return jsonData
}
