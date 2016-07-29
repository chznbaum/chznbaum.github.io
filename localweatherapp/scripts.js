$(document).ready(function() {
    // Scrollspy
    $('body').scrollspy({target: ".navbar", offset: 50});
    $("#mynavbar a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        } 
    });
    // Skip to content
    $(".skip").click(function(event){
        // strip the leading hash and declare
        // the content we're skipping to
        var skipTo="#"+this.href.split('#')[1];
        // Setting 'tabindex' to -1 takes an element out of normal 
        // tab flow but allows it to be focused via javascript
        $(skipTo).attr('tabindex', -1).on('blur focusout', function () {
            // when focus leaves this element, 
            // remove the tabindex attribute
            $(this).removeAttr('tabindex');
        }).focus(); // focus on the content container
    });
    // When page loads, get location from user's IP
    $.getJSON("http://ip-api.com/json", function(json) {
        var userLatitude = json.lat;
        var userLongitude = json.lon;
        var userCity = json.city;
        var userState = json.region;
        // Convert Lat and Lon into into integers
        userLatitude = parseInt(userLatitude);
        userLongitude = parseInt(userLongitude);
        // Get the City, ST text and replace them with the user's city and state
        var elemCity = document.getElementById("city");
        var elemState = document.getElementById("state");
        elemCity.innerHTML = userCity;
        elemState.innerHTML = userState;
        // Call Open Weather API and retrieve user's weather JSON
        var apiKey = "c5aa54a3309f0d69eead6f876c7dcd32";
        var weatherStr = "http://api.openweathermap.org/data/2.5/weather?lat=" + userLatitude + "&lon=" + userLongitude + "&units=imperial&APPID=" + apiKey;
        $.getJSON(weatherStr, function(json) {
            // Store user's temp and display it
            var weatherTemp = json.main.temp;
            var elemTemp = document.getElementById("weatherTemp");
            elemTemp.innerHTML = weatherTemp;
            // Set classes based on temperature so background can reflect hot/cold
            var elBody = document.getElementById("appBody");
            if (weatherTemp <= 32) {
                elBody.setAttribute("class", "cold");
            } else if (weatherTemp >= 85) {
                elBody.setAttribute("class", "hot");
            } else
                elBody.setAttribute("class", "moderate");
            // Toggle fahrenheit/celsius
            var fahrenheit = true;
            $("#convertBtn").on("click", function() {
                var elemSymbol = document.getElementById("degreeSym");
                if (fahrenheit === true) {
                    weatherTemp = ((weatherTemp - 32) / 1.8);
                    elemTemp.innerHTML = weatherTemp;
                    elemSymbol.innerHTML = "&#8451";
                    fahrenheit = false;
                } else if (fahrenheit === false) {
                    weatherTemp = ((weatherTemp * 1.8) + 32);
                    elemTemp.innerHTML = weatherTemp;
                    elemSymbol.innerHTML = "&#8457";
                    fahrenheit = true;
                };
            });
        }); 
    });
});