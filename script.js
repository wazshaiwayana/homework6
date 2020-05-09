$(document).ready(function(){
    console.log("localStorage",JSON.parse(localStorage.getItem("userSearch")) || []);
  var userSearch = JSON.parse(localStorage.getItem("userSearch")) || [];
  
  for (var i = 0; i < userSearch.length; i++){
    var li = $("<li>").addClass("list-group-item list-group-item-action").text(userSearch[i]);
    $(".cities").append(li);
  }
  
  //var userSearch = [];

    $("#submit").on("click", function(){
        var city = $("#city");
        $.ajax({
            type: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + city.val() + "&appid=" + "daa70b31f7c16b78d4c41d748cc4a1cb" + "&units=imperial",
            dataType: "json",
            success: function(response) {
              console.log("response", (response));

                 $(".show").empty();
         
                var current = $("<p>").text("Current weather for:  " + response.name);
                $(".show").append(current);
        
                var temp = $("<p>").text("Temp: " + response.main.temp);
                $(".show").append(temp);
        
                var humid= $("<p>").text("Humidity : " + response.main.humidity);
                $(".show").append(humid);    
                console.log("city.val()", city.val());
                console.log("userSearch", userSearch);

                userSearch.push(city.val());
                localStorage.setItem("userSearch", JSON.stringify(userSearch));

            }       
        });

        var li = $("<li>").addClass("list-group-item list-group-item-action").text(city.val());
             $(".cities").append(li);

        
        $.ajax({
        type: "GET",
        url: "https://www.api.openweathermap.org/data/2.5/forecast?q=san%20diego&appid=daa70b31f7c16b78d4c41d748cc4a1cb",
         dataType: "json",
         success: function(response) {

            console.log("daily response", response);
                
                $(".show").empty();

                var humidityDaily = $("<p>").text("humidity:  " + response.daily.humidity);
                $(".forcast").append(humidityDaily);

                var UVINDEX= $("<p>").text("UV index:  " + response.daily.uvi);
                $(".show").append(UVINDEX);

                var tempDaily = $("<p>").text("temp:  " + response.daily.temp);
                $(".show").append(tempDaily);

            }

                
        });

    });
})

