const forecast = [
  {id:1, min: 18, max: 24},
  {id:2, min: 19, max: 27},
  {id:3, min: 16, max: 21},
  {id:4, min: 21, max: 26}
];

const loadCity = (currentElement) => {
  alert("Loading weather report...");
  const newCity = currentElement.innerHTML;
  currentElement.innerHTML = document.querySelector("#current_city").innerHTML;
  document.querySelector("#current_city").innerHTML = newCity;
}

const hideCookieAgreement = () => {
  document.querySelector("#cookie_agreement").style = "display: none";
}

const formatUnit = (degree) => {
  const currentUnit = document.querySelector("#weather_unit").value;

  if(currentUnit == "C") return degree;
  return (degree* 9/5) + 32;
}

const updateWeather = () => {
  // update max temperatures
  document.querySelectorAll(".max-temperature")
    .forEach((element, index) => element.innerHTML = formatUnit(forecast[index].max)+"°");
  // update min temperatures
  document.querySelectorAll(".min-temperature")
    .forEach((element, index) => element.innerHTML = formatUnit(forecast[index].min)+"°");
}

updateWeather();