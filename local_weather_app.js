var helpTitle = 'Local Weather App Help';
modalText('#helpBox', helpTitle, helpModal(HTMLhelpBox, 'local_weather_app', 'weather'));
navDisplay();
$('#helpBox').append(HTMLhelpButton);
$('#currentBox').html(HTMLweatherSetUp);
footer.display();
$('#footer p').append(HTMLdarkSkyAttribution);
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
    // Geolocation
    weatherApp();
});