// When document loads
$(document).ready(function() {
  // Declare variables for randomizer
  var maxID = quoteList.length - 1;
  var minID = 0;
  var quoteID = 0;
  //Randomize which quote is selected
  $("#btnNewQuote").on("click", function() {
    quoteID = Math.floor(Math.random() * (maxID - minID + 1) + minID);
    // Set blockquote text and citation as the randomized values
    var quoteText = quoteList[quoteID][0];
    var quoteCite = quoteList[quoteID][1];
    $("#quoteBlock").html("<p>\"" + quoteText + "\"</p><footer> -" + quoteCite + "</footer>");
    // Change background image to image of quote citation
    var imgValue = quoteList[quoteID][2];
    document.body.style.backgroundImage = "url(" + imgValue +")";
  });
    // On click TweetQuote button, display tweet intent with quote text applied
  $("#btnTweetQuote").on("click", function() {
    window.open("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + $("#quoteBlock").text());
  });  
});