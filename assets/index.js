
//geocoding api will take a city and convert info into lat and lon
//fiveDay Forecast needs lat and lon to populate the 5 day forecast

var currentDay = dayjs().format('MMMM dddd D YYYY');
 
var searchButton = $('#searchButton');
var userInput = $('.userInput');
var today = $('#todaysForecast')

var geocodingAPI = 'http://api.openweathermap.org/geo/1.0/direct?appid=90f9cf47a9397ccf3fcd315994691698&q=';


var fiveDayForecast = 'http:api.openweathermap.org/data/2.5/forecast?appid=90f9cf47a9397ccf3fcd315994691698&units=imperial&lat=';
var currentDayForecast = 'https://api.openweathermap.org/data/2.5/weather?appid=90f9cf47a9397ccf3fcd315994691698&units=imperial&lat=';

searchButton.click(getUserInput); 
searchButton.click(inputFiveday)

function getUserInput() {
  //gets user input and places into var x
    var x = userInput.val();   
    
    //place var x with geocoding api to get city lat and lon
    fetch(geocodingAPI + x)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var lat = data[0].lat;
      var lon = data[0].lon;
      //var lat = data[0].lat;
      return fetch(currentDayForecast + lat + "&lon=" + lon) 
    })
    .then(function (fiveDayAPI) {
      return fiveDayAPI.json();
    })
    .then(function (forecastAPI) {
      //create elements to place in div
      //create name date temp wind and humidity

      var h1City = document.createElement('h1');
      var h1Temp = document.createElement('h1');
      var h1FeelsLike = document.createElement('h1');
      var h1Wind = document.createElement('h1');
      var h1Humidity = document.createElement('h1');


      h1City.textContent = forecastAPI.name + " " + currentDay;
      h1Temp.textContent = "temp " + forecastAPI.main.temp + " degrees";
      h1FeelsLike.textContent = "feels like " + forecastAPI.main.feels_like + " degrees";
      h1Wind.textContent = "wind speed of " + forecastAPI.wind.speed + " mph";
      h1Humidity.textContent = "humidity of " + forecastAPI.main.humidity + " %";
    
      


      today.append(h1City);
      today.append(h1Temp);
      today.append(h1FeelsLike);
      today.append(h1Wind);
      today.append(h1Humidity);
    }) }




    function inputFiveday() {
      //gets user input and places into var x
        var x = userInput.val();  

    fetch(geocodingAPI + x)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var lat = data[0].lat;
      var lon = data[0].lon;
      //var lat = data[0].lat;
      return fetch(fiveDayForecast + lat + "&lon=" + lon) 
    })
    .then(function (fiveDayAPI) {
      return fiveDayAPI.json();
    })
    .then(function (fiveDays) {
      console.log(fiveDays);
})}









/*fetch(fiveDayForecast + userInput)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data)
  });
*/
  
