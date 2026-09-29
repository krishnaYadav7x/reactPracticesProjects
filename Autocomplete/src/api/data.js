export  async function getData ({query}){

  const req = fetch(`https://dummyjson.com/recipes/search?q=${query}&limit=50`);
  const jsonData = await req
  
  return jsonData
}
