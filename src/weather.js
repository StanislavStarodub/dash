const weatherContainer = document.querySelector('.js-weather');
const COORDS_LS = 'coords';
const API_KEY = '4e5c547e410239389dbe74ded387efc7';

function saveCoords(positionObj) {
  localStorage.setItem(COORDS_LS, JSON.stringify(positionObj))
}

function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      const pressure = Math.floor(json.main.pressure * 0.75006);
      console.log(json);
      weatherContainer.innerHTML = `Now in ${json.name} outside the window is: ${json.main.temp} &#8451; <br> Humidity: ${json.main.humidity}; Pressure: ${pressure} <br> Sky: ${json.weather[0].description} <br>`})
}

function geoSuccessHandler(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const positionObj = {
    latitude,
    longitude
  }
  saveCoords(positionObj);
  getWeather(latitude, longitude)
}

function geoErrorHandler() {
  console.log('Geo Error');
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(geoSuccessHandler, geoErrorHandler)
}

function getCoords() {
  const coords = localStorage.getItem(COORDS_LS);
  if (coords === null) {
    askForCoords();
  }
  else {
    const loadedCoords = JSON.parse(coords);
    getWeather(loadedCoords.latitude, loadedCoords.longitude);
  }
}

function init() {
  getCoords();
}

init();