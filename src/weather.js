let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

//let searchInput = document.querySelector("#search-text-input");
//let h5 = document.querySelector("h5");
//if (searchInput.value) {
// h5.innerHTML = `${searchInput.value}`;
// } else {
//  h5.innerHTML = null;
// alert("Please type a city");
//}
//}
//make an API call to OpenWeather API
//Once I get the HTTP response, we display the city name and the temperature
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let currentDay = document.querySelector(".currentDay");
currentDay.innerHTML = `${day} ${hours}:${minutes}`;

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#Humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#Wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function search(event) {
  event.preventDefault();
  let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
  let city = document.querySelector("#search-text-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function fahrenheit(event) {
  let currentTemperature = document.querySelector("#current-temperature");
  event.preventDefault();
  currentTemperature.innerHTML = 66;
}
let celsiuslink = document.querySelector("#fahrenheit");
celsiuslink.addEventListener("click", fahrenheit);

function celsius(event) {
  let currentTemperature = document.querySelector("#current-temperature");
  event.preventDefault();
  currentTemperature.innerHTML = 19;
}
let fahrenheitlink = document.querySelector("#celsius");
fahrenheitlink.addEventListener("click", celsius);
