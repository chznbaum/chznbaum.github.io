navDisplay();
$('#currentBox').html(HTMLweatherSetUp);
footer.display();
var HTMLweatherNavigatorError = '<p>Geolocation is not supported by your browser.</p>';
var HTMLweatherPositionError = '<p>Unable to retrieve your location.</p>';
function findMe() {
    if (!navigator.geolocation) {
        $('#locating').html(HTMLweatherNavigatorError);
        return;
    }
    function success(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        $('#locating').html('<p>Latitude is ' + latitude + '</p><p>Longitude is ' + longitude + '</p>')
    }
    function error() {
        $('#locating').html(HTMLweatherPositionError);
    }
    $('#locating').html("<p>Locating...</p>");
    navigator.geolocation.getCurrentPosition(success, error);
}
function weatherApp() {
    if (navigator.geolocation) {
        console.log("navigator.geolocation works");
        // Use geolocation to obtain location
        var timeoutVal = 10 * 1000 * 1000;
        var userLatitude;
        var userLongitude;
        navigator.geolocation.getCurrentPosition(function(position) {
            userLatitude = position.coords.latitude;
            userLongitude = position.coords.longitude;
            console.log("userLatitude = " + userLatitude);
            console.log("userLongitude = " + userLongitude);
            // Use Ask GEO to obtain City, ST, Country
            var geoAPI = "AIzaSyDC6U1aZXcePTAR20iwRKIuJ26LqXX6t5s";
            var geoString = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + userLatitude + "," + userLongitude + "&key=" + geoAPI;
            $.getJSON(geoString, function(locData) {
                console.log(locData);
                var userLocation = locData.results[1].formatted_address;
                // Get the City, ST, Country text and replace them with the user's city and state
                var elemLocation = document.getElementById("currentLocation");
                elemLocation.innerHTML = userLocation;
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
        alert("Geolocation not supported on your browser.");
    };
}
$(document).ready(function() {
    // Scrollspy
    $('body').scrollspy({target: ".navbar", offset: 50});
    $('#mynavbar a').on('click', function(event) {
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
    // When page loads, check if navigator.geolocation is available
    findMe();
});