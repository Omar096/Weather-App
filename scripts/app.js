const CityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time =document.querySelector("img.time")
const icon =document.querySelector(".logo img")

CityForm.addEventListener('submit',(e)=>{
  //not refresh the page
  e.preventDefault()
  //get the city name
  let city =CityForm.City.value.trim()
  let NewData=localStorage.setItem('City',city)
  CityForm.reset()
  // upadting the ui
  updateCity(city)
  .then(data=>updatingUI(data))
  .catch(err=>console.log("No city like this"))



})
const updateCity =async (city)=>{
  const cityDet= await getCity(city)
  const weather= await getWeather(cityDet.Key)
// object short hand notation when the obj and value are the same
  return {cityDet,weather}
}

const updatingUI = (data) =>{
  // const cityDet= data.cityDet
  // const weather= data.weather
  //destructing 
  const {cityDet,weather}=data
  //updating icon and imgs
  let timeSrc=null
  if(weather.IsDayTime){
    timeSrc='img/day.svg'
  }
  else{
    timeSrc='img/night.svg'
  }
  time.setAttribute('src',timeSrc)

  let iconSrc=`img/icons/${weather.WeatherIcon}.svg`
  icon.setAttribute('src',iconSrc)

  //upadting details
  details.innerHTML=`
  <h5 class="city-name my-4"> ${cityDet.EnglishName}</h5>
  <div class="weather-cond my-4"> ${weather.WeatherText}</div>
  <div class="display-4 my-4">
      <span> ${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
  </div>
  
  `;
  if(card.classList.contains('d-none'))
  {
    card.classList.remove('d-none')
  }
}