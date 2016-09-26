var helpTitle = 'Twitch TV JSON API Help';
modalText('#home', helpTitle, helpModal(HTMLhelpBox, 'twitch_tv_json_api', 'twitch'));
navDisplay();
$('#home').append(HTMLtwitchSetUp);
var formattedSearch = HTMLsearchBox.replace(/%data%/g, 'Search Users');
$('#home').append(formattedSearch);
$('#home').append(HTMLhelpButton);
$('#resultsBox').append(HTMLtwitchResults);
footer.display();
var twitchString = 'https://api.twitch.tv/kraken/streams/%userName%?client_id=%twitchID%&callback=?';
var offlineTwitchString = 'https://api.twitch.tv/kraken/channels/%userName%?client_id=%twitchID%&callback=?';
var closedAccountDiv = '<div id="%userName%" class="col-md-3 col-sm-6 col-xs-12 showOffline"><a href="#"><div class="thumbnail"><img src="./images/accountclosed.jpg" alt="Preview of Twitch TV channel" /><div class="caption"><h3 class="text-center">%userName%</h3><p class="text-center">Account Closed</p></div></a></div>';
var offlineDiv = '<div id="%userName%" class="col-md-3 col-sm-6 col-xs-12 showOffline"><a href="https://twitch.tv/%userName%"><div class="thumbnail"><div class="offline"><img src="%twitchImage%" alt="Preview of Twitch TV channel" /></div><div class="caption"><div class="row"><div class="col-xs-4 col-xs-offset-4"><img class="img-responsive img-circle twitchLogo" src="%logoURL%"></div></div><div class="row"><div class="col-xs-12"><h3 class="text-center">%userName%</h3><p class="text-center">Offline</p></div></div></div></div></a></div>';
var onlineDiv = '<div id="%userName%" class="col-md-3 col-sm-6 col-xs-12 showOnline"><a href="%streamurl%"><div class="thumbnail"><img src="%twitchImage%" alt="Preview of %userName% channel" /><div class="caption"><div class="row"><div class="col-xs-4 col-xs-offset-4"><img class="img-responsive img-circle twitchLogo" src="%logoURL%"</div></div><div class="row"><div class="col-xs-12"><h3 class="text-center">%userName%</h3><p class="text-center">%twitchUserStatus%</p></div></div></div></div></a></div>';
function closedAccount(user) {
	formattedClosedAccountDiv = closedAccountDiv.replace(/%userName%/g, user);
	$('#twitchClosed').append(formattedClosedAccountDiv);
}
function offlineAccount(user) {
	formattedOfflineTwitchString = offlineTwitchString.replace(/%userName%/g, user).replace(/%twitchID%/g, twitchID);
	$.getJSON(formattedOfflineTwitchString, function(offlineData) {
		console.log(offlineData);
		var twitchImage;
		if (offlineData.profile_banner !== null) {
			twitchImage = offlineData.profile_banner;
		} else {
			twitchImage = "./images/offline.jpg";
		}
		formattedOfflineDiv = offlineDiv.replace(/%userName%/g, user).replace(/%logoURL%/g, offlineData.logo).replace(/%twitchImage%/g, twitchImage);
		$('#twitchOffline').append(formattedOfflineDiv);
	});
}
function onlineAccount(user, data) {
	formattedOnlineDiv = onlineDiv.replace(/%userName%/g, data.stream.channel.display_name).replace(/%logoURL%/g, data.stream.channel.logo).replace(/%twitchImage%/g, data.stream.preview.large).replace(/%streamurl%/g, data.stream._links.self).replace(/%twitchUserStatus%/g, data.stream.game);
	$('#twitchOnline').append(formattedOnlineDiv);
}
function twitchTV() {
	console.log(twitchUsersArray);
	twitchUsersArray.forEach(function(userItem, index) {
		console.log("userItem = " + userItem);
		console.log("index = " + index);
		formattedTwitchString = twitchString.replace(/%userName%/, userItem).replace(/%twitchID%/g, twitchID);
		$.getJSON(formattedTwitchString, function(twitchData) {
			console.log(twitchData);
			if (twitchData.status === 404) {
				closedAccount(userItem);
			} else if (twitchData.hasOwnProperty('stream') && twitchData.stream === null) {
				offlineAccount(userItem);
			} else if (twitchData.hasOwnProperty('stream') && twitchData.stream !== null) {
				onlineAccount(userItem, twitchData);
			}
		});
	});
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
	$('#resultsBtn').click(function(event) {
		console.log('Clicked "Submit"');
		var searchQuery = document.getElementById('inputSearch').value.replace(/</, '&lt;').replace(/>/, '&gt;').replace(/&/, '&amp;').replace(/"/, '&quot;').replace(/'/, '&#x27;').replace(/\//, '&#x2F');
		console.log('Search term: ' + searchQuery);
		$('.showOnline').fadeOut();
		$('.showOffline').fadeOut();
		if (document.getElementById(searchQuery) !== undefined) {
			$('#' + searchQuery).fadeIn();
		}
	});
/*	console.log('Entering TwitchTV function.');
	$('#resultsBtn').click(function(event) {
		console.log('Clicked "Submit"');
		console.log($('#inputSearch').value);
		var searchResult = $('#inputSearch').value;
		console.log(searchResult);
		var formattedTwitchString, formattedOfflineTwitchString, formattedClosedAccountDiv, formattedOnlineDiv, formattedOfflineDiv;
		formattedTwitchString = twitchString.replace(/%twitchID%/g, twitchID);
		$.getJSON(formattedTwitchString, function(twitchData) {
			console.log(searchResult);
			console.log(twitchData);
			if (twitchData.status === 404) {
				formattedClosedAccountDiv = closedAccountDiv.replace(/%userName%/g, searchResult);
				$('#twitchBox').append(formattedClosedAccountDiv);
			} else if (twitchData.hasOwnProperty('stream') && twitchData.stream === null) {
				formattedOfflineTwitchString = offlineTwitchString.replace(/%userName%/g, searchResult).replace(/%twitchID%/g, twitchID);
				$.getJSON(formattedOfflineTwitchString, function(offlineData) {
					formattedOfflineDiv = offlineDiv.replace(/%userName%/g, searchResult).replace(/%logourl%/g, offlineData.logo);
					$('#twitchBox').append(formattedOfflineDiv);
				});
			} else if (twitchData.hasOwnProperty('stream') && twitchData.stream !== null) {
				formattedOnlineDiv = onlineDiv.replace(/%userName%/g, searchResult).replace(/%logourl%/g, twitchData.stream.channel.logo).replace(/%twitchImage%/g, twitchData.stream.preview.large).replace(/%streamurl%/g, twitchData.stream._links.self).replace(/%twitchUserStatus%/g, twitchData.stream.game);
				$('#twitchBox').append(formattedOnlineDiv);
			}
		});
	});
	*/
}
twitchTV();
$(document).ready(function() {
});