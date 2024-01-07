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

document.querySelector(".search button").addEventListener("click", function () {
    currentWeather.search();
});

currentWeather.fetchCurrentWeather("San Antonio");

let fiveDay1 = {
    "apiKey": "1537989417a206bbfd99a59f933ea9d1",
    fetchFiveDay: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayFiveDay(data));
    },
    displayFiveDay: function(data) {
        const {icon} = data.list[2].weather[0];
        const {temp, humidity} = data.list[2].main;
        const {speed} = data.list[2].wind;
        document.querySelector(".day1Temp").innerText = Math.round(temp) + "°F";
        document.querySelector(".day1Icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".day1Humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".day1WindSpeed").innerText = "Wind Speed: " + speed + " MPH";
    },
    search: function () {
        this.fetchFiveDay(document.querySelector(".userSearch").value);
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    fiveDay1.search();
});

fiveDay1.fetchFiveDay("San Antonio");

let fiveDay2 = {
    "apiKey": "1537989417a206bbfd99a59f933ea9d1",
    fetchFiveDay: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayFiveDay(data));
    },
    displayFiveDay: function(data) {
        const {icon} = data.list[10].weather[0];
        const {temp, humidity} = data.list[10].main;
        const {speed} = data.list[10].wind;
        document.querySelector(".day2Temp").innerText = Math.round(temp) + "°F";
        document.querySelector(".day2Icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".day2Humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".day2WindSpeed").innerText = "Wind Speed: " + speed + " MPH";
    },
    search: function () {
        this.fetchFiveDay(document.querySelector(".userSearch").value);
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    fiveDay2.search();
});

fiveDay2.fetchFiveDay("San Antonio");

let fiveDay3 = {
    "apiKey": "1537989417a206bbfd99a59f933ea9d1",
    fetchFiveDay: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayFiveDay(data));
    },
    displayFiveDay: function(data) {
        const {icon} = data.list[18].weather[0];
        const {temp, humidity} = data.list[18].main;
        const {speed} = data.list[18].wind;
        document.querySelector(".day3Temp").innerText = Math.round(temp) + "°F";
        document.querySelector(".day3Icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".day3Humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".day3WindSpeed").innerText = "Wind Speed: " + speed + " MPH";
    },
    search: function () {
        this.fetchFiveDay(document.querySelector(".userSearch").value);
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    fiveDay3.search();
});

fiveDay3.fetchFiveDay("San Antonio");

let fiveDay4 = {
    "apiKey": "1537989417a206bbfd99a59f933ea9d1",
    fetchFiveDay: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayFiveDay(data));
    },
    displayFiveDay: function(data) {
        const {icon} = data.list[26].weather[0];
        const {temp, humidity} = data.list[26].main;
        const {speed} = data.list[26].wind;
        document.querySelector(".day4Temp").innerText = Math.round(temp) + "°F";
        document.querySelector(".day4Icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".day4Humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".day4WindSpeed").innerText = "Wind Speed: " + speed + " MPH";
    },
    search: function () {
        this.fetchFiveDay(document.querySelector(".userSearch").value);
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    fiveDay4.search();
});

fiveDay4.fetchFiveDay("San Antonio");

let fiveDay5 = {
    "apiKey": "1537989417a206bbfd99a59f933ea9d1",
    fetchFiveDay: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayFiveDay(data));
    },
    displayFiveDay: function(data) {
        const {icon} = data.list[34].weather[0];
        const {temp, humidity} = data.list[34].main;
        const {speed} = data.list[34].wind;
        document.querySelector(".day5Temp").innerText = Math.round(temp) + "°F";
        document.querySelector(".day5Icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".day5Humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".day5WindSpeed").innerText = "Wind Speed: " + speed + " MPH";
    },
    search: function () {
        this.fetchFiveDay(document.querySelector(".userSearch").value);
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    fiveDay5.search();
});

fiveDay5.fetchFiveDay("San Antonio");

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