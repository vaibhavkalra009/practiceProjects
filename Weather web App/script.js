const apiKey = "b7c97b0b6cd4ae5910fa3582db3105e1";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const max = document.querySelector(".max");
const min = document.querySelector(".min");
const humi = document.querySelector(".humi");
const visibility = document.querySelector(".visibility");
const wind = document.querySelector(".wind");
const temp = document.querySelector(".temp");
const searchBtn = document.querySelector(".search-icon");
const cityName = document.querySelector(".city-name");
const searchText = document.querySelector(".search-text");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);
  max.innerHTML = Math.round(data.main.temp_max) + "°C" + `<img src="" alt="">`;
  min.innerHTML = Math.round(data.main.temp_min) + "°C";
  humi.innerHTML = Math.round(data.main.humidity) + "%";
  visibility.innerHTML = Math.round(data.visibility) + "%";
  wind.innerHTML = Math.round(data.wind.speed) + "km/h";

  temp.innerHTML = Math.round(data.main.temp) + "°";
  cityName.innerHTML = data.name;
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchText.value);
  searchText.value = "";
});
