const key ='AN7NNVHSoQOPFlSlebClkoyy9jPLKfkm'
//getCity Info
const getCity= async(city) =>{
  const baseUrl='http://dataservice.accuweather.com/locations/v1/cities/search'
  const query=`?apikey=${key}&q=${city}`

const responde = await fetch(baseUrl + query)
const data =await responde.json()
return data[0]
} 

//Get weather info
const getWeather =async (id)=>{
  const baseUrl='http://dataservice.accuweather.com/currentconditions/v1/'
  const query=`${id}?apikey=${key}`
  const responde= await fetch(baseUrl + query)
  const data = await responde.json()
  return data[0]
}

/*getCity('cairo').then(data=>{
  return getWeather(data.Key)}).then(data=>console.log(data))
  .catch(err=>console.log(err))*/