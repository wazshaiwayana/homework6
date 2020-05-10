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
             // console.log("response", (response));

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
            url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city.val() + "&appid=" + "daa70b31f7c16b78d4c41d748cc4a1cb",
            dataType: "json",
            success: function(response) {
            console.log("forecast", response);
                

                 var humidityDaily = $("<p>").text("humidity:  " + response.list[5].main.humidity);
                $(".forecast").append(humidityDaily);

                var tempDaily = $("<p>").text("temp:  " + response.list[3].main.temp);
                $(".forecast").append(tempDaily);

                var day1 = $("<p>").text(response.list[0].dt_txt);
                 $(".day1").append(day1);

                var day2 = $("<p>").text( response.list[7].dt_txt);
                $(".day2").append(day2);

                var day3 = $("<p>").text(response.list[15].dt_txt);
                $(".day3").append(day3);

                 var day4 = $("<p>").text(response.list[23].dt_txt);
                $(".day4").append(day4);

                var day5= $("<p>").text(response.list[31].dt_txt);
                $(".day5").append(day5);


                // i tried to add this like the one above to clear out the previous data but it made the code not work completely for this part. 
                //$(".daily").empty();
                
                
                //tried to add the icons here but it wouldnt work
                // var icons=$("<img>").html(response.list[0].weather[0].icon);
                // $(".forecast").append(icons);
            }

            // this part was for the uv index but this part didnt work either. 
            // var UVINDEX= $("<p>").text("UV index:  " + response.daily.uvi);
            // $(".show").append(UVINDEX);

                
        });

    });
})



