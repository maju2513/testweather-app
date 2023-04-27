function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature-main");
  temperatureElement.innerHTML = `${temperature}C`;
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
  let apiKey = "197ef3a642b76eef90e131866f74a0a0";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTemperature);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function showCity(response) {
  let cityButton = document.querySelector("#city");
  cityButton.innerHtml = `${response.data.name}`;
}

function showWeather(response) {
  //response.preventDefault();
  let buttonClick = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  buttonClick.innerHTML = `${temperature}°`;
}

function retrievePosition(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

function handleLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let buttonLink = document.querySelector("#button-current");
buttonLink.addEventListener("click", retrievePosition);
