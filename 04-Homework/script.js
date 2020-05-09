$(document).ready(function(){
    $("#submit").on("click", function(){
        var city = $("#city");
        $.ajax({
            type: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + city.val() + "&appid=" + "daa70b31f7c16b78d4c41d748cc4a1cb" + "&units=imperial",
            dataType: "json",
            success: function(response) {
              console.log(response);

           $(".show").empty();

        var current = $("<p>").text("Current weather for:  " + response.name);
           $(".show").append(current);

        var temp = $("<p>").text("Temp: " + response.main.temp);
              $(".show").append(temp);
        
        var humid= $("<p>").text("Humidity : " + response.main.humidity);
                $(".show").append(humid);     
     }
            
    });
        var li = $("<li>").addClass("list-group-item list-group-item-action").text(city.val());
             $(".cities").append(li);
 $.ajax({
    type: "GET",
    url: "http://www.api.openweathermap.org/data/2.5/forecast?q" + city.val() + "&appid=" + "daa70b31f7c16b78d4c41d748cc4a1cb" + "&units=imperial",
    dataType: "json",
    success: function(response) {
      console.log(response);

    
        });

 })

})
