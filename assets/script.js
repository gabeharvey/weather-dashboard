let currentDay = dayjs();
let dayPlus1 = currentDay.add(1, 'day');
let dayPlus2 = currentDay.add(2, 'day');
let dayPlus3 = currentDay.add(3, 'day');
let dayPlus4 = currentDay.add(4, 'day');
let dayPlus5 = currentDay.add(5, 'day');

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