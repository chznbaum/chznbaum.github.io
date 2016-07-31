// Twitter Widget    
    window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
  return t;
}(document, "script", "twitter-wjs"));
// When document loads
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
  // Array of quotes, citations and images
  var quoteList = [
    ["Art is either plagiarism or revolution.", "Paul Gauguin", "../images/paulgauguin.jpg"],
    ["Happiness is not something you postpone for the future; it is something you design for the present.", "Jim Rohn", "../images/jimrohn.jpg"],
    ["The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", "Helen Keller", "../images/helenkeller.jpg"],
    ["I can't change the direction of the wind, but I can adjust my sails to always reach my destination", "Jimmy Dean", "../images/jimmydean.jpg"],
    ["Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.", "Francis of Assisi", "../images/francisofassisi.jpg"],
    ["Keep your face always toward the sunshine - and shadows will fall behind you.", "Walt Whitman", "../images/waltwhitman.jpg"],
    ["What we think, we become.", "Buddha", "../images/buddha.jpg"],
    ["Try to be a rainbow in someone's cloud.", "Maya Angelou", "../images/mayaangelou.jpg"],
    ["Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.", "Steve Jobs", "../images/stevejobs.jpg"],
    ["Perfection is not attainable, but if we chase perfection we can catch excellence.", "Vince Lombardi", "../images/vincelombardi.jpg"],
    ["We know what we are, but know not what we may be.", "William Shakespeare", "../images/williamshakespeare.jpg"],
    ["Nothing is impossible, the word itself says 'I'm possible'!", "Audrey Hepburn", "../images/audreyhepburn.jpg"],
    ["It is during our darkest moments that we must focus to see the light.", "Aristotle Onassis", "../images/aristotleonassis.jpg"],
    ["Change your thoughts and you change your world.", "Norman Vincent Peale", "../images/normanvincentpeale.jpg"],
    ["We must let go of the life we have planned, so as to accept the one that is waiting for us.", "Joseph Campbell", "../images/josephcampbell.jpg"],
    ["Put your heart, mind, and soul into even your smallest acts. This is the secret of success.", "Swami Sivananda", "../images/swamisivananda.jpg"]
  ]
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
    $("#quoteBlock").html("<p>\"" + quoteText + "\"</p><footer>" + quoteCite + "</footer>");
    // Change background image to image of quote citation
    var imgValue = quoteList[quoteID][2];
    document.body.style.backgroundImage = "url(" + imgValue +")";
  });
    // On click TweetQuote button, display tweet intent with quote text applied
  $("#btnTweetQuote").on("click", function() {
    window.open("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + $("#quoteBlock").text());
  });  
});