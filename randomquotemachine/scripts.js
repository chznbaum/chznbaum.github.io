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
    ["Art is either plagiarism or revolution.", "Paul Ganguin", "https://upload.wikimedia.org/wikipedia/commons/7/73/Paul_Gauguin_056.jpg"],
    ["Happiness is not something you postpone for the future; it is something you design for the present.", "Jim Rohn", "https://i.ytimg.com/vi/MggMYrfpgLw/maxresdefault.jpg"],
    ["The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", "Helen Keller", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Helen_Keller_cph.3b07695.jpg/1280px-Helen_Keller_cph.3b07695.jpg"],
    ["I can't change the direction of the wind, but I can adjust my sails to always reach my destination", "Jimmy Dean", "http://images1.mtv.com/uri/mgid:file:docroot:mtv.com:/crop-images/2013/08/22/Jimmy%20Dean%20Getty%20Stephen%20Rose%201996.jpg"],
    ["Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.", "Francis of Assisi", "https://upload.wikimedia.org/wikipedia/commons/2/2e/Saint_Francis_of_Assisi_Receiving_the_Stigmata.jpg"],
    ["Keep your face always toward the sunshine - and shadows will fall behind you.", "Walt Whitman", "https://upload.wikimedia.org/wikipedia/commons/0/0d/Walt_Whitman_photographed_by_Thomas_Eakins.jpg"],
    ["What we think, we become.", "Buddha", "http://www.publicdomainpictures.net/pictures/130000/velka/face-buddha.jpg"],
    ["Try to be a rainbow in someone's cloud.", "Maya Angelou", "https://upload.wikimedia.org/wikipedia/commons/b/b4/Angelou_at_Clinton_inauguration.jpg"],
    ["Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.", "Steve Jobs", "https://upload.wikimedia.org/wikipedia/commons/b/bc/Steve_Jobs_at_Apple_iPad_Event.jpg"],
    ["Perfection is not attainable, but if we chase perfection we can catch excellence.", "Vince Lombardi", "http://a.espncdn.com/photo/2013/0502/nfl_lombardi_01.jpg"],
    ["We know what we are, but know not what we may be.", "William Shakespeare", "http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/10/31/1414778447153/William-Shakespeare-014.jpg"],
    ["Nothing is impossible, the word itself says 'I'm possible'!", "Audrey Hepburn", "http://wfiles.brothersoft.com/a/audrey_hepburn_69151-1400x1050.jpg"],
    ["It is during our darkest moments that we must focus to see the light.", "Aristotle Onassis", "http://media.web.britannica.com/eb-media/96/68596-050-C6F9AD78.jpg"],
    ["Change your thoughts and you change your world.", "Norman Vincent Peale", "http://www.investors.com/wp-content/uploads/2016/02/LSpentPic_Peale.jpg"],
    ["We must let go of the life we have planned, so as to accept the one that is waiting for us.", "Joseph Campbell", "http://www.awaken.com/wp-content/uploads/2013/07/highres_53159344.jpg"],
    ["Put your heart, mind, and soul into even your smallest acts. This is the secret of success.", "Swami Sivananda", "http://www.dlshq.org/saints/siva_mmedia/siva5.jpg"]
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