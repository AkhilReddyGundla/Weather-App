const search = document.querySelector(".search-btn");
const temparature = document.querySelector(".current-temp");
const minTempField = document.querySelector('#minTemp');
const maxTempField = document.querySelector('#maxTemp')
const dayField = document.querySelector('.day');
const currentDayDescription = document.querySelector('.current-day');
const shortField = document.querySelector('.short-description');
const locationField = document.querySelector('.location');
const container = document.querySelector('.container');
const footer = document.querySelector('.footer-container')
let tempC = document.querySelector(".celsius");
const tempF = document.querySelector(".fahrenheit");
const date0 = document.querySelector(".date1");
const icon0 = document.querySelector(".icon1");
const weather0 = document.querySelector(".weather1");
const temp0 = document.querySelector(".day-temp1");

const date1 = document.querySelector(".date2");
const icon1 = document.querySelector(".icon2");
const weather1 = document.querySelector(".weather2");
const temp1 = document.querySelector(".day-temp2");

const date2 = document.querySelector(".date3");
const icon2 = document.querySelector(".icon3");
const weather2 = document.querySelector(".weather3");
const temp2 = document.querySelector(".day-temp3");

const date3 = document.querySelector(".date4");
const icon3 = document.querySelector(".icon4");
const weather3 = document.querySelector(".weather4");
const temp3 = document.querySelector(".day-temp4");

const date4 = document.querySelector(".date5");
const icon4 = document.querySelector(".icon5");
const weather4 = document.querySelector(".weather5");
const temp4 = document.querySelector(".day-temp5");

const date5 = document.querySelector(".date6");
const icon5 = document.querySelector(".icon6");
const weather5 = document.querySelector(".weather6");
const temp5 = document.querySelector(".day-temp6");

const date6 = document.querySelector(".date7");
const icon6 = document.querySelector(".icon7");
const weather6 = document.querySelector(".weather7");
const temp6 = document.querySelector(".day-temp7");

const date7 = document.querySelector(".date8");
const icon7 = document.querySelector(".icon8");
const weather7 = document.querySelector(".weather8");
const temp7 = document.querySelector(".day-temp8");

