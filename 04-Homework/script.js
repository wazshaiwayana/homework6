$(document).ready(function(){

    var APIKey= "00fa8305ad7a6c4ef1a958b5f4cdc9ed";

    //var queryUrl = "http://www.api.openweathermap.org/data/2.5/forcast?q=";


$("#submit").on("click",function(){

    var city = $("#city").val();
    console.log(city);

    //    $.ajax({
    //     type: "GET",
    //     url:"http://www.api.openweathermap.org/data/2.5/weather?q=" + city + "&appid" + APIKey + "&units = imperial",
          
    //         dataType : "json",
    //     //         success: function(response) {
    //     //         var widget = show(reponse);

    //     //         $("#show").html(widget);

    //     //         $("#city").val('');
    //     //         console.log(response);
    //     //     }

    //     })
    //     .then(function(response){
    //         console.log(response);
    //     })

        var li = $("<li>").addClass("list-group-item list-group-item-action").text(city);
        $(".cities").append(li);
});
   


function show(reponse) {
     return
    "<h2> current weather for " + response.name + "," + data.sys.country + "</h2>" +
    "<h3><strong>Weather</strong>: "+ response.weather[0].main +"</h3>" + 
    "<h3><strong>description</strong>: "+ response.weather[0].description +"</h3>" +
    "<h3><strong>Temperture</strong>: " + response.main.temp + "</h3>" +
    "<h3><strong>humidity</strong>: " + response.main.humidity + "</h3>" + 
    "<h3><strong>wind speed</strong>: " + response.wind.speed + "</h3>"+

    "five day forcast starts at " + response.forecast.time.from + 
    "ends at" + response.forecast.time.to  ;
    }
});
  
// GIVEN a weather dashboard with form inputs
// WHEN I search for a city




// THEN I am presented with current and future conditions for that city and that city is added to the search history


// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast
// 