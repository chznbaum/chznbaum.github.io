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
    // Twitch TV
    var usersArray = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404", "GeekandSundry", "Di3seL", "VGBootCamp", "PJDiCesare", "jcarverpoker", "Ninja"];
    var twitchBlock = document.getElementById("twitchThumbs");
    usersArray.forEach(function(userName) {
        $.getJSON("https://api.twitch.tv/kraken/streams/" + userName + "?callback=?", function(data) {
            console.log(data);
            if (data.status === 422) {
                var div = document.createElement('div');
                twitchBlock.appendChild(div);
                div.className = "col-md-3 col-sm-6 col-xs-12 " + userName + " showOffline"
                div.innerHTML = "<a href=\"#\" class=\"thumbnail\"><img src=\"../images/accountclosed.jpg\" alt=\"Preview of Twitch TV channel\" /><div class=\"caption\"><h3 class=\"text-center\">" + userName + "</h3><p class=\"text-center\">Account Closed</p></div></a>";
            } else if (data.hasOwnProperty("stream") && data.stream == null) {
                $.getJSON("https://api.twitch.tv/kraken/channels/" + userName + "?callback=", function(offlineData) {
                var div = document.createElement('div');
                twitchBlock.appendChild(div);
                div.className = "col-md-3 col-sm-6 col-xs-12 " + userName + " showOffline";
                div.innerHTML = "<a href=" + offlineData._links.self + " class=\"thumbnail\"><img src=\"../images/offline.jpg\" alt=\"Preview of Twitch TV channel\" /><div class=\"caption\"><div class=\"row\"><div class=\"col-xs-4 col-xs-offset-4\"><img class=\"img-responsive img-circle twitchLogo\" src=" + offlineData.logo + "></div><div class=\"col-xs-12\"><h3 class=\"text-center\">" + userName + "</h3><p class=\"text-center\">Offline</p></div></div></div></a>";
            });
            } else if (data.hasOwnProperty("stream") && data.stream !== null) {
                var div = document.createElement('div');
                twitchBlock.appendChild(div);
                div.className = "col-md-3 col-sm-6 col-xs-12 " + userName + " showOnline";
                div.innerHTML = "<a href=" + data._links.channel + " class=\"thumbnail\"><img src=" + data.stream.preview.large + " alt=\"Preview of Twitch TV channel\" /><div class=\"caption\"><div class=\"row\"><div class=\"col-xs-4 col-xs-offset-4\"><img class=\"img-responsive img-circle twitchLogo\" src=" + data.stream.channel.logo + "></div><div class=\"col-xs-12\"><h3 class=\"text-center\">" + userName + "</h3><p class=\"text-center\">" + data.stream.channel.status + "</p></div></div></div></a>";
            };
            $("#allButton").on("click", function() {
                $(".showOnline").fadeIn();
                $(".showOffline").fadeIn();
            });
            $("#onlineButton").on("click", function() {
                $(".showOnline").fadeIn();
                $(".showOffline").fadeOut();
            });
            $("#offlineButton").on("click", function() {
                $(".showOnline").fadeOut();
                $(".showOffline").fadeIn();
            });
        });
    });
    $("#searchUsers").on("search", function()
                                 {
                var searchResult = document.getElementById("searchUsers").value;
                var resultDiv = document.getElementsByClassName(searchResult);
                $(".showOnline").fadeOut();
                $(".showOffline").fadeOut();
                $(resultDiv).fadeIn();
            });
});
$(".dropdown").on("click", function() {
    $('.dropdown-toggle').dropdown();
});
