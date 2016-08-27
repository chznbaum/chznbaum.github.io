// Scrollspy
function scrollSpy() {
	$('body').scrollspy({target: ".navbar", offset: 50});
	$("#mynavbar a").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$("html, body").animate({scrollTop: $(hash).offset().top}, 800, function() {
				window.location.hash = hash;
			});
		}
	});
};
// Quote Machine
function quoteMachine() {
	$.getJSON("https://chznbaum.github.io/randomquotemachine/quotes.json", function(quotes) {
		var maxID = quotes.length -1;
		var minID = 0;
		var quoteID = 0;
		$("#btnNewQuote").on('click', function() {
			console.log(quotes);
			quoteID = Math.floor(Math.random() * (maxID - minID + 1) + minID);
			var quoteText = quotes[quoteID].quote;
			var quoteCite = quotes[quoteID].quote;
			$("#quoteBlock").html("<p>\"" + quoteText + "\"<p><footer> -" + quoteCite + "</footer>");
			var quoteImg = quotes[quoteID].photo;
			document.body.style.backgroundImage = "url(" + quoteImg + ")";
		});
		$("#btnTweetQuote").on('click', function() {
			window.open("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + $("#quoteBlock").text());
		});
	});
};