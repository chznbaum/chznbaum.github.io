var helpTitle = 'Twitch TV JSON API Help';
modalText('#home', helpTitle, helpModal(HTMLhelpBox, 'twitch_tv_json_api', 'twitch'));
navDisplay();
$('#home').append(HTMLtwitchSetUp);
var formattedSearch = HTMLsearchBox.replace(/%data%/g, 'Search Users');
$('#home').append(formattedSearch);
$('#home').append(HTMLhelpButton);
$('#resultsBox').append(HTMLtwitchResults);
footer.display();
function twitchTV() {
    twitchUsersArray = twitchUsersArray.sort();
    var twitchString = 'https://api.twitch.tv/kraken/streams/?client_id=%twitchID%&callback=?';
    var offlineTwitchString = 'https://api.twitch.tv/kraken/channels/?client_id=%twitchID%&callback=?';
    var closedAccountDiv = '<div id="%userName%" class="col-md-3 col-sm-6 col-xs-12 showOffline"><a href="#"><div class="thumbnail"><img src="./images/accountclosed.jpg" alt="Preview of Twitch TV channel" /><div class="caption"><h3 class="text-center">%userName%</h3><p class="text-center">Account Closed</p></div></a></div>';
    var offlineDiv = '<div id="%userName%" class="col-md-3 col-sm-6 col-xs-12 showOffline"><a href="https://twitch.tv/%userName%"><div class="thumbnail"><img src="./images/offline.jpg" alt="Preview of Twitch TV channel" /><div class="caption><div class="row"><div class="col-xs-4 col-xs-offset-4"><img class="img-responsive img-circle twitchLogo" src="%logourl%"></div><div class="col-xs-12"><h3 class="text-center">%userName%</h3><p class="text-center">Offline</p></div></div></div></div></a></div>';
    var onlineDiv = '<div id="%userName%" class="col-md-3 col-sm-6 col-xs-12 showOnline"><a href="%streamurl%"><div class="thumbnail"><img src="%twitchImage%" alt="Preview of Twitch TV channel" /><div class="caption"><div class="row"><div class="col-xs-4 col-xs-offset-4"><img class="img-responsive img-circle twitchLogo" src="%logoURL%"</div><div class="col-xs-12"><h3 class="text-center">%userName%</h3><p class="text-center">%twitchUserStatus%</p></div></div></div></div></a></div>';
    var formattedTwitchString, formattedOfflineTwitchString, formattedClosedAccountDiv, formattedOnlineDiv, formattedOfflineDiv;
    console.log('TwitchTV function');
    $.getJSON(formattedTwitchString, function(twitchData) {
        console.log(twitchData);
    });
    /*for (i = 0; i < twitchUsersArray.length; i++) {
        console.log(i);
        console.log(twitchUsersArray[i]);
        formattedTwitchString = twitchString.replace(/%userName%/g, twitchUsersArray[i]).replace(/%twitchID%/g, twitchID);
        $.getJSON(formattedTwitchString, function(twitchData) {
            console.log(twitchData);
            if (twitchData.status === 404) {
                formattedClosedAccountDiv = closedAccountDiv.replace(/%userName%/g, twitchUsersArray[i]);
                $('#twitchBox').append(formattedClosedAccountDiv);
            } else if (twitchData.hasOwnProperty('stream') && twitchData.stream === null) {
                formattedOfflineTwitchString = offlineTwitchString.replace(/%userName%/g, twitchUsersArray[i]).replace(/%twitchID%/g, twitchID);
                    $.getJSON(formattedOfflineTwitchString, function(offlineData) {
                        formattedOfflineDiv = offlineDiv.replace(/%userName%/g, twitchUsersArray[i]).replace(/%logourl%/g, offlineData.logo);
                        $('#twitchBox').append(formattedOfflineDiv);
                    });
            } else if (twitchData.hasOwnProperty('stream') && twitchData.stream !== null) {
                formattedOnlineDiv = onlineDiv.replace(/%userName%/g, twitchUsersArray[i]).replace(/%logourl%/g, twitchData.stream.channel.logo).replace(/%twitchImage%/g, twitchData.stream.preview.large).replace(/%streamurl%/g, twitchData.stream._links.self).replace(/%twitchUserStatus%/g, twitchData.stream.game);
                $('#twitchBox').append(formattedOnlineDiv);
            };
            $('#allButton').click(function(event) {
                $('.showOnline').fadeIn();
                $('.showOffline').fadeIn();
            });
            $('#onlineButton').click(function(event) {
                $('.showOnline').fadeIn();
                $('.showOffline').fadeOut();
            });
            $('#offlineButton').click(function(event) {
                $('.showOnline').fadeOut();
                $('.showOffline').fadeIn();
            });
        });
        $('#searchUsers').click(function(event) {
            var searchResult = $('#searchUsers').value;
        });*/
}
twitchTV();
$(document).ready(function() {
});