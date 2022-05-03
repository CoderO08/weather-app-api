


const api = {
  key :"57529d043be44b81eddb377920fcd5bf",
  baseurl:`https://api.openweathermap.org/data/2.5/`,
};

// console.log(api.baseurl)

const searchBox = document.querySelector('.search-box');

searchBox.addEventListener('keypress', (e)=>{
  if(e.keyCode === 13){

    getResult(searchBox.value)
    console.log(searchBox.value)
  }

});

function getResult(queri) {
  fetch(`${api.baseurl}weather?q=${queri}&appid=${api.key}`)
  .then((weather)=>{
    return weather.json();
  })
  .then(displayResult);
 
}
function displayResult(weather) {
  console.log(weather);

  // city show
  const city = document.querySelector('.location .city');
   city.innerHTML = `${weather.name}, ${weather.sys.country}`;

   // year,month,week and date show
  const date = document.querySelector(".location .date");
  let weekDay = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      monthName = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aust','Sep','Oct','Nov','Decem'];

      let nowDate = new Date();
      let day = nowDate.getDate();
      let year = nowDate.getFullYear();
      let month = nowDate.getMonth();
      let week = nowDate.getDay();

      const getFullDates = `${weekDay[week]} ${day} ${monthName[month]} ${year}`;

      date.innerHTML = getFullDates;
  
    // gradus show

  const gradus = document.querySelector('.main-temp .temp');
    let nowGradus = weather.main.temp.toString().slice(0,2);
  // gradus.innerHTML = `${Math.round(weather.main.temp)}°C`;
  gradus.innerHTML = `${nowGradus}°C`;

  const averageGradus = document.querySelector('.main-temp .hi-low')
  let bottomGradus = weather.main.temp_min.toString().slice(0,2);
  let topGradus = weather.main.temp_max.toString().slice(0,2);

  averageGradus.innerHTML = `${bottomGradus}°C / ${topGradus}°C`; 

  const nowWeather = document.querySelector('.main-temp .weather');
  nowWeather.innerHTML = `${weather.weather[0].main}`;

} 

