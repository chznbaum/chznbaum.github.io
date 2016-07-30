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
    // Validate contact form
    function validateForm() {
        var formFName = document.forms["contact"]["firstname"].value;
        if (formFName == null || formFName == "") {
            alert("Necesita completar su nombre.");
            return false;
        };
        var formLName = document.forms["contact"]["lastname"].value;
        if (formLName == null || formLName == "") {
            alert("Necesita completar su apellido.");
            return false;
        };
        var formEmail = document.forms["contact"]["lastname"].value;
        if (formEmail == null || formEmail == "") {
            alert("Necesita completar su email.");
            return false;
        };
        var formMessage = document.forms["contact"]["lastname"].value;
        if (formMessage == null || formMessage == "") {
            alert("Necesita completar su mensaje.")
        };
    };
});