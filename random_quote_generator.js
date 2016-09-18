navDisplay();
$('#home').append(HTMLquoteTagsDrop);
addToPage('#home', HTMLsearchBox, 'Search Quotes');
var quoteTagsArray = []
for (speaker in quotes.speakers) {
    if (quotes.speakers[speaker].quotes.length > 0) {
        for (quote in quotes.speakers[speaker].quotes) {
            if (quotes.speakers[speaker].quotes[quote].tags.length > 0) {
                for (tag in quotes.speakers[speaker].quotes[quote].tags) {
                    quoteTagsArray.push(quotes.speakers[speaker].quotes[quote].tags[tag]);
                }
            }
        }   
    }
}
quoteTagsArray = quoteTagsArray.sort();
var uniqueTagArray = [];
$.each(quoteTagsArray, function(i, value) {
    if($.inArray(value, uniqueTagArray) === -1) uniqueTagArray.push(value);
});
var titleCaseTagArray = titleCaseArray(uniqueTagArray);
for(tag in uniqueTagArray) {
    addToPage($('.quoteTags:last'), HTMLquoteTagsEach, uniqueTagArray[tag]);
}
$('#quoteBox').append(HTMLquoteStart);
var helpTitle = 'Random Quote Generator Help';
modalText('#quoteBox', helpTitle, helpModal(HTMLhelpBox, 'random_quote_generator', 'quote'));
$('#quoteBox').append(HTMLquoteButtons);
footer.display();
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
    var prevQuotesArray = [];
    $('#btnNewQuote').on('click', function() {
        var citationIndex = randomizer(quotes.speakers.length);
        var quoteIndex = randomizer(quotes.speakers[citationIndex].quotes.length);
        var formatted = HTMLquoteItem.replace(/%quote%/g, quotes.speakers[citationIndex].quotes[quoteIndex].quoteText);
        formatted = formatted.replace(/%citation%/g, quotes.speakers[citationIndex].speaker);
        var formattedImg = HTMLquoteImage.replace(/%imgurl%/g, quotes.speakers[citationIndex].image);
        $('#quoteBlock').html(formatted);
        $('#image').html(formattedImg);
        prevQuotesArray.push(formatted);
    });
    $('#btnPreviousQuote').on('click', function() {
        if (prevQuotesArray.length > 0) {
            $('#previousQuotes').html(HTMLpreviousQuotes);
            for (item in prevQuotesArray) {
                $('.previousQuotes:last').append(prevQuotesArray[item]);
            }
        } else {
            $('#previousQuotes').html(HTMLerrorNoQuotes);
        }
    });
    $('#btnTagClick').click(function(event) {
        var selectedTag;
        selectedTag = $('#quoteTags option:selected').text();
        selectedTagArray = [];
        for (speaker in quotes.speakers) {
            if (quotes.speakers[speaker].quotes.length > 0) {
                for (quote in quotes.speakers[speaker].quotes) {
                    if (quotes.speakers[speaker].quotes[quote].tags.length > 0) {
                        for (tag in quotes.speakers[speaker].quotes[quote].tags) {
                            if (quotes.speakers[speaker].quotes[quote].tags[tag] == selectedTag) {
                                var formatted = HTMLquoteItem.replace(/%quote%/g, quotes.speakers[speaker].quotes[quote].quoteText);
                                formatted = formatted.replace(/%citation%/g, quotes.speakers[speaker].speaker);
                                selectedTagArray.push(formatted);
                            }
                        }
                    }
                }   
            }
        }
        var formattedQuoteResults = HTMLquoteResults.replace(/%data%/g, selectedTag);
        $('#resultsBox').html(formattedQuoteResults);
        for (item in selectedTagArray) {
            $('#resultsBlock').append(selectedTagArray[item]);
        }
    });
    $('#resultsBtn').click(function(event) {
        var searchQuery = document.getElementById('inputSearch').value.replace(/</, '&lt;').replace(/>/, '&gt;').replace(/&/, '&amp;').replace(/"/, '&quot;').replace(/'/, '&#x27;').replace(/\//, '&#x2F');
        var resultsArray = [];
        for (speaker in quotes.speakers) {
            if (quotes.speakers[speaker].quotes.length > 0) {
                for (quote in quotes.speakers[speaker].quotes) {
                    var searchIndex;
                    console.log(searchQuery);
                    console.log(quotes.speakers[speaker].quotes[quote].quoteText);
                    searchIndex = quotes.speakers[speaker].quotes[quote].quoteText.search(searchQuery);
                    console.log(searchIndex);
                    if (searchIndex != -1) {
                        var formatted = HTMLquoteItem.replace(/%quote%/g, quotes.speakers[speaker].quotes[quote].quoteText);
                        formatted = formatted.replace(/%citation%/g, quotes.speakers[speaker].speaker);
                        resultsArray.push(formatted);
                    }
                }
            }
        }
        var formattedSearchResults = HTMLsearchResults.replace(/%data%/g, searchQuery);
        $('#resultsBox').html(formattedSearchResults);
        for (item in resultsArray) {
            $('#resultsBlock').append(resultsArray[item]);
        }
    });
    var twitter = 'http://twitter.com/intent/tweet?';
    var facebook = 'http://www.facebook.com/sharer.php?'
    function socialShare(site, status) {
        window.open(site + status);
    }
    $('#btnTweetQuote').click(function(event) {
        var twitterStatus = 'hashtags=quotes&related=freecodecamp&text=' + $('#quoteBlock').text();
        socialShare(twitter, twitterStatus);
    });
    $('#btnFacebookQuote').click(function(event) {
        var facebookStatus = 's=100&p[title]=Quote&p[url]=http://anotherconsolelog.com/random_quote_generator.html&p[summary]=' + $('#quoteBlock').text();
        socialShare(facebook, facebookStatus);
    })
});