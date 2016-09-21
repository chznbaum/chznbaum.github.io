var helpTitle = 'Local Weather App Help';
modalText('#helpBox', helpTitle, helpModal(HTMLhelpBox, 'local_weather_app', 'weather'));
navDisplay();
$('#helpBox').append(HTMLhelpButton);
$('#home').html(HTMLweatherStart);
$('#currentBox').html(HTMLweatherSetUp);
footer.display();
$('#footer p').append(HTMLdarkSkyAttribution);
$(document).ready(function() {
    weatherApp();
});