let tempValueField = document.querySelector(".temp-value");
let riseField = document.querySelector(".sunrise");
let setField = document.querySelector(".sunset");
let windNameField = document.querySelector(".wind-name");
let windValueField = document.querySelector(".wind-value");
let humidityValueField = document.querySelector(".humidity-value");
let pressureValueField = document.querySelector(".pressure-value");
let uvFieldValue = document.querySelector('.uv-value');
async function getdata(area) {
  container.style='display: block';
  footer.style='display: block';
  let url =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  url += `${area}?unitGroup=metric&include=current&key=UNV4XAT5M9HHZ9X24HRLUNZA9&contentType=json`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    temparature.innerHTML = result.days[0].temp;
    const temparatureValue = result.days[0].temp;
    locationField.innerHTML = area;
    tempF.addEventListener("click", () => {
      let tempInF = convertCF(temparatureValue);
      temparature.innerHTML = tempInF;
      tempF.style.fontWeight = "bold";
      tempC.style.fontWeight = "lighter";
      tempF.style.color = "black";
      tempC.style.color = "gray";
    });
    tempC.addEventListener("click", () => {
      temparature.innerHTML = temparatureValue;
      tempC.style.fontWeight = "bold";
      tempF.style.fontWeight = "lighter";
      tempC.style.color = "black";
      tempF.style.color = "gray";
    });
    const todayDay = getTodayDay()+' ';
    dayField.innerHTML=todayDay;
    currentDayDescription.innerHTML = result.days[0].description;
    shortField.innerHTML=result.days[0].conditions;

    date0.innerHTML = "today";
    const weatherCondition0 = result.days[0].icon;
    const weatherImg0 = document.createElement("img");
    weatherImg0.src = `images/${weatherCondition0}.png`;
    weatherImg0.style.height = "40px";
    icon0.innerHTML = "";
    icon0.appendChild(weatherImg0);
    weather0.innerHTML = result.days[0].conditions;
    temp0.innerHTML = `${result.days[0].tempmin}&deg / ${result.days[0].tempmax}&deg`;

    minTempField.innerHTML=result.days[0].tempmin+'&deg';
    maxTempField.innerHTML=result.days[0].tempmax+'&deg';

    date1.innerHTML = "tomorrow";
    const weatherCondition1 = result.days[1].icon;
    const weatherImg1 = document.createElement("img");
    weatherImg1.src = `images/${weatherCondition1}.png`;
    weatherImg1.style.height = "50px";
    icon1.innerHTML = "";
    icon1.appendChild(weatherImg1);
    weather1.innerHTML = result.days[1].conditions;
    temp1.innerHTML = `${result.days[1].tempmin}&deg / ${result.days[1].tempmax}&deg`;

    let day2 = getDay(result.days[2].datetime);
    const weatherCondition2 = result.days[2].icon;
    const weatherImg2 = document.createElement("img");
    weatherImg2.src = `images/${weatherCondition2}.png`;
    weatherImg2.style.height = "50px";
    icon2.innerHTML = "";
    icon2.appendChild(weatherImg2);
    date2.innerHTML = day2;
    weather2.innerHTML = result.days[2].conditions;
    temp2.innerHTML = `${result.days[2].tempmin}&deg / ${result.days[2].tempmax}&deg`;

    let day3 = getDay(result.days[3].datetime);
    const weatherCondition3 = result.days[3].icon;
    const weatherImg3 = document.createElement("img");
    weatherImg3.src = `images/${weatherCondition3}.png`;
    weatherImg3.style.height = "50px";
    icon3.innerHTML = "";
    icon3.appendChild(weatherImg3);
    date3.innerHTML = day3;
    weather3.innerHTML = result.days[3].conditions;
    temp3.innerHTML = `${result.days[3].tempmin}&deg / ${result.days[3].tempmax}&deg`;

    let day4 = getDay(result.days[4].datetime);
    const weatherCondition4 = result.days[4].icon;
    const weatherImg4 = document.createElement("img");
    weatherImg4.src = `images/${weatherCondition4}.png`;
    weatherImg4.style.height = "50px";
    icon4.innerHTML = "";
    icon4.appendChild(weatherImg4);
    date4.innerHTML = day4;
    weather4.innerHTML = result.days[4].conditions;
    temp4.innerHTML = `${result.days[4].tempmin}&deg / ${result.days[4].tempmax}&deg`;

    let day5 = getDay(result.days[5].datetime);
    const weatherCondition5 = result.days[5].icon;
    const weatherImg5 = document.createElement("img");
    weatherImg5.src = `images/${weatherCondition5}.png`;
    weatherImg5.style.height = "50px";
    icon5.innerHTML = "";
    icon5.appendChild(weatherImg5);
    date5.innerHTML = day5;
    weather5.innerHTML = result.days[5].conditions;
    temp5.innerHTML = `${result.days[5].tempmin}&deg / ${result.days[5].tempmax}&deg`;

    let day6 = getDay(result.days[6].datetime);
    const weatherCondition6 = result.days[6].icon;
    const weatherImg6 = document.createElement("img");
    weatherImg6.src = `images/${weatherCondition6}.png`;
    weatherImg6.style.height = "50px";
    icon6.innerHTML = "";
    icon6.appendChild(weatherImg6);
    date6.innerHTML = day6;
    weather6.innerHTML = result.days[6].conditions;
    temp6.innerHTML = `${result.days[6].tempmin}&deg / ${result.days[6].tempmax}&deg`;

    let day7 = getDay(result.days[7].datetime);
    const weatherCondition7 = result.days[7].icon;
    const weatherImg7 = document.createElement("img");
    weatherImg7.src = `images/${weatherCondition7}.png`;
    weatherImg7.style.height = "50px";
    icon7.innerHTML = "";
    icon7.appendChild(weatherImg7);
    date7.innerHTML = day7;
    weather7.innerHTML = result.days[7].conditions;
    temp7.innerHTML = `${result.days[7].tempmin}&deg / ${result.days[7].tempmax}&deg`;

    tempValueField.innerHTML = result.days[0].feelslike+'&deg';
    riseField.innerHTML = 'Sunrise '+result.days[0].sunrise;
    setField.innerHTML = 'Sunset '+result.days[0].sunset;
    humidityValueField.innerHTML = result.days[0].humidity + " %";
    pressureValueField.innerHTML = result.days[0].pressure + " hPa";
    uvFieldValue.innerHTML = result.days[0].uvindex;
    const windDirection = result.days[0].winddir;
    const direction = degreesToDirection(windDirection);
    windNameField.innerHTML=direction+ ' wind';
    windValueField.innerHTML=result.days[0].windspeed+'km/h';


  } catch (error) {
    console.log(error);
    alert("An Error has occured, Please try again after some time");
  }
}

search.addEventListener("click", (e) => {
  const city_input = document.querySelector("#cityInput");
  const city_name = city_input.value;
  if (city_name === "" || city_name.length <= 2) {
    alert("Check your city name");
  } else {
    getdata(city_name);
  }
});
function convertCF(value) {
  let computedFValue = Math.round(value * (9 / 5) + 32);
  return computedFValue;
}

function getDay(dateStr) {
  let date = new Date(dateStr);
  const dayOfWeek = date.getDay();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = daysOfWeek[dayOfWeek];
  return dayName;
}

function getImg(currentWeather) {
  if (currentWeather === "rain") {
    return "rain.png";
  } else if (currentWeather === "wind") {
    return "wind.png";
  } else if (currentWeather === "cloudy") {
    return "cloudy.png";
  } else if (currentWeather === "partly-cloudy-day") {
    return "partially-cloudy-day";
  } else if (currentWeather === "partly-cloudy-night") {
    return "partly-cloudy-night.png";
  } else if (currentWeather === "clear-day") {
    return "clear-day.png";
  } else if (currentWeather === "clear-night") {
    return "clear-night.png";
  } else if (currentWeather === "thunder-rain") {
    return "thunder-rain.png";
  } else if (currentWeather === "thunder-showers-day") {
    return "thunder-showers-day.png";
  } else if (currentWeather === "thunder-showers-night") {
    return "thunder-showers-night.png";
  } else if (currentWeather === "showers-day") {
    return "showers-day.png";
  } else if (currentWeather === "showers-night") {
    return "showers-night.png";
  } else {
    return "not-found";
  }
}

function degreesToDirection(degrees) {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round((degrees % 360) / 45);
  return directions[(index < 0 ? index + 8 : index) % 8];
}

function getTodayDay(){
  const date = new Date();
  const day = date.getDay();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[day];
}
