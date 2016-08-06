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
    // When page loads, check if navigator.geolocation is available
    if (navigator.geolocation) {
        // Use geolocation to obtain location
        var timeoutVal = 10 * 1000 * 1000;
        var userLatitude
        var userLongitude
        navigator.geolocation.getCurrentPosition(function (position) {
            userLatitude = position.coords.latitude;
            userLongitude = position.coords.longitude;
            // Use IP to obtain City, ST, Country
            $.getJSON("http://ip-api.com/json", function(locData) {
                var userCity = locData.city;
                var userState = locData.region;
                var userCountry = locData.country;
                // Get the City, ST, Country text and replace them with the user's city and state
                var elemCity = document.getElementById("city");
                var elemState = document.getElementById("state");
                var elemCountry = document.getElementById("country");
                elemCity.innerHTML = userCity;
                elemState.innerHTML = userState;
                elemCountry.innerHTML = userCountry;
                // Call Dark Sky Forcast API and retrieve user's weather JSON
                var apiKey = "56e678830a6e621a5f38e1b43296e432";
                var weatherStr = "https://api.forecast.io/forecast/" + apiKey + "/" + userLatitude + "," + userLongitude + "?callback=?";
                $.getJSON(weatherStr, function(weatherData) {
                    // Store user's temp and description and display them
                    var weatherTemp = weatherData.currently.temperature;
                    var feelsLikeTemp = weatherData.currently.apparentTemperature;
                    var weatherType = weatherData.currently.icon;
                    var weatherDescription = weatherData.currently.summary;
                    var elemTemp = document.getElementById("weatherTemp");
                    var elemFeelsLikeTemp = document.getElementById("feelsLikeTemp");
                    elemTemp.innerHTML = parseInt(weatherTemp);
                    elemFeelsLikeTemp.innerHTML = parseInt(feelsLikeTemp);
                    var elemDesc = document.getElementById("weatherDescrip");
                    elemDesc.innerHTML = weatherDescription;
                    // Set background image based on weather so background can reflect hot/cold
                    var elBody = document.getElementById("appBody");
                    switch (weatherType) {
                        case "clear-day":
                            elBody.style.backgroundImage = "url(\"../images/clearday.jpg\")";
                            break;
                        case "clear-night":
                            elBody.style.backgroundImage = "url(\"../images/clearnight.jpg\")";
                            break;
                        case "rain":
                            elBody.style.backgroundImage = "url(\"../images/rain.jpg\")";
                            break;
                        case "snow":
                            elBody.style.backgroundImage = "url(\"../images/snow.jpg\")";
                            break;
                        case "sleet":
                            elBody.style.backgroundImage = "url(\"../images/sleet.jpg\")";
                            break;
                        case "wind":
                            elBody.style.backgroundImage = "url(\"../images/wind.jpg\")";
                            break;
                        case "fog":
                            elBody.style.backgroundImage = "url(\"../images/fog.jpg\")";
                            break;
                        case "cloudy":
                            elBody.style.backgroundImage = "url(\"../images/cloudy.jpg\")";
                            break;
                        case "partly-cloudy-day":
                            elBody.style.backgroundImage = "url(\"../images/partlycloudyday.jpg\")";
                            break;
                        case "partly-cloudy-night":
                            elBody.style.backgroundImage = "url(\"../images/partlycloudynight.jpg\")";
                            break;
                    };
                    // Toggle fahrenheit/celsius
                    var fahrenheit = true;
                    $("#convertBtn").on("click", function() {
                        var elemSymbol1 = document.getElementById("degreeSym1");
                        var elemSymbol2 = document.getElementById("degreeSym2");
                        if (fahrenheit === true) {
                            weatherTemp = ((weatherTemp - 32) / 1.8);
                            elemTemp.innerHTML = parseInt(weatherTemp);
                            feelsLikeTemp = ((feelsLikeTemp - 32) / 1.8);
                            elemFeelsLikeTemp.innerHTML = parseInt(feelsLikeTemp);
                            elemSymbol1.innerHTML = "&#8451";
                            elemSymbol2.innerHTML = "&#8451";
                            fahrenheit = false;
                        } else if (fahrenheit === false) {
                            weatherTemp = ((weatherTemp * 1.8) + 32);
                            elemTemp.innerHTML = parseInt(weatherTemp);
                            feelsLikeTemp = ((feelsLikeTemp * 1.8) + 32);
                            elemFeelsLikeTemp.innerHTML = parseInt(feelsLikeTemp);
                            elemSymbol1.innerHTML = "&#8457";
                            elemSymbol2.innerHTML = "&#8457";
                            fahrenheit = true;
                        };
                    });
                });
            });
        });
    } else {
        // Use user's IP to obtain location
        $.getJSON("http://ip-api.com/json", function(locData) {
            var userLatitude = locData.lat;
            var userLongitude = locData.lon;
            var userCity = locData.city;
            var userState = locData.region;
            var userCountry = locData.country;
            // Get the City, ST text and replace them with the user's city and state
            var elemCity = document.getElementById("city");
            var elemState = document.getElementById("state");
            var elemCountry = document.getElementById("country");
            elemCity.innerHTML = userCity;
            elemState.innerHTML = userState;
            elemCountry.innerHTML = userCountry;
            // Call Dark Sky Forcast API and retrieve user's weather JSON
            var apiKey = "56e678830a6e621a5f38e1b43296e432";
            var weatherStr = "https://api.forecast.io/forecast/" + apiKey + "/" + userLatitude + "," + userLongitude + "?callback=?";
            $.getJSON(weatherStr, function(weatherData) {
                // Store user's temp and description and display them
                var weatherTemp = weatherData.currently.temperature;
                var feelsLikeTemp = weatherData.currently.apparentTemperature;
                var weatherType = weatherData.currently.icon;
                var weatherDescription = weatherData.currently.summary;
                var elemTemp = document.getElementById("weatherTemp");
                var elemFeelsLikeTemp = document.getElementById("feelsLikeTemp");
                elemTemp.innerHTML = parseInt(weatherTemp);
                elemFeelsLikeTemp.innerHTML = parseInt(feelsLikeTemp);
                var elemDesc = document.getElementById("weatherDescrip");
                elemDesc.innerHTML = weatherDescription;
                // Set background image based on weather so background can reflect hot/cold
                var elBody = document.getElementById("appBody");
                switch (weatherType) {
                    case "clear-day":
                        elBody.style.backgroundImage = "url(\"../images/clearday.jpg\")";
                        break;
                    case "clear-night":
                        elBody.style.backgroundImage = "url(\"../images/clearnight.jpg\")";
                        break;
                    case "rain":
                        elBody.style.backgroundImage = "url(\"../images/rain.jpg\")";
                        break;
                    case "snow":
                        elBody.style.backgroundImage = "url(\"../images/snow.jpg\")";
                        break;
                    case "sleet":
                        elBody.style.backgroundImage = "url(\"../images/sleet.jpg\")";
                        break;
                    case "wind":
                        elBody.style.backgroundImage = "url(\"../images/wind.jpg\")";
                        break;
                    case "fog":
                        elBody.style.backgroundImage = "url(\"../images/fog.jpg\")";
                        break;
                    case "cloudy":
                        elBody.style.backgroundImage = "url(\"../images/cloudy.jpg\")";
                        break;
                    case "partly-cloudy-day":
                        elBody.style.backgroundImage = "url(\"../images/partlycloudyday.jpg\")";
                        break;
                    case "partly-cloudy-night":
                        elBody.style.backgroundImage = "url(\"../images/partlycloudynight.jpg\")";
                        break;
                };
                // Toggle fahrenheit/celsius
                var fahrenheit = true;
                $("#convertBtn").on("click", function() {
                    var elemSymbol1 = document.getElementById("degreeSym1");
                    var elemSymbol2 = document.getElementById("degreeSym2");
                    if (fahrenheit === true) {
                        weatherTemp = ((weatherTemp - 32) / 1.8);
                        elemTemp.innerHTML = parseInt(weatherTemp);
                        feelsLikeTemp = ((feelsLikeTemp - 32) / 1.8);
                        elemFeelsLikeTemp.innerHTML = parseInt(feelsLikeTemp);
                        elemSymbol1.innerHTML = "&#8451";
                        elemSymbol2.innerHTML = "&#8451";
                        fahrenheit = false;
                    } else if (fahrenheit === false) {
                        weatherTemp = ((weatherTemp * 1.8) + 32);
                        elemTemp.innerHTML = parseInt(weatherTemp);
                        feelsLikeTemp = ((feelsLikeTemp * 1.8) + 32);
                        elemFeelsLikeTemp.innerHTML = parseInt(feelsLikeTemp);
                        elemSymbol1.innerHTML = "&#8457";
                        elemSymbol2.innerHTML = "&#8457";
                        fahrenheit = true;
                    };
                });
            }); 
        });
    };
});