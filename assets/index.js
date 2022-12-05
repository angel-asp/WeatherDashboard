
//geocoding api will take a city and convert info into lat and lon
//fiveDay Forecast needs lat and lon to populate the 5 day forecast



var searchButton = $('#searchButton');
var userInput = $('.userInput');
var today = $('#todaysForecast')

var geocodingAPI = 'http://api.openweathermap.org/geo/1.0/direct?appid=90f9cf47a9397ccf3fcd315994691698&q=';


var fiveDayForecast = 'http:api.openweathermap.org/data/2.5/forecast?appid=90f9cf47a9397ccf3fcd315994691698&units=metric&lat=';
var currentDayForecast = 'https://api.openweathermap.org/data/2.5/weather?appid=90f9cf47a9397ccf3fcd315994691698&units=metric&lat=';

searchButton.click(getUserInput); 

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
      console.log(lat);
      console.log(lon)
      //var lat = data[0].lat;
      return fetch(currentDayForecast + lat + "&lon=" + lon) 
    })
    .then(function (fiveDayAPI) {
      return fiveDayAPI.json();
    })
    .then(function (forecastAPI) {
      //create elements to place in div
      //create name date temp wind and humidity
      console.log(forecastAPI);

      var h1City = document.createElement('h1');

      h1City.textContent = forecastAPI.name;
      console.log(h1City)
      today[1].appendChild(h1City);

      
    })

    //use lat and lon to find forecast
    //display forecast inside divs
    //save to local stroage
    

}









/*fetch(fiveDayForecast + userInput)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data)
  });
*/
  
