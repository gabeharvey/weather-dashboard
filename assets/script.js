// variable declaration //
let currentDay = dayjs();
let dayPlus1 = currentDay.add(1, 'day');
let dayPlus2 = currentDay.add(2, 'day');
let dayPlus3 = currentDay.add(3, 'day');
let dayPlus4 = currentDay.add(4, 'day');
let dayPlus5 = currentDay.add(5, 'day');
let currentWeather = {
    "apiKey": "1537989417a206bbfd99a59f933ea9d1",
    fetchCurrentWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayCurrentWeather(data));
    },
    displayCurrentWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = name + " Weather";
        document.querySelector(".currentTemp").innerText = temp + "°F";
        document.querySelector(".currentWeatherIcon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".currentDescription").innerText = description;
        document.querySelector(".currentHumidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".currentWindSpeed").innerText = "Wind Speed: " + speed + " MPH";
    }
};

setInterval (function() {
    $(".currentDate").text(currentDay.format("dddd, MM/DD/YYYY"));
  }, 1000);

  setInterval (function() {
    $(".day1Date").text(dayPlus1.format("dddd, MM/DD/YYYY"));
  }, 1000);

  setInterval (function() {
    $(".day2Date").text(dayPlus2.format("dddd, MM/DD/YYYY"));
  }, 1000);

  setInterval (function() {
    $(".day3Date").text(dayPlus3.format("dddd, MM/DD/YYYY"));
  }, 1000);

  setInterval (function() {
    $(".day4Date").text(dayPlus4.format("dddd, MM/DD/YYYY"));
  }, 1000);

  setInterval (function() {
    $(".day5Date").text(dayPlus5.format("dddd, MM/DD/YYYY"));
  }, 1000);