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
});
// When randomBtn clicked, open link to random Wikipedia entry
$("#randomBtn").on("click", function() {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
});
// When resultsBtn clicked, determine search query
$("#resultsBtn").on("click", function() {
    var searchQuery = document.getElementById("inputSearch").value;
    // Call Wikipedia API and get list of results for search query 
    $.ajax({
        url: "//www.wikipedia.org/w/api.php",
        data: { action: "query", list: "search", srsearch: searchQuery, srprop: "snippet" , srlimit: 15, format: "json" },
        dataType: "jsonp",
        success: function (xhr) {
            // Obtain array from JSON results
            var wikiArray = $.map(xhr, function(i) {
                return i;
            });
            wikiArray = wikiArray[2].search;
            wikiArray = $.map(wikiArray, function(i) {
                return i;
            });
            // Populate description list with titles with links and snippets from the array
            for (i = 0; i < wikiArray.length; i++) {
                var wikiEncode = encodeURI(wikiArray[i].title);
                $("#showResults").append("<dt><a href=https://en.wikipedia.org/wiki/" + wikiEncode + " target=\"_blank\">" + wikiArray[i].title + "</a></dt><dd>" + wikiArray[i].snippet + "...</dd>")
            }
        }
    });
});