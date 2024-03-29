// variable declaration //
let currentDay = dayjs();
let dayPlus1 = currentDay.add(1, 'day');
let dayPlus2 = currentDay.add(2, 'day');
let dayPlus3 = currentDay.add(3, 'day');
let dayPlus4 = currentDay.add(4, 'day');
let dayPlus5 = currentDay.add(5, 'day');

// current weather API functions //
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
        document.querySelector(".city").innerText = name + " Weather";
        document.querySelector(".currentTemp").innerText = Math.round(temp) + "°F";
        document.querySelector(".currentWeatherIcon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".currentDescription").innerText = description;
        document.querySelector(".currentHumidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".currentWindSpeed").innerText = "Wind Speed: " + speed + " MPH";
    },
    search: function () {
        this.fetchCurrentWeather(document.querySelector(".userSearch").value);
    }
};

// click function for current day weather search //
document.querySelector(".search button").addEventListener("click", function () {
    currentWeather.search();
});

// initial weather display //
currentWeather.fetchCurrentWeather("San Antonio");

// variables for search history and local storage functions //
let cityList = document.querySelector(".cityHistory");
let cityCount = document.querySelector(".cityCount");
let cityInput = document.querySelector(".userSearch");
let cityForm = document.querySelector(".search");
let searchBtn = document.querySelector(".searchBtn");

// local storage array //
let userCity = [];

// create search result buttons function //
function renderCity () {
    cityList.innerHTML = "";
    for (var i = 0; i < userCity.length; i++) {
        var city = userCity[i];
        let button = document.createElement("button");
        button.textContent = city
        cityList.appendChild(button);
    }
}

// local storage functions //
function init() {
    var storedCities = JSON.parse(localStorage.getItem("userCity"));
    if (storedCities !== null) {
        userCity = storedCities;
    }
    renderCity();
}

function storeCities () {
    localStorage.setItem("userCity", JSON.stringify(userCity));
}

// display current weather and 5 day forecast function for user entry click //
searchBtn.addEventListener("click", function(event){
    event.preventDefault();
    let cityText = cityInput.value.trim();
    if (cityText === "") {
        return;
    }
    userCity.push(cityText);
    cityInput.value = "";
    storeCities();
    renderCity();
    currentWeather.fetchCurrentWeather(cityText)
        fiveDay1.fetchFiveDay(cityText)
        fiveDay2.fetchFiveDay(cityText)
        fiveDay3.fetchFiveDay(cityText)
        fiveDay4.fetchFiveDay(cityText)
        fiveDay5.fetchFiveDay(cityText) 
});

// display current weather and 5 day forecast function for cities in search history buttons //
cityList.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches("button") === true) {
        var city = element.textContent;
        currentWeather.fetchCurrentWeather(city)
        fiveDay1.fetchFiveDay(city)
        fiveDay2.fetchFiveDay(city)
        fiveDay3.fetchFiveDay(city)
        fiveDay4.fetchFiveDay(city)
        fiveDay5.fetchFiveDay(city) 
    }
});

init();

// API fetch function for day 1 of 5 day forecast //
let fiveDay1 = {
    "apiKey": "1537989417a206bbfd99a59f933ea9d1",
    fetchFiveDay: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayFiveDay(data));
    },
    displayFiveDay: function(data) {
        const {icon, description} = data.list[2].weather[0];
        const {temp, humidity} = data.list[2].main;
        const {speed} = data.list[2].wind;
        document.querySelector(".day1Temp").innerText = Math.round(temp) + "°F";
        document.querySelector(".day1Icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".day1Description").innerText = description;
        document.querySelector(".day1Humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".day1WindSpeed").innerText = "Wind Speed: " + speed + " MPH";
    },
    search: function () {
        this.fetchFiveDay(document.querySelector(".userSearch").value);
    }
};

fiveDay1.fetchFiveDay("San Antonio");

// API fetch function for day 2 of 5 day forecast //
let fiveDay2 = {
    "apiKey": "1537989417a206bbfd99a59f933ea9d1",
    fetchFiveDay: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayFiveDay(data));
    },
    displayFiveDay: function(data) {
        const {icon, description} = data.list[10].weather[0];
        const {temp, humidity} = data.list[10].main;
        const {speed} = data.list[10].wind;
        document.querySelector(".day2Temp").innerText = Math.round(temp) + "°F";
        document.querySelector(".day2Icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".day2Description").innerText = description;
        document.querySelector(".day2Humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".day2WindSpeed").innerText = "Wind Speed: " + speed + " MPH";
    },
    search: function () {
        this.fetchFiveDay(document.querySelector(".userSearch").value);
    }
};

fiveDay2.fetchFiveDay("San Antonio");

// API fetch function for day 3 of 5 day forecast //
let fiveDay3 = {
    "apiKey": "1537989417a206bbfd99a59f933ea9d1",
    fetchFiveDay: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayFiveDay(data));
    },
    displayFiveDay: function(data) {
        const {icon, description} = data.list[18].weather[0];
        const {temp, humidity} = data.list[18].main;
        const {speed} = data.list[18].wind;
        document.querySelector(".day3Temp").innerText = Math.round(temp) + "°F";
        document.querySelector(".day3Icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".day3Description").innerText = description;
        document.querySelector(".day3Humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".day3WindSpeed").innerText = "Wind Speed: " + speed + " MPH";
    },
    search: function () {
        this.fetchFiveDay(document.querySelector(".userSearch").value);
    }
};

fiveDay3.fetchFiveDay("San Antonio");

// API fetch function for day 4 of 5 day forecast //
let fiveDay4 = {
    "apiKey": "1537989417a206bbfd99a59f933ea9d1",
    fetchFiveDay: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayFiveDay(data));
    },
    displayFiveDay: function(data) {
        const {icon, description} = data.list[26].weather[0];
        const {temp, humidity} = data.list[26].main;
        const {speed} = data.list[26].wind;
        document.querySelector(".day4Temp").innerText = Math.round(temp) + "°F";
        document.querySelector(".day4Icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".day4Description").innerText = description;
        document.querySelector(".day4Humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".day4WindSpeed").innerText = "Wind Speed: " + speed + " MPH";
    },
    search: function () {
        this.fetchFiveDay(document.querySelector(".userSearch").value);
    }
};

fiveDay4.fetchFiveDay("San Antonio");

// API fetch function for day 5 of 5 day forecast //
let fiveDay5 = {
    "apiKey": "1537989417a206bbfd99a59f933ea9d1",
    fetchFiveDay: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayFiveDay(data));
    },
    displayFiveDay: function(data) {
        const {icon, description} = data.list[34].weather[0];
        const {temp, humidity} = data.list[34].main;
        const {speed} = data.list[34].wind;
        document.querySelector(".day5Temp").innerText = Math.round(temp) + "°F";
        document.querySelector(".day5Icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".day5Description").innerText = description;
        document.querySelector(".day5Humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".day5WindSpeed").innerText = "Wind Speed: " + speed + " MPH";
    },
    search: function () {
        this.fetchFiveDay(document.querySelector(".userSearch").value);
    }
};

fiveDay5.fetchFiveDay("San Antonio");

// dayJS functions to display current day in each box //
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