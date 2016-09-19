/*
HTML strings
*/

var HTMLnavbarNav = '<div class="container-fluid><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mynavbar"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="%url%">%title%</a></div><div class="collapse navbar-collapse" id="mynavbar"><ul class="nav navbar-nav navbar-right" id="navbar-items"></ul></div></div>';
var HTMLanchorItem = '<li><a href="%url%">%title%</a></li>';
var HTMLportfolioNav = '<li role="presentation" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" data-target="#" href="#portfolio" role="button" aria-haspopup="true" aria-expanded="false">%title%<span class="caret"></span></a><ul class="dropdown-menu" id="portfolio-items"></ul></li>';

var HTMLheaderName = '<h1 id="name" class="text-center">%data%</h1>';
var HTMLheaderHeadline = '<p class="text-center">%data%</p><hr>';
var HTMLfooter = '<hr><p class="text-center"><a href="%url%">%name%</a> &#169 2016. All Rights Reserved. <a href="%privurl%">Privacy Policy</a></p>'

var HTMLcontactGeneric = '<li class="contact-item">%contact% %data%</li>';
var HTMLContactBlurb = '<p class="lead">%data%</p>';
var HTMLcontactIcons = '<li class="contact-item"><span class="fa %title%"></span> %data%</li>'
var HTMLmobile = '<li class="contact-item">mobile %data%</li>';
var HTMLemail = '<li class="contact-item">email %data%</li>';
var HTMLlinkedin = '<li class="contact-item">linkedin %data% </li>';
var HTMLtwitter = '<li class="contact-item">twitter %data%</li>';
var HTMLgithub = '<li class="contact-item">github %data%</li>';
var HTMLblog = '<li class="contact-item">blog %data%</li>';
var HTMLlocation = '<li class="contact-item">location %data%</li>';

var HTMLcontactFormStart = '<form action="https://docs.google.com/forms/u/1/d/12DqhH2BxLz6ESSYmnKRgpjBFQGHWvk3GPkW5jSynh7M/formResponse" enctype="text/plain" name="contactform" id="contactform" target="hidden_iframe" onsubmit="submitted=true;"><fieldset><div id="form-item"></div></fieldset></form><iframe name="hidden_iframe" id="hidden_iframe" onload="if(submitted) {}"></iframe>';
var HTMLformItem = '<div class="form-group"><label for="%formitemid%">%label%</label><input type="%inputtype%" class="form-control" name="%formitemid%" id="%formitemid%" placeholder="%placeholder%" required></div>';
var HTMLtextarea = '<div class="form-group"><label for="%formitemid%">%label%</label><textarea class="form-control" name="%formitemid%" id="%formitemid%" placeholder="%placeholder%" rows="5" required></textarea></div>';
var HTMLsubmitReset = '<input type="submit" class="btn btn-default" role="button" value="Submit" /><input type="reset" class="btn btn-default" role="button" value="Reset" />';

var HTMLbioPic = '<img src="%data%" class="biopic img-responsive img-circle center-block">';
var HTMLhelpButton = '<button type="button" class="btn btn-link btn-lg center-block" data-toggle="modal" data-target="#helpModal">Need help?</button>'
var HTMLwelcomeMsg = '<p class="text-center">%data%</p>';
var HTMLblurb = '<p class="lead">%data%</p>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills"></ul>';
var HTMLskills = '<li class="skills-item"><i class="%data%"></i></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%" class="img-responsive">';

var HTMLportfolioStart = '<div class="row portfolio-each"></div>';
var HTMLportfolioEach = '<div class="col-xs-12 col-s-6 col-md-3"><div class="thumbnail"><img src="%imgurl%" alt="Screenshot of %title%" /><div class="caption"><h3 class="text-center">%title%</h3><p class="text-center">%description%</p><p><a href="%url%" class="btn btn-primary btn-block">View Project</a></p></div></div></div>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var HTMLquoteStart = '<div class="row"><h1 class="text-center">Random Quote Generator</h1></div><div class="row"><p class="lead text-center">curated by Chazona Baum</p><p class="lead text-center">Click below to enjoy a different quote for endless motivation.</p>' + HTMLhelpButton + '<div id="image"></div></div><div class="row"><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12"><blockquote class="blockquote" id="quoteBlock"></blockquote></div></div>';
var HTMLquoteButtons = '<div class="row"><div class="col-md-6 col-md-offset-3 col-xs-12"><button class="btn btn-primary btn-block btn-lg" id = "btnNewQuote">Generate Random Quote</button></div></div><div class="row"><div class="col-md-3 col-md-offset-3 col-xs-12"><button class="btn btn-default btn-block btn-lg" id="btnTweetQuote"><i class="fa fa-twitter"></i> Tweet this Quote</button></div><div class="col-md-3 col-xs-12"><button class="btn btn-default btn-block btn-lg" id="btnFacebookQuote"><i class="fa fa-facebook-square"></i> Share the Generator</button></div></div><div class="row"><div class="col-md-6 col-md-offset-3 col-xs-12"><button class="btn btn-default btn-block btn-lg" id = "btnPreviousQuote">Show Previous Quotes</button></div></div>';
var HTMLquoteImage = '<img src="%imgurl%" class="quotePic img-responsive img-circle center-block" />';
var HTMLquoteItem = '<p><span class="fa fa-quote-left"></span> %quote% <span class="fa fa-quote-right"></span></p><footer>%citation%</footer>';
var HTMLpreviousQuotes = '<div class="row"><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12"><h3>You previously generated:</h3></div><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12"><blockquote class="previousQuotes"></blockquote></div></div>';
var HTMLgenericError = '<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true"><span class="fa fa-times-circle-o"></span></span></button>%errorMessage%<button type="button" class="btn btn-danger" data-dismiss="alert">Close</button></div>';
var HTMLerrorNoQuotes = HTMLgenericError.replace(/%errorMessage%/g, '<h4>Hey, there aren\'t any quotes here!</h4><p>No quotes have been generated, so there\'s nothing to display. How about generating a quote?</p>');
var HTMLquoteTagsDrop = '<div class="row"><div class="col-md-4 col-md-offset-3 col-sm-8 col-xs-6"><div class="dropdown"><select id="quoteTags" class="quoteTags form-control input-lg"></select></div></div><div class="col-md-2 col-sm-4 col-xs-6"><button id="btnTagClick" type="button" class="btn btn-default btn-block btn-lg">Choose Tag</button></div></div></div>';
var HTMLquoteTagsEach = '<option value="%data%">%data%</option>'
var HTMLquoteResults = '<div class="row"><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12"><h3>Quotes tagged "%data%":</h3></div><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12"><blockquote class="blockquote" id="resultsBlock"></blockquote></div></div>';

var HTMLsearchBox = '<div class="row"><div class="col-md-4 col-md-offset-3 col-sm-8 col-xs-6"><input type="search" class="form-control input-lg" placeholder="Search" id="inputSearch" aria-label="Search" /></div><div class="col-md-2 col-sm-4 col-xs-6"><button class="btn btn-default btn-block btn-lg" id="resultsBtn">%data%</button></div></div>';
var HTMLsearchResults = '<div class="row"><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12"><h3>Quotes containing your search term, "%data%":</h3></div><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12"><blockquote class="blockquote" id="resultsBlock"></blockquote></div></div>';

var HTMLhelpModal = '<div class="modal fade" tabindex="-1" id="helpModal" role="dialog" aria-labelledby="helpModalLabel"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><span class="fa fa-times-circle-o"></span></span></button><h4 class="modal-title" id="helpModalLabel">%title%</h4></div><div class="modal-body">%data%</div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';
var HTMLhelpBox = '<h3>Frequently Asked Questions:</h3><div class="panel-group faq-item" id="helpAccordion" role="tablist" aria-multiselectable="true">';
var HTMLquoteHelpText = '<div class="panel panel-default"><div class="panel-heading" role="tab" id="%heading%"><h4 class="panel-title"><a class="collapsed" role="button" data-toggle="collapse" data-parent="#helpAccordion" href="#%collapseid%" aria-expanded="true" aria-controls="%collapseid%">%question%</a></h4></div><div id="%collapseid%" class="panel-collapse collapse" role="tabpanel" aria-labelledby="%heading%"><div class="panel-body">%answer%</div></div></div>';

var HTMLwikipediaStart = '<div class="row"><div class="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 col-xs-12"><h1 class="text-center">Wikipedia Viewer</h1><input type="search" class="form-control input-lg" placeholder="Search" id="inputSearch" aria-label="Search" /><div class="row" id="btnRow"><div class="col-md-6 col-sm-6 col-xs-12"><button class="btn btn-default btn-block btn-lg" id="resultsBtn">View Results</button></div><div class="col-md-6 col-sm-6 col-xs-12"><button class="btn btn-default btn-block btn-lg" id="randomBtn">View Random Page</button></div></div></div></div>';
var HTMLwikipediaResultsStart = '<div class="row"><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12"><dl id="showResults"></dl></div></div>';

var HTMLtributeCarousel = '<div id="carousel-tribute-quote" class="carousel slide" data-ride="carousel"></div>';
var HTMLtributeCarouselItem = '<div class="carousel-inner" role="listbox"><div class="item"><div class="carousel-caption"><blockquote><span class="fa fa-quote-left"></span>%quote%<span class="fa fa-quote-right"></span><footer>%citation%</footer></blockquote></div></div></div>';

var HTMLweatherSetUp = '<div class="row"><div class="col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1" id="weatherBox"><h1 class="text-center">Local Weather App</h1><p class="text-center lead" id="currentLocation">City, State, Country</p><div id="weatherImage"></div><p class="text-center lead">Currently: <span id="weatherTemp">0</span><span id="degreeSym1">&#8457</span></p><p class="text-center lead">Feels like: <span id="feelsLikeTemp">0</span><span id="degreeSym2">&#8457</span></p><p class="text-center lead" id="weatherDescrip">Local weather</p><button class="btn btn-lg center-block btn-primary" id="convertBtn">Convert &#8457 / &#8451</button></div></div>';
var geoAPI = 'AIzaSyDC6U1aZXcePTAR20iwRKIuJ26LqXX6t5s';
var geoString = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=%latitude%,%longitude%&key=%geoAPI%';
var weatherKey = '56e678830a6e621a5f38e1b43296e432';
var weatherStr = 'https://api.forecast.io/forecast/%weatherKey%/%latitude%,%longitude%?callback=?';
var HTMLweatherNavigatorError = HTMLgenericError.replace(/%errorMessage%/g, '<h4>Aww, shucks...</h4><p>Geolocation is not supported by your browser.</p>');
var HTMLweatherPositionError = HTMLgenericError.replace(/%errorMessage%/g, '<h4>We tried...</h4><p>Unable to retrieve your location.</p>');
var HTMLlocatingMessage = '<p class="text-center lead">Locating...<i class="fa fa-spinner fa-spin"></i></p>';

var HTMLtwitchSetUp = '<div class="row" id="pagetitle"><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1"><h1 class="text-center">Twitch TV JSON API</h1></div></div><div class="row" id="toggleSwitches"><div class="col-md-4 col-md-offset-4 col-sm-12"><div class="row"><div class="col-md-4"><button class="btn btn-default btn-block btn-lg" role="button" id="allButton">All</button></div><div class="col-md-4"><button class="btn btn-default btn-block btn-lg" role="button" id="onlineButton">Online</button></div><div class="col-md-4"><button class="btn btn-default btn-block btn-lg" role="button" id="offlineButton">Offline</button></div></div><div id="searchRow"></div></div></div>';
var HTMLtwitchResults = '<div class="row" id="twitchAccounts"><div class="col-md-12"><div class="row" id="twitchBox"></div></div></div>';
var twitchID = 'd6aqc5tx14y8xmy1ckjknsiux94cw2u';

var submitted = false;

var twitchUsersArray = [
"ESL_SC2",
"OgamingSC2",
"cretetion",
"freecodecamp",
"storbeck",
"habathcx",
"RobotCaleb",
"noobs2ninjas",
"brunofin",
"comster404",
"GeekandSundry",
"Di3seL",
"VGBootCamp",
"PJDiCesare",
"jcarverpoker",
"Ninja",
"Kacey",
"Hafu",
"Tara",
"Wyld",
"PhoenixCrashGaming",
"StrayMav",
"SpeakToTheDoc",
"PandaPlaysHD",
"SykeonRoa",
"ESL_CSGO",
"MushIsGosu",
"Trick2g",
"DreamhackCS",
"TSM_TheOddOne",
"GamesDoneQuick",
"Voyboy",
"Monstercat",
"KingGothalion",
"Reckful",
"Froggen",
"StreamerHouse",
"kaceytron",
"ESL_LOL",
"itsHafu",
"Scarra",
"Mrtweeday",
"ZeeooN",
"BrownMan",
"Krepo",
"YoDa",
"EatMyDiction1",
"Admiral_Bahroo",
"steel_tv",
"Fairlight_Excalibur",
"rsgloryandgold",
"CobaltStreak",
"Alexich",
"SeriousGaming",
"MasterSnakou",
"Slyfoxhound",
"WagamamaTV",
"wtcNN",
"BehkuhTV",
"flOm",
"Koopatroopa787",
"Quin69",
"BonnieDoll",
"Mhova",
"Jendenise",
"zai",
"justfoxii",
"julia_tv"
]

var projects = {
	"projects" : [
	{
		"title" : "Tribute Page",
		"dates" : "July 2016",
 		"description" : "A tribute page in honor of Jane Addams, an influential author, suffragette, and social work pioneer, created in HTML and CSS.",
 		"keywords" : [
 		"Jane Addams",
 		"social work",
 		"womens suffrage",
 		"tribute page"
 		],
 		"url" : "./tribute_page.html",
 		"images" : ["./images/tributepage.jpg"]
 	},
 	{
 		"title" : "Personal Portfolio",
 		"dates" : "July 2016",
 		"description" : "A personal portfolio page highlighting recent projects, created with HTML, CSS and client-side JavaScript.",
 		"keywords" : [
 		"portfolio",
 		"web development",
 		"html",
 		"css",
 		"javascript",
 		"jquery",
 		"projects",
 		"computer programming",
 		"code"
 		],
 		"url" : "./index.html",
 		"images" : ["./images/portfolio01.png", "images/portfolio02.png", "images/portfolio03.png", "images/portfolio04.png"]
 	},
 	{
 		"title" : "Random Quote Generator",
 		"dates" : "July 2016",
 		"description" : "A generator that provides random inspirational quotes to the user, created with HTML, CSS and client-side JavaScript.",
 		"keywords" : [
 		"quotes",
 		"randomizer"
 		],
 		"url" : "./random_quote_generator.html",
 		"images" : ["./images/RandomQuote01.PNG", "images/RandomQuote02.PNG", "images/RandomQuote03.PNG", "images/RandomQuote04.PNG"]
 	},
 	{
 		"title" : "Local Weather App",
 		"dates" : "July 2016",
 		"description" : "A web app that displays the weather at the user's location, and adjusts the graphical display accordingly, created with HTML, CSS, client-side JavaScript and APIs.",
 		"keywords" : [
 		"weather",
 		"local",
 		"forecast"
 		],
 		"url" : "./local_weather_app.html",
 		"images" : ["./images/localweatherapp.jpg"]
 	},
 	{
 		"title" : "Wikipedia Viewer",
 		"dates" : "July 2016",
 		"description" : "A web tool that allows the user to search for and view relevant Wikipedia entries or view a random Wikipedia entry, created with HTML, CSS, client-side JavaScript and APIs.",
 		"keywords" : [
 		"Wikipedia",
 		"search",
 		"randomizer"
 		],
 		"url" : "./wikipedia_viewer.html",
 		"images" : ["./images/wikiviewer.jpg"]
 	},
 	{
 		"title" : "Twitch TV JSON API",
 		"dates" : "August 2016",
 		"description" : "A web tool which allows the user to check if various Twitch live-streamers are broadcasting and to view their content, created with HTML, CSS, client-side JavaScript and APIs.",
 		"keywords" : [
 		"TwitchTV",
 		"streaming"
 		],
 		"url" : "./twitch_tv_json_api.html",
 		"images" : ["./images/twitchtvjsonapi.JPG"]
 	},
 	{
 		"title" : "Free Food Game",
 		"dates" : "August 2016",
 		"description" : "A simple falling objects game made with Scratch. Using the left and right keys to control the protagonist, catch as many fruit as you can without being hit by the school's musical instruments.",
 		"keywords" : [
 		"online game",
 		"falling objects",
 		"school"
 		],
 		"url" : "https://scratch.mit.edu/projects/119382473/",
 		"images" : ["./images/freefoodgame.png"]
 	},
 	{
 		"title" : "Personal Resume",
 		"dates" : "August 2016",
 		"description" : "An easily edited personal resume, created with HTML, CSS and client-side JavaScript.",
 		"keywords" : [
 		"resume",
 		"web development",
 		"html",
 		"css",
 		"javascript",
 		"jquery",
 		"git",
 		"github",
 		"bash",
 		"ruby",
 		"computer programming",
 		"code"
 		],
 		"url" : "./resume.html",
 		"images" : ["./images/resume02.png"]
 	}
 	]
};
var work = {
	"jobs" : [
	{
 		"employer" : "Midlothian Code",
 		"title" : "Volunteer Community Manager",
 		"location" : "Midlothian, VA",
 		"dates" : "August 2016 - Present",
 		"description" : "As founder and voluntary local leader for aspiring coders in Midlothian, VA, I am responsible for member growth and engagement in face-to-face events with other budding developers such as Coffee and Code and Hackathon, to ensure a deeper understanding of and appreciation for code. I also provide updates on tech and IT news or useful sources of information on full stack development."
 	},
 	{
 		"employer" : "GEICO",
 		"title" : "Licensed Insurance Agent",
 		"location" : "Virginia Beach, VA",
 		"dates" : "March 2014 - August 2015",
 		"description" : "I assisted members of the armed forces with between 30-90 auto insurance queries daily, including handling state-to-state PCS moves and separating the policies of divorced policyholders. I held multiple state licenses and practiced in over 30 states, taking care to follow the differing regulations of each state. During my tenure, two of my phone calls were recognized among my department as examples of excellent framework; one was put in extended storage for use in training new agents, while the other was used in monthly training for existing agents. As part of a group of 4 agents selected from 151, I also helped create recorded materials to train agents on framework structure under a new VOIP system."
 	},
 	{
 		"employer" : "Sonic Drive-In",
 		"title" : "Certified Assistant Manager",
 		"location" : "Norfolk, VA",
 		"dates" : "September 2012 - February 2014",
 		"description" : "I led teams in three locations to satisfy customer requests over busy rush periods and, as a ServSafe certified Food Protection Manager, ensured compliance with food safety requirements. I was the initial decision-maker in crisis situations involving fires, injuries and law enforcement altercations, and used judgment to ensure the safety of my team. In addition, I was selected for a company-sponsored Assistant Manager Certification training to bring innovative ideas back to my team and be better prepared for more senior management opportunities."
 	},
 	{
 		"employer" : "7-Eleven",
 		"title" : "Senior Sales Associate",
 		"location" : "Norfolk, VA",
 		"dates" : "May 2013 - August 2013",
 		"description" : "I contributed to an efficient retail sales environment while ensuring store compliance with food, alcohol and gasoline sale regulations and maintaining a positive business relationship with law enforcement."
 	},
 	{
 		"employer" : "Banfield Pet Hospital",
 		"title" : "Client Service Coordinator",
 		"location" : "Norfolk, VA",
 		"dates" : "August 2009 - December 2011",
 		"description" : "As a public face of the brand, I shaped the initial and final impressions of pet parents as I set expectations and guided them through the hospital process. I created treatment plans, filled prescriptions, and assisted clients in understanding both in more understandable terms. In addition, I provided assistance to clients who only spoke Spanish so they could navigate a potentially confusing ordeal."
 	}
 	]
};
var bio = {
 	"name" : "Chazona Baum",
 	"role" : "Web Development Student",
 	"welcomeMessage" : "Hello world!",
 	"biopic" : "images/chazonabaum.JPG",
 	"blurbs" : [
 	"My name is Chazona Baum, I'm 28 and a self-taught JavaScript developer with two kids. My experiences in life have been incredibly diverse, and I've worked in industries ranging from food to veterinary medicine to insurance. When I'm not studying, writing or refactoring code, leading my local coding group, or wrangling my rambunctious kids, I enjoy scenic walks and sweet iced tea.",
 	"The unique worldview I've cultivated puts me in a excellent frame of mind to solve complex challenges and find common ground. With a passion for creating, a hunger for knowledge, and an unbreakable resiliency, I tend to make an impression. Want to know what I would be like to work with?"
 	],
 	"contacts" : {
 		"contactInfo" : [
 		{
 			"name" : "mobile",
 			"fontAwesome" : "fa-mobile",
 			"description" : "(757)617-6964"
 		},
 		{
 			"name" : "email",
 			"fontAwesome" : "fa-envelope-o",
 			"description" : "chazona@anotherconsolelog.com"
 		},
 		{
 			"name" : "website",
 			"fontAwesome" : "fa-desktop",
 			"description" : "anotherconsolelog.com"
 		},
 		{
 			"name" : "linkedin",
 			"fontAwesome" : "fa-linkedin-square",
 			"description" : "chznbaum"
 		},
 		{
 			"name" : "github",
 			"fontAwesome" : "fa-github-square",
 			"description" : "chznbaum"
 		},
 		{
 			"name" : "twitter",
 			"fontAwesome" : "fa-twitter-square",
 			"description" : "@otherconsolelog"
 		}
 		],
 		"contactBlurbs" : [
 		"Feel free to contact me through this form or social media. I will get back to you within 24 hours, whether we're talking about a job or merely sharing our mutual love of Unbreakable Kimmy Schmidt."
 		],
 		"contactFormItems" : [
 		{
 			"formItemID" : "entry.1048969626",
 			"label" : "First Name",
 			"placeholder" : "John",
 			"inputType" : "text"
 		},
 		{
 			"formItemID" : "entry.1752707953",
 			"label" : "Last Name",
 			"placeholder" : "Doe",
 			"inputType" : "text"
 		},
 		{
 			"formItemID" : "entry.1454796987",
 			"label" : "Email address",
 			"placeholder" : "johndoe@company.com",
 			"inputType" : "email"
 		},
 		{
 			"formItemID" : "entry.610207668",
 			"label" : "Phone number",
 			"placeholder" : "(000)000-0000",
 			"inputType" : "tel"
 		},
 		{
 			"formItemID" : "entry.401952099",
 			"label" : "Message",
 			"placeholder" : "Hi Chazona, ...",
 			"inputType" : "textarea"
 		}
 		]
 	},
 	"skills" : [
 	{
 		"name" : "HTML",
 		"icon" : "fa fa-html5"
 	},
 	{
 		"name" : "CSS",
 		"icon" : "fa fa-css3"
 	},
 	{
 		"name" : "JavaScript",
 		"icon" : "icon-javascript"
 	},
 	{
 		"name" : "git",
 		"icon" : "fa fa-git"
 	},
 	{
 		"name" : "ubuntu",
 		"icon" : "icon-ubuntu"
 	},
 	{
 		"name" : "Bash",
 		"icon" : "fa fa-terminal"
 	}
 	]
};
var education = {
 	"schools" : [
 	{
 		"name" : "Free Code Camp",
 		"degree" : "Full Stack Web Development Certification",
 		"location" : "San Francisco, CA",
 		"degree dates" : "2017",
 		"url" : "https://www.freecodecamp.com/",
 		"majors" : ["Computer Software Engineering"]
 	},
 	{
 		"name" : "Old Dominion University",
 		"degree" : "N/A",
 		"location" : "Norfolk, VA",
 		"degree dates" : "N/A",
 		"url" : "https://www.odu.edu/",
 		"majors" : ["Sociology", "Japanese Studies"]
 	}
 	],
 	"onlineCourses" : [
 	{
 		"title" : "Javascript Basics",
 		"school" : "Udacity",
 		"dates" : "August 2016 - September 2016",
 		"url" : "https://udacity.com/courses/ud804"
 	},
 	{
 		"title" : "Introduction to Computer Science",
 		"school" : "edX | Harvard",
 		"dates" : "August 2016 - 2017",
 		"url" : "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
 	},
 	{
 		"title" : "Introduction to Linux",
 		"school" : "edX | The Linux Foundation",
 		"dates" : "August 2016 - 2017",
 		"url" : "https://www.edx.org/course/introduction-linux-linuxfoundationx-lfs101x-0"
 	},
 	{
 		"title" : "Algorithms",
 		"school" : "edX | IIT",
 		"dates" : "September 2016 - 2017",
 		"url" : "https://www.edx.org/course/algorithms-iitbombayx-cs213-3x"
 	}
 	]
};
var homeNav = {
	"sections" : [
	{
		"title" : "Home",
		"anchor" : "#home"
	},
	{
		"title" : "About Me",
		"anchor" : "#about"
	},
	{
		"title" : "Portfolio",
		"anchor" : "#portfolio"
	},
	{
		"title" : "Contact Me",
		"anchor" : "#contact"
	}
	]
};
var frequentlyAskedQuestions = {
	"index" : [
	{
		"question" : "An Industrious Bootstrapper",
		"answer" : "\"How many jobs you got?\" While I could never compete with the characters on <em>In Living Color</em>'s Hey Mon sketches, it hasn't been unusual for me to work two or three different jobs simultaneously, even while raising my eldest son. I've walked three hours to get to work on multiple occasions. I'm a self-starter who, when dissatisfied with the status quo, will take whatever action I can to improve my circumstances. Because I'm constantly seeking additional knowledge and workplace responsibilites, it hasn't been unusual for me to be promoted expeditiously or be assigned special projects."
	},
	{
		"question" : "An Obsessive Problem-Solver",
		"answer" : "When I have an interesting problem to solve or task to do, it takes an intense amount of my concentration. When I was younger, it wasn't uncommon for me to completely lose track of time, neglecting to eat or drink while focusing on my work. Since having my children, I'm better at checking in with myself to ensure I'm taking care of myself while still enjoying the benefits my obsessive focus has on the creative process. I'm not the type to search for excuses to go home early."
	},
	{
		"question" : "An Accidental Leader",
		"answer" : "Whenever possible, I prefer to create things rather than manage people, though I do enjoy coaching and mentoring. I do not seek out commanding roles, but in the absence of leadership, I step up to fill the void. For example, while learning to code, I had a need to meet with other coders locally, but the closest local group was prohibitively far from home. Despite having barely a month's experience with web development, I formed a local group that now serves almost 50 people learning a variety of languages. Because I do not have a need to be \"in charge,\" I tend to be collaborative in leadership roles, and I seek to bring out the best ideas and talents in my teams."
	},
	{
		"question" : "A Nimble Apprentice",
		"answer" : "I pick up new information incredibly quickly, and it's not unusual for me to end up helping to teach new concepts to my collegues while still training for my position. I am skilled at mentally drawing patterns between concepts and prior knowledge, which enables me to master material more quickly. More importantly, I have a knack for navigating resources and a hunger to know as much as possible. I am not afraid of asking questions if it will increase my understanding, but if I can find the information quicker through searches or established materials, I will seek it out myself."
	},
	{
		"question" : "A Compassionate Wanderer",
		"answer" : "Of all the virtues a person can aspire to, the one I want to be remembered for most is kindness. I understand that we all begin this journey from different positions, and that our accumulated experiences tend to shape our perspectives and actions. Whenever possible, I strive to ask questions to build further understanding and to offer help and encouragement, so that I can hopefully improve the lives of those around me. I'm not one to cast someone aside or shatter my integrity simply to improve my own standing."
	}
	],
	"tribute_page" : [
	{
		"question" : "What is this?",
		"answer" : "This page is a Tribute Page project I built while studying with Free Code Camp. It highlights a picture, a quote from the figure, and details of their life."
	},
	{
		"question" : "So does everyone at Free Code Camp have one like this?",
		"answer" : "While it is a common project, each developer takes a different approach to it, and most go back and add additional features or functionality. These projects will not be the same, even though they are made to fit the same user stories."
	},
	{
		"question" : "I don't like this person. Is this really who you did a tribute on?",
		"answer" : "The person you are seeing is featured in my Random Quote Generator project. If you don't like this person, no worries. Refresh the page for a random other person's tribute page."
	}
	],
	"local_weather_app" : [
	{
		"question" : "What is this?",
		"answer" : "This page is a Local Weather App project I built while studying with Free Code Camp. Assuming you allow it to obtain your location, it provides you with the current weather at your location. It includes a photo based on the type of weather you're having, the temperature, what it actually feels like, as well as a description."
	},
	{
		"question" : "Why is this in Fahrenheit?",
		"answer" : "That's what we use in America. Somewhere else or don't like Fahrenheit? Click the button to toggle Celsius values instead."
	}
	],
	"random_quote_generator" : [
	{
		"question" : "What is this?",
		"answer" : "This page is a Random Quote Generator project I built while studying with Free Code Camp. Click the button to get a completely random quote by a random person."
	},
	{
		"question" : "How to I generate a new quote?",
		"answer" : "Click the \"Generate Random Quote\" button."
	},
	{
		"question" : "Aww....I got a good one, but then I forgot it.",
		"answer" : "If it was during this session, click the \"Show Previous Quotes\" button. It will show you a list of quotes you've already generated."
	},
	{
		"question" : "How can I view a quote on a specific topic?",
		"answer" : "For most broad topics, select from the drop-down menu the tag about your topic. Click \"Choose Tag\", and a list of any quotes tagged with your topic will display. For a more specific search, choose a word or phrase you want included in your quote, and enter it in the search box. Click \"Search Quotes\" to pull up a list of all quotes that include your word or phrase."
	}
	],
	"wikipedia_viewer" : [
	{
		"question" : "What is this?",
		"answer" : "This page is a project I built while studying with Free Code Camp. It allows you to search for anything and find related Wikipedia articles. You can also choose to view a random article."
	}
	],
	"twitch_tv_json_api" : [
	{
		"question" : "What is this?",
		"answer" : "This page is a project I built while studying with Free Code Camp. It allows you to see which of a group of Twitch live-streamers are currently streaming."
	},
	{
		"question" : "Oh, this stream looks really cool!",
		"answer" : "Awesome! Click that stream to view it live."
	},
	{
		"question" : "What if I don't want all these offline people cluttering the page.",
		"answer" : "No worries. Click the \"Online\" button to only show current streamers. You can also click the \"Offline\" button to only show those offline or whose accounts are closed, or the \"All\" button to view everyone."
	}
	]
};
var quotes = {
	"speakers" : [
	{
		"speaker" : "Aristotle Onassis",
		"headline" : "Shipping Magnate",
		"image" : "./images/aristotle_onassis.jpg",
		"quotes" : [
		{
			"quoteText" : "It is during our darkest moments that we must focus to see the light.",
			"tags" : [
			"hope",
			"life",
			"motivational",
			"moving on"
			]
		},
		{
			"quoteText" : "The secret of business is to know something that nobody else knows.",
			"tags" : [
			"business",
			"knowledge",
			"money"
			]
		},
		{
			"quoteText" : "To succeed in business it is necessary to make others see things as you see them.",
			"tags" : [
			"business",
			"knowledge",
			"money"
			]
		},
		{
			"quoteText" : "We must free ourselves of the hope that the sea will ever rest. We must learn to sail in high winds.",
			"tags" : [
			"attitude",
			"life",
			"motivational"
			]
		}
		],
		"timeline" : [
		{
			"date" : "1906",
			"event" : "Born in Karatas, Smyrna."
		},
		{
			"date" : "1922",
			"event" : "Flees with his family to Greece as refugees after the Great Fire of Smyrna in the Greco-Turkish War. He loses uncles, an aunt, and her family in the fire."
		},
		{
			"date" : "1923",
			"event" : "Leaves for Buenos Aires, Argentina, and gets his first job as a telephone operator. He begins eavesdropping on business calls, and uses that information to secure his own deals."
		},
		{
			"date" : "1928",
			"event" : "Makes a trade agreement with Greece. He becomes involved with smuggling, bribing, and other illegitimate activities."
		},
		{
			"date" : "1929",
			"event" : "An increase in Greek tariffs of 1000% poses a massive disruption for his South American business. He bribes Greek ministers and successfully gains an exemption from these taxes."
		},
		{
			"date" : "1931",
			"event" : "Once again manages to secure exemption from Greek tariffs by bribing Greek officials."
		},
		{
			"date" : "1946",
			"event" : "Marries Athina Livanos, the young daughter of a shipping magnate."
		},
		{
			"date" : "1950",
			"event" : "Enters the whaling industry off the coast of Peru, to great success."
		},
		{
			"date" : "1956",
			"event" : "Sells his whaling business to a Japanese company called Kyokuyo Hogei Kaisha."
		},
		{
			"date" : "1957",
			"event" : "Begins a relationship with singer Maria Callas."
		},
		{
			"date" : "1960",
			"event" : "Divorces from his first wife Athina Livanos as a result of his relationship with Maria Callas."
		},
		{
			"date" : "1968",
			"event" : "Marries Jackie Kennedy, widow of President John F. Kennedy."
		},
		{
			"date" : "1957",
			"event" : "Enters the airline business, rebranding the Greek National Airline as Olympic Airlines."
		},
		{
			"date" : "1973",
			"event" : "His son, Alexander, dies in a plane crash, leaving him devastated."
		},
		{
			"date" : "1975",
			"event" : "Dies in Neuilly-sur-Seine, France."
		}
		]
	},
	{
		"speaker" : "Audrey Hepburn",
		"headline" : "Film and Fashion Icon",
		"image" : "./images/audrey_hepburn.jpg",
		"quotes" : [
		{
			"quoteText" : "As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others.",
			"tags" : [
			"attitude",
			"equality",
			"experience",
			"wisdom"
			]
		},
		{
			"quoteText" : "Nothing is impossible, the word itself says 'I'm possible'!",
			"tags" : [
			"attitude",
			"hope",
			"motivational"
			]
		},
		{
			"quoteText" : "People, even more than things, have to be restored, renewed, revived, reclaimed, and redeemed; never throw out anyone.",
			"tags" : [
			"failure",
			"respect"
			]
		},
		{
			"quoteText" : "The most important thing is to enjoy your life - to be happy - it's all that matters.",
			"tags" : [
			"happiness",
			"life"
			]
		}
		],
		"timeline" : [
		{
			"date" : "1929",
			"event" : "Born in Brussels, Belgium."
		},
		{
			"date" : "1948",
			"event" : "Appears in her first stage performance in the musical <em>High Button Shoes</em> as a chorus girl."
		},
		{
			"date" : "1951",
			"event" : "Performs the lead in <em>Gigi</em> for two years, leading to the recognition of her acting potential."
		},
		{
			"date" : "1953",
			"event" : "Plays the lead role of Princess Anne in the film <em>Last Holiday</em>, her breakthrough role which earned her an Academy Award."
		},
		{
			"date" : "1954",
			"event" : "Marries Mel Ferrer, a fellow actor she has worked with."
		},
		{
			"date" : "1959",
			"event" : "After enduring two miscarriages, she takes time off from her career to focus on her pregnancy and the delivery of her son Sean."
		},
		{
			"date" : "1960",
			"event" : "Three months after delivering her son, she begins filming <em>Breakfast at Tiffany's</em>, which will be released the next year and become one of her most acclaimed roles. She is also awarded a star on the Hollywood Walk of Fame."
		},
		{
			"date" : "1961",
			"event" : "Takes time off from her career again to care for Sean and her husband."
		},
		{
			"date" : "1963",
			"event" : "Stars in a number of movies over the next four years, including <em>My Fair Lady</em>."
		},
		{
			"date" : "1967",
			"event" : "Takes a nine-year break from acting."
		},
		{
			"date" : "1976",
			"event" : "Stars in a sparse number of movies, including <em>Robin and Marian</em> over the next twelve years."
		},
		{
			"date" : "1988",
			"event" : "Goes on a field mission for UNICEF to Ethiopia to bring food to an orphanage, followed by a mission to Turkey to help with immunizations, and another mission to South America."
		},
		{
			"date" : "1990",
			"event" : "Goes to Vietnam on a UNICEF trip to aid with immunization and providing clean water."
		},
		{
			"date" : "1992",
			"event" : "Is awarded the BAFTA Lifetime Achievements Award. She goes to Somalia to help provide clean water. After returning from Somalia, she falls ill with an abdominal cancer which has grown over the years without being detected. She attempts chemotherapy and surgery, but the terminal cancer is inoperable."
		},
		{
			"date" : "1993",
			"event" : "Dies in Vaud, Switzerland."
		}
		]
	},
	{
		"speaker" : "Benjamin Franklin",
		"headline" : "Founding Father of the US",
		"image" : "./images/benjamin_franklin.jpg",
		"quotes" : [
		{
			"quoteText" : "An investment in knowledge pays the best interest.",
			"tags" : [
			"knowledge",
			"wisdom"
			]
		},
		{
			"quoteText" : "By failing to prepare, you are preparing to fail.",
			"tags" : [
			"business",
			"wisdom"
			]
		},
		{
			"quoteText" : "Either write something worth reading or do something worth writing.",
			"tags" : [
			"motivational"
			]
		},
		{
			"quoteText" : "Tell me and I forget, teach me and I may remember, involve me and I learn.",
			"tags" : [
			"education",
			"knowledge"
			]
		},
		{
			"quoteText" : "They who can give up essential liberty to obtain a little temporary safety deserve neither liberty nor safety.",
			"tags" : [
			"politics"
			]
		},
		{
			"quoteText" : "Well done is better than well said.",
			"tags" : [
			"experience"
			]
		}
		],
		"timeline" : [
		{
			"date" : "1706",
			"event" : "Born in Boston, Massachusetts Bay Colony."
		},
		{
			"date" : "1727",
			"event" : "Establishes the Junto, a group of people looking to effect change in society and express creativity. Since books are scarce, they begin collecting books as a group, leading to America's first subscription library."
		},
		{
			"date" : "1731",
			"event" : "Writes the charter for the Library Company of Philadelphia, creating the first American library."
		},
		{
			"date" : "1733",
			"event" : "Purchases the <em>Pennsylvania Gazette</em> and begins publishing <em>Poor Richard's Almanack</em> under the pseudonym \"Poor Richard\"."
		},
		{
			"date" : "1736",
			"event" : "Establishes the Union Fire Company, America's first volunteer firefighting organization."
		},
		{
			"date" : "1751",
			"event" : "Publishes <em>Observations Concerning the Increase of Mankind, Peopling of Countries, &c.</em> on the study of demographics, which will influence Adam Smith and Thomas Malthus."
		},
		{
			"date" : "1753",
			"event" : "Receives the Copley Medal from the Royal Society of London."
		},
		{
			"date" : "1756",
			"event" : "Is elected a fellow of the Royal Society of London."
		},
		{
			"date" : "1758",
			"event" : "Published <em>The Way to Wealth</em>, a guide to finance and entrepreneurship."
		},
		{
			"date" : "1771",
			"event" : "Begins writing his autobiography, which will be published posthumously."
		},
		{
			"date" : "1776",
			"event" : "Assists the creation of the <em>Declaration of Independence</em>. He is appointed Commissioner of the United States to France."
		},
		{
			"date" : "1785",
			"event" : "Is made the President of the Executive Council of Pennsylvania."
		},
		{
			"date" : "1787",
			"event" : "Is selected as delegate to the Philadelphia Convention."
		},
		{
			"date" : "1790",
			"event" : "Dies in Philadelphia, Pennsylvania."
		}
		]
	},
	{
		"speaker" : "Francis of Assisi",
		"headline" : "Patron Saint of Italy, Animals, and Ecology",
		"image" : "./images/francis_of_assisi.jpg",
		"quotes" : [
		{
			"quoteText" : "All the darkness in the world cannot extinguish the light of a single candle.",
			"tags" : [
			"attitude",
			"moving on"
			]
		},
		{
			"quoteText" : "For it is in giving that we receive.",
			"tags" : [
			"attitude",
			"wisdom"
			]
		},
		{
			"quoteText" : "Start by doing what's necessary, then what's possible, and suddenly you are doing the impossible.",
			"tags" : [
			"attitude",
			"motivational"
			]
		},
		{
			"quoteText" : "While you are proclaiming peace with your lips, be careful to have it even more fully in your heart.",
			"tags" : [
			"attitude",
			"wisdom"
			]
		}
		],
		"timeline" : [
		{
			"date" : "1181",
			"event" : "Born in Assisi, in the Holy Roman Empire."
		},
		{
			"date" : "1226",
			"event" : "Died in Assisi, Umbria."
		}
		]
	},
	{
		"speaker" : "Grace Hopper",
		"headline" : "Inventer of the First Compiler",
		"image" : "./images/grace_hopper.jpg",
		"quotes" : [
		{
			"quoteText" : "I've always been more interested in the future than in the past.",
			"tags" : [
			"attitude",
			"future",
			"motivational"
			]
		},
		{
			"quoteText" : "It's easier to ask forgiveness than it is to get permission.",
			"tags" : [
			"attitude",
			"forgiveness",
			"motivational"
			]
		},
		{
			"quoteText" : "The most damaging phrase in the language is 'We've always done it this way!'",
			"tags" : [
			"attitude",
			"leadership",
			"wisdom"
			]
		}
		],
		"timeline" : [
		{
			"date" : "1906",
			"event" : "Born in New York City."
		},
		{
			"date" : "1992",
			"event" : "Died in Arlington, Virginia."
		}
		]
	},
	{
		"speaker" : "Helen Keller",
		"headline" : "Prolific Deaf-Blind Author and Activist",
		"image" : "./images/helen_keller.jpg",
		"quotes" : [
		{
			"quoteText" : "Alone we can do so little; together we can do so much.",
			"tags" : [
			"alone",
			"friendship"
			]
		},
		{
			"quoteText" : "Although the world is full of suffering, it is also full of the overcoming of it.",
			"tags" : [
			"attitude",
			"moving on"
			]
		},
		{
			"quoteText" : "Life is either a great adventure or nothing.",
			"tags" : [
			"attitude",
			"life"
			]
		},
		{
			"quoteText" : "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
			"tags" : [
			"attitude",
			"success"
			]
		},
		{
			"quoteText" : "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
			"tags" : [
			"beauty",
			"experience",
			"love",
			"wisdom"
			]
		},
		{
			"quoteText" : "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
			"tags" : [
			"attitude",
			"happiness",
			"moving on"
			]
		}
		],
		"timeline" : [
		{
			"date" : "1880",
			"event" : "Born in Tuscumbia, Alabama."
		},
		{
			"date" : "1968",
			"event" : "Died in Easton, Connecticut."
		}
		]
	},
	{
		"speaker" : "Jane Addams",
		"headline" : "The Mother of Social Work",
		"image" : "./images/jane_addams.jpg",
		"quotes" : [
		{
			"quoteText" : "Action indeed is the sole medium of expression for ethics.",
			"tags" : [
			"ethics"
			]
		},
		{
			"quoteText" : "America's future will be determined by the home and the school. The child becomes largely what he is taught; hence we must watch what we teach, and how we live.",
			"tags" : [
			"education",
			"future"
			]
		},
		{
			"quoteText" : "Civilization is a method of living, an attitude of equal respect for all men.",
			"tags" : [
			"equality",
			"respect"
			]
		},
		{
			"quoteText" : "Life cannot be administered by definite rules and regulations; that wisdom to deal with a man's difficulties comes only through some knowledge of his life and habits as a whole.",
			"tags" : [
			"life",
			"wisdom"
			]
		},
		{
			"quoteText" : "Of all the aspects of social misery nothing is so heartbreaking as unemployment.",
			"tags" : [
			"money",
			"society",
			"work"
			]
		},
		{
			"quoteText" : "Old-fashioned ways which no longer apply to changed conditions are a snare in which the feet of women have always become readily entangled.",
			"tags" : [
			"change",
			"equality",
			"future",
			"society",
			"women"
			]
		},
		{
			"quoteText" : "The cure for the ills of Democracy is more Democracy.",
			"tags" : [
			"politics"
			]
		},
		{
			"quoteText" : "The essence of immorality is the tendency to make an exception of myself.",
			"tags" : [
			"attitude",
			"equality",
			"ethics"
			]
		},
		{
			"quoteText" : "Social advance depends as much upon the process through which it is secured as upon the result itself.",
			"tags" : [
			"ethics",
			"future",
			"society"
			]
		},
		{
			"quoteText" : "The common stock of intellectual enjoyment should not be difficult of access because of the economic position of him who would approach it.",
			"tags" : [
			"education",
			"equality",
			"money"
			]
		},
		{
			"quoteText" : "The good we secure for ourselves is precarious and uncertain until it is secured for all of us and incorporated into our common life.",
			"tags" : [
			"equality",
			"ethics",
			"society",
			"success"
			]
		},
		{
			"quoteText" : "What after all has maintained the human race on this old globe despite all the calamities of nature and all the tragic failings of mankind, if not faith in new possibilities and courage to advocate them.",
			"tags" : [
			"courage",
			"failure",
			"hope",
			"motivational"
			]
		}		
		],
		"timeline" : [
		{
			"date" : "1860",
			"event" : "Born in Cedarville, Illinois."
		},
		{
			"date" : "1864",
			"event" : "Contracts Pott's disease, leading to a curvature of the spine and lifelong health problems."
		},
		{
			"date" : "1881",
			"event" : "Graduates Rockford Female Seminary with a collegiate certificate and membership in Phi Beta Kappa. Inspired by her late mother, she hopes to become a doctor so she can help the poor in Cedarville. Her father, John H. Addams, dies that summer. With his passing, she moves to Philadelphia for two years to pursue a medical education, but due to her physical and mental health, does not complete a degree and returns after one year."
		},
		{
			"date" : "1883",
			"event" : "After receiving spinal surgery from her brother-in-law, travels Europe with her stepmother, deciding to help the poor without becoming a doctor."
		},
		{
			"date" : "1887",
			"event" : "Falls into depression over the conventional life expected of well-off women of her time. Visits the first settlement house - a home where rich and poor live together in an interdependent community - Toynbee Hall, in London. She dreams of opening one of her own."
		},
		{
			"date" : "1889",
			"event" : "Co-founds Hull House, a settlement house in Chicago, with Ellen Gates Starr. It will eventually house 25 women and be visited by more than 2,000 people weekly."
		},
		{
			"date" : "1894",
			"event" : "Is the first woman to be appointed sanitary inspector to Chicago's 19th ward. Under her leadership, over a thousand new health violations are reported, reducing disease and death in the ward."
		},
		{
			"date" : "1898",
			"event" : "Joins the Anti-Imperialist Leaghe against the annexation of the Plilippines."
		},
		{
			"date" : "1905",
			"event" : "Is a charter member of the American Sociological Society. During her lifetime, she will remain the most prominent female member."
		},
		{
			"date" : "1909",
			"event" : "Argues that play and recreational programs are critical for children."
		},
		{
			"date" : "1910",
			"event" : "Helps mediate during the Garment Worker's Strike."
		},
		{
			"date" : "1912",
			"event" : "Helps form the new Progressive Party and supports Theodore Roosevelt's presidential campaign."
		},
		{
			"date" : "1915",
			"event" : "Becomes a part of the Women's Peace Party and is elected national chairman. She is invited to preside over the International Congress of Women at the Hague and is chosen to head the commission to find an end to the war. She is elected president of the International Committee of Women for a Permanent Peace; she will maintain her presidency through the organization being developed into the Women's International League for Peace and Freedom."
		},
		{
			"date" : "1931",
			"event" : "Is the first woman awarded a Nobel Peace prize."
		},
		{
			"date" : "1935",
			"event" : "Dies in Chicago, Illinois."
		}
		]
	},
	{
		"speaker" : "Jim Rohn",
		"headline" : "Entrepreneur and Motivational Speaker",
		"image" : "./images/jim_rohn.jpg",
		"quotes" : [
		{
			"quoteText" : "Happiness is not something you postpone for the future; it is something you design for the present.",
			"tags" : [
			"design",
			"future",
			"happiness",
			"motivational",
			"wisdom"
			]
		},
		{
			"quoteText" : "Work harder on yourself than you do on your job.",
			"tags" : [
			"work"
			]
		}
		],
		"timeline" : [
		{
			"date" : "1930",
			"event" : "Born in Yakima, Washington."
		},
		{
			"date" : "2009",
			"event" : "Died in West Hills, California."
		}
		]
	},
	{
		"speaker" : "Jimmy Dean",
		"headline" : "Country Music Singer and Businessman",
		"image" : "./images/jimmy_dean.jpg",
		"quotes" : [
		{
			"quoteText" : "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
			"tags" : [
			"attitude",
			"motivational",
			"success"
			]
		},
		{
			"quoteText" : "You gotta try your luck at least once a day, because you could be going around lucky all day and not even know it.",
			"tags" : [
			"motivational"
			]
		}
		],
		"timeline" : [
		{
			"date" : "1928",
			"event" : "Born in Plainview, Texas."
		},
		{
			"date" : "2010",
			"event" : "Died in Varina, Virginia."
		}
		]
	},
	{
		"speaker" : "John Romero",
		"headline" : "Game Designer and Developer",
		"image" : "./images/john_romero.jpg",
		"quotes" : [
		{
			"quoteText" : "You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.",
			"tags" : [
			"art",
			"computers",
			"work"
			]
		}
		],
		"timeline" : [
		{
			"date" : "1967",
			"event" : "Born in Colorado Springs, Colorado."
		}
		]
	},
	{
		"speaker" : "Joseph Campbell",
		"headline" : "Mythologist and Lecturer",
		"image" : "./images/joseph_campbell.jpg",
		"quotes" : [
		{
			"quoteText" : "A hero is someone who has given his or her life to something bigger than oneself.",
			"tags" : [
			"life",
			"success"
			]
		},
		{
			"quoteText" : "It is by going down into the abyss that we recover the treasures of life. Where you stumble, there lies your treasure.",
			"tags" : [
			"failure",
			"success"
			]
		},
		{
			"quoteText" : "The cave you fear to enter holds the treasure you seek.",
			"tags" : [
			"success"
			]
		},
		{
			"quoteText" : "The goal of life is to make your heartbeat match the beat of the universe, to match your nature with Nature.",
			"tags" : [
			"life"
			]
		},
		{
			"quoteText" : "We must be willing to get rid of the life we've planned, so as to have the life that is waiting for us.",
			"tags" : [
			"change",
			"future",
			"life",
			"moving on",
			"wisdom"
			]
		},
		{
			"quoteText" : "Your sacred space is where you can find yourself again and again.",
			"tags" : [
			"wisdom"
			]
		}
		],
		"timeline" : [
		{
			"date" : "1904",
			"event" : "Born in White Plains, New York."
		},
		{
			"date" : "1987",
			"event" : "Died in Honolulu, Hawaii."
		}
		]
	},
	{
		"speaker" : "Maya Angelou",
		"headline" : "Poet and Civil Rights Activist",
		"image" : "./images/maya_angelou.jpg",
		"quotes" : [
		{
			"quoteText" : "If you don't like something, change it. If you can't change it, change your attitude.",
			"tags" : [
			"attitude",
			"change"
			]
		},
		{
			"quoteText" : "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
			"tags" : [
			"failure",
			"success"
			]
		},
		{
			"quoteText" : "Prejudice is a burden that confuses the past, threatens the future and renders the present inaccessible.",
			"tags" : [
			"wisdom"
			]
		},
		{
			"quoteText" : "There is no greater agony than bearing an untold story inside you.",
			"tags" : [
			"life"
			]
		},
		{
			"quoteText" : "Try to be a rainbow in someone's cloud.",
			"tags" : [
			"attitude"
			]
		},
		{
			"quoteText" : "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.",
			"tags" : [
			"beauty",
			"change",
			"life",
			"success"
			]
		},
		{
			"quoteText" : "You may not control all the events that happen to you, but you can decide not to be reduced by them.",
			"tags" : [
			"attitude",
			"moving on"
			]
		}
		],
		"timeline" : [
		{
			"date" : "1928",
			"event" : "Born in St. Louis, Missouri."
		},
		{
			"date" : "2014",
			"event" : "Died in Winston-Salem, North Carolina."
		}
		]
	},
	{
		"speaker" : "Norman Vincent Peale",
		"headline" : "Author and Minister",
		"image" : "./images/norman_vincent_peale.jpg",
		"quotes" : [
		{
			"quoteText" : "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
			"tags" : [
			"attitude",
			"success"
			]
		},
		{
			"quoteText" : "Change your thoughts and you change your world.",
			"tags" : [
			"attitude",
			"change"
			]
		},
		{
			"quoteText" : "Stand up to your obstacles and do something about them. You will find that they haven't half the strength you think they have.",
			"tags" : [
			"attitude",
			"success"
			]
		},
		{
			"quoteText" : "There is a real magic in enthusiasm. It spells the difference between mediocrity and accomplishment.",
			"tags" : [
			"attitude",
			"success"
			]
		}
		],
		"timeline" : [
		{
			"date" : "1898",
			"event" : "Born in Bowersville, Ohio."
		},
		{
			"date" : "1993",
			"event" : "Died in Pawling, New York."
		}
		]
	},
	{
		"speaker" : "Paul Gauguin",
		"headline" : "Experimental Artist",
		"image" : "./images/paul_gauguin.jpg",
		"quotes" : [
		{
			"quoteText" : "Art is either plagiarism or revolution.",
			"tags" : [
			"art",
			"change"
			]
		},
		{
			"quoteText" : "Art requires philosophy, just as philosophy requires art. Otherwise, what would become of beauty?",
			"tags" : [
			"art"
			]
		},
		{
			"quoteText" : "It is the eye of ignorance that assigns a fixed and unchangeable color to every object; beware of this stumbling block.",
			"tags" : [
			"failure"
			]
		},
		{
			"quoteText" : "We never really know what stupidity is until we have experimented on ourselves.",
			"tags" : [
			"failure"
			]
		}
		],
		"timeline" : [
		{
			"date" : "1848",
			"event" : "Born in Paris, France."
		},
		{
			"date" : "1903",
			"event" : "Died in French Polynesia."
		}
		]
	},
	{
		"speaker" : "Siddhartha Gautama",
		"headline" : "Founder of Buddhism",
		"image" : "./images/siddhartha_gautama.jpg",
		"quotes" : [
		{
			"quoteText" : "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
			"tags" : [
			"attitude",
			"failure",
			"wisdom"
			]
		},
		{
			"quoteText" : "The mind is everything. What you think, you become.",
			"tags" : [
			"attitude",
			"wisdom"
			]
		},
		{
			"quoteText" : "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.",
			"tags" : [
			"attitude",
			"wisdom"
			]
		},
		{
			"quoteText" : "You will not be punished for your anger, you will be punished by your anger.",
			"tags" : [
			"attitude",
			"failure",
			"wisdom"
			]
		}
		],
		"timeline" : [
		{
			"date" : "563 BCE",
			"event" : "Born in Lumbini, Shakya Republic."
		},
		{
			"date" : "483 BCE",
			"event" : "Died in Kushinagar, Malla Republic."
		}
		]
	},
	{
		"speaker" : "Sophia Loren",
		"headline" : "Award-winning Actress",
		"image" : "./images/sophia_loren.jpg",
		"quotes" : [
		{
			"quoteText" : "It's a mistake to think that once you're done with school you need never learn anything new.",
			"tags" : [
			"education",
			"failure",
			"knowledge"
			]
		},
		{
			"quoteText" : "Mistakes are part of the dues one pays for a full life.",
			"tags" : [
			"failure",
			"life"
			]
		},
		{
			"quoteText" : "When you are a mother, you are never really alone in your thoughts. A mother always has to think twice, once for herself and once for her child.",
			"tags" : [
			"alone",
			"women"
			]
		}
		],
		"timeline" : [
		{
			"date" : "1934",
			"event" : "Born in Rome, Italy."
		}
		]
	},
	{
		"speaker" : "Steve Jobs",
		"headline" : "Co-founder and CEO of Apple",
		"image" : "./images/steve_jobs.jpg",
		"quotes" : [
		{
			"quoteText" : "My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time.",
			"tags" : [
			"life",
			"money",
			"time"
			]
		},
		{
			"quoteText" : "Sometimes life is going to hit you in the head with a brick. Don't lose faith.",
			"tags" : [
			"life",
			"hope"
			]
		},
		{
			"quoteText" : "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
			"tags" : [
			"happiness",
			"life",
			"work"
			]
		}	
		],
		"timeline" : [
		{
			"date" : "1955",
			"event" : "Born in San Francisco, California."
		},
		{
			"date" : "2011",
			"event" : "Died in Palo Alto, California."
		}
		]
	},
	{
		"speaker" : "Vince Lombardi",
		"headline" : "Hall of Fame-inducted NFL Coach",
		"image" : "./images/vince_lombardi.jpg",
		"quotes" : [
		{
			"quoteText" : "Individual commitment to a group effort - that is what makes a team work, a company work, a society work, a civilization work.",
			"tags" : [
			"business"
			]
		},
		{
			"quoteText" : "It's not whether you get knocked down, it's whether you get up.",
			"tags" : [
			"attitude",
			"failure"
			]
		},
		{
			"quoteText" : "Perfection is not attainable, but if we chase perfection we can catch excellence.",
			"tags" : [
			"motivational",
			"success"
			]
		},
		{
			"quoteText" : "The harder you work, the harder it is to surrender.",
			"tags" : [
			"failure",
			"work"
			]
		}
		],
		"timeline" : [
		{
			"date" : "1913",
			"event" : "Born in Brooklyn, New York."
		},
		{
			"date" : "1970",
			"event" : "Died in Washington, D.C."
		}
		]
	},
	{
		"speaker" : "Walt Whitman",
		"headline" : "The Father of Free Verse",
		"image" : "./images/walt_whitman.jpg",
		"quotes" : [
		{
			"quoteText" : "Be curious, not judgmental.",
			"tags" : [
			"attitude",
			"wisdom"
			]
		},
		{
			"quoteText" : "Behold I do not give lectures or a little charity. When I give I give myself.",
			"tags" : [
			"giving"
			]
		},
		{
			"quoteText"  : "Do I contradict myself? Very well then I contradict myself, (I am large, I contain multitudes.)",
			"tags" : [
			"miscelaneous"
			]
		},
		{
			"quoteText" : "I exist as I am, that is enough.",
			"tags" : [
			"attitude",
			"success"
			]
		},
		{
			"quoteText" : "Keep your face always toward the sunshine - and shadows will fall behind you.",
			"tags" : [
			"attitude",
			"hope"
			]
		}
		],
		"timeline" : [
		{
			"date" : "1819",
			"event" : "Born in Long Island, New York."
		},
		{
			"date" : "1892",
			"event" : "Died in Camden, New Jersey."
		}
		]
	},
	{
		"speaker" : "William Shakespeare",
		"headline" : "The Bard of Avon",
		"image" : "./images/william_shakespeare.jpg",
		"quotes" : [
		{
			"quoteText" : "Better three hours too soon than a minute too late.",
			"tags" : [
			"time"
			]
		},
		{
			"quoteText" : "Cowards die many times before their deaths; the valiant never taste of death but once.",
			"tags" : [
			"courage"
			]
		},
		{
			"quoteText" : "Love all, trust a few, do wrong to none.",
			"tags" : [
			"love",
			"wisdom"
			]
		},
		{
			"quoteText" : "The course of love never did run smooth.",
			"tags" : [
			"love"
			]
		},
		{
			"quoteText" : "We know what we are, but know not what we may be.",
			"tags" : [
			"future",
			"knowledge",
			"motivational"
			]
		}
		],
		"timeline" : [
		{
			"date" : "1564",
			"event" : "Baptised in Stratford-upon-Avon, England."
		},
		{
			"date" : "1616",
			"event" : "Died in Stratford-upon-Avon, England."
		}
		]
	}
	]
};
var functionName = "";
function emptyError(field, functionName) {
	console.log('Error: The ' + field + ' field in the function ' + functionName +' is empty.');
}
function titleCaseArray(array) {
    for (item in array) {
        array[item][0] = array[item[0]].toUpperCase();
    }
    return array;
}
function addToPage(section, helper, data) {
 	if (data != "") {
 		var formatted = helper.replace(/%data%/g, data);
 		$(section).append(formatted);
 	} else if (data != "") {
 		emptyError("data", addToPage);
 	}
}
function formAddToPage(section, helper, formItemID, label, placeholder, inputType) {
	functionName = "formAddToPage";
	if (formItemID != "" && label != "" && placeholder != "" && inputType != "") {
		if (inputType == "textarea") {
			helper = HTMLtextarea;
		}
		var formatted = helper.replace(/%formitemid%/g, formItemID);
		formatted = formatted.replace(/%label%/g, label);
		formatted = formatted.replace(/%placeholder%/g, placeholder);
		if (inputType != "textarea") {
			formatted = formatted.replace(/%inputtype%/g, inputType);
		}
		$(section).append(formatted);
	} else if (formItemID == "") {
		emptyError("formItemID", functionName);
	} else if (label == "") {
		emptyError("label", functionName);
	} else if (placeholder == "") {
		emptyError("placeholder", functionName);
	} else if (inputType == "") {
		emptyError("inputType", functionName);
	}
}
function navAddToPage(section, helper, url, title) {
	functionName = "navAddToPage";
	if (url != "" && title != "") {
		var formatted = helper.replace(/%url%/g, url);
		formatted = formatted.replace(/%title%/g, title);
		$(section).append(formatted);
	} else if (url == "") {
		emptyError("url", functionName);
	} else if (title == "") {
		emptyError("title", functionName);
	}
}
function portfolioAddToPage(section, helper, url, imgurl, title, description) {
	functionName = "portfolioAddToPage";
	if (section != "" && helper != "" && url != "" && imgurl != "" && title != "" && description != "") {
		var formatted = helper.replace(/%url%/g, url);
		formatted = formatted.replace(/%imgurl%/g, imgurl);
		formatted = formatted.replace(/%title%/g, title);
		formatted = formatted.replace(/%description%/g, description);
		$(section).append(formatted);
	} else if (section == "") {
		emptyError("section", functionName);
	} else if (helper == "") {
		emptyError("helper", functionName);
	} else if (url == "") {
		emptyError("url", functionName);
	} else if (imgurl == "") {
		emptyError("imgurl", functionName);
	} else if (title == "") {
		emptyError("title", functionName);
	} else if (description == "") {
		emptyError("description", functionName);
	}
}
function helpModal(initial, page, short) {
	var modalText = initial;
	for (item in frequentlyAskedQuestions[page]) {
		var heading = short + 'Help' + item.toString();
		var collapseid = short + 'HelpAnswer' + item.toString();
		var question = frequentlyAskedQuestions[page][item].question;
		var answer = frequentlyAskedQuestions[page][item].answer;
		var formattedHelpText = HTMLquoteHelpText.replace(/%heading%/g, heading).replace(/%collapseid%/g, collapseid).replace(/%question%/g, question).replace(/%answer%/g, answer);
		modalText = modalText + formattedHelpText;
	}
	modalText = modalText + '</div>';
	return modalText;
}
function modalText(section, title, data) {
	var formattedModal = HTMLhelpModal;
	formattedModal = HTMLhelpModal.replace(/%title%/g, title).replace(/%data%/g, data);
	$(section).append(formattedModal);
}
navDisplay = function() {
	navAddToPage("#nav", HTMLnavbarNav, homeNav.sections[0].anchor, bio.name);
	if (homeNav.sections.length > 0) {
		for (section in homeNav.sections) {
			if (homeNav.sections[section].title != "Portfolio") {
				navAddToPage("#navbar-items:last", HTMLanchorItem, homeNav.sections[section].anchor, homeNav.sections[section].title);
			} else if (homeNav.sections[section].title == "Portfolio") {
				navAddToPage("#navbar-items:last", HTMLportfolioNav, homeNav.sections[section].anchor, homeNav.sections[section].title);
				for (project in projects.projects) {
					navAddToPage("#portfolio-items:last", HTMLanchorItem, projects.projects[project].url, projects.projects[project].title);
				}
			}
		}
	}
}
footer.display = function() {
	var formatted = HTMLfooter.replace(/%url%/g, projects.projects[1].url);
	formatted = formatted.replace(/%privacyurl%/g, "./privacy.html");
	formatted = formatted.replace(/%name%/g, bio.name);
	$("#footer").append(formatted);
}
bio.display = function() {
 	if (bio != "") {
 		addToPage("#home", HTMLheaderName, bio.name);
 		addToPage("#home", HTMLheaderHeadline, bio.role);
 		addToPage("#home", HTMLwelcomeMsg, bio.welcomeMessage);
 		addToPage("#home", HTMLbioPic, bio.biopic);
 		for (blurb in bio.blurbs) {
 			addToPage("#about", HTMLblurb, bio.blurbs[blurb]);
 		}
 		for (blurb in bio.contacts.contactBlurbs) {
 			addToPage("#contact", HTMLContactBlurb, bio.contacts.contactBlurbs[blurb]);
 		}
 		$("#contact").append("<ul id='contact-list'></ul>");
 		for (item in bio.contacts.contactInfo) {
 			var formattedContact = HTMLcontactIcons.replace(/%title%/g, bio.contacts.contactInfo[item].fontAwesome).replace(/%data%/g, bio.contacts.contactInfo[item].description);
 			$("#contact-list").append(formattedContact);
 		}
 		$("#contact").append(HTMLcontactFormStart);
 		for (item in bio.contacts.contactFormItems) {
 			formAddToPage("#form-item:last", HTMLformItem, bio.contacts.contactFormItems[item].formItemID, bio.contacts.contactFormItems[item].label, bio.contacts.contactFormItems[item].placeholder, bio.contacts.contactFormItems[item].inputType);
 		}
 		$("#form-item:last").append(HTMLsubmitReset);
 		$("#about").append(HTMLskillsStart);
 		for (skill in bio.skills) {
 			addToPage("#skills", HTMLskills, bio.skills[skill].icon);
 		}
 	}
}
work.display = function() {
 	if (work.jobs.length > 0) {
 		for (job in work.jobs) {
 			$("#workExperience").append(HTMLworkStart);
 			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
 			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
 			$(".work-entry:last").append(formattedEmployer + formattedTitle);
 			addToPage(".work-entry:last", HTMLworkDates, work.jobs[job].dates);
 			addToPage(".work-entry:last", HTMLworkLocation, work.jobs[job].location);
 			addToPage(".work-entry:last", HTMLworkDescription, work.jobs[job].description);
 		}
 	}
}
projects.display = function() {
 	if (projects.projects.length > 0) {
 		for (project in projects.projects) {
 			$("#portfolio").append(HTMLprojectStart);
 			addToPage(".project-entry:last", HTMLprojectTitle, projects.projects[project].title);
 			addToPage(".project-entry:last", HTMLprojectDates, projects.projects[project].dates);
 			addToPage(".project-entry:last", HTMLprojectDescription, projects.projects[project].description);
 			for (image in projects.projects[project].images) {
 				addToPage(".project-entry:last", HTMLprojectImage, projects.projects[project].images[image]);
 			}
 		}
 	}
}
portfolioDisplay = function() {
	if (projects.projects.length > 0) {
		$("#portfolio").append('<div class="row">');
		$("#portfolio").append(HTMLportfolioStart);
		for (project in projects.projects) {
			portfolioAddToPage(".portfolio-each:last", HTMLportfolioEach, projects.projects[project].url, projects.projects[project].images[0], projects.projects[project].title, projects.projects[project].description);
		}
	}
}
education.display = function() {
 	if (education.schools.length > 0) {
 		for (school in education.schools) {
 			$("#education").append(HTMLschoolStart);
 			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
 			formattedName = formattedName.replace("#", education.schools[school].url);
 			$(".education-entry:last").append(formattedName);
 			addToPage(".education-entry:last", HTMLschoolDegree, education.schools[school].degree);
 			addToPage(".education-entry:last", HTMLschoolDates, education.schools[school].dates);
 			addToPage(".education-entry:last", HTMLschoolLocation, education.schools[school].location);
 		}
 	};
 	if (education.onlineCourses.length > 0) {
 		$(".education-entry:last").append(HTMLonlineClasses);
 		for (course in education.onlineCourses) {
 			addToPage(".education-entry:last", HTMLonlineTitle, education.onlineCourses[course].title);
 			addToPage(".education-entry:last", HTMLonlineSchool, education.onlineCourses[course].school);
 			addToPage(".education-entry:last", HTMLonlineDates, education.onlineCourses[course].dates);
 			addToPage(".education-entry:last", HTMLonlineURL, education.onlineCourses[course].url);
 		}
 	}
}
function randomizer(groupLength) {
	var maxID = groupLength - 1;
	var minID = 0;
	var randomIndex = 0;
	randomIndex = Math.floor(Math.random() * (maxID - minID + 1) + minID);
	return randomIndex;
}
function ownership(name) {
    if (name.endsWith("s")) {
        name = name + "'";
    } else {
        name = name + "'s";
    }
    return name;
}
function makeSnakeCase(name) {
    var nameArray = name.split(" ");
    name = nameArray.join("_");
    return name;
}
function tributeSetUp(number) {
    $('#home').html("");
    $('#quoteBox').html("");
    $('#timeline').html("");
    var tributePerson = quotes.speakers[number].speaker;
    var tributeHeadline = quotes.speakers[number].headline;
    var HTMLtributeStart = '<h1 class="text-center">%title%<p class="small text-center">%headline%</p></h1>';
    var formattedStart = HTMLtributeStart.replace(/%title%/g, tributePerson).replace(/%headline%/g, tributeHeadline);
    $('#home').append(formattedStart);
    var formattedImg = HTMLquoteImage.replace(/%imgurl%/g, quotes.speakers[number].image);
    $('#home').append(formattedImg);
    var HTMLtributeQuoteStart = '<div class="row"><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12"><blockquote class="blockquote" id="quoteBlock"></blockquote></div></div>';
    $('#quoteBox').append(HTMLtributeQuoteStart);
    var quoteNumber = randomizer(quotes.speakers[number].quotes.length);
    var formattedQuote = HTMLquoteItem.replace(/%quote%/g, quotes.speakers[number].quotes[quoteNumber].quoteText).replace(/%citation%/g, quotes.speakers[number].speaker);
    $('#quoteBlock').html(formattedQuote);
    var tributeOwnership = ownership(tributePerson);
    HTMLdescriptionList = '<div class="row"><div class="col-md-10 col-md-offset-1 col-sm-12"><h2 class="text-center">A Timeline of %data% Life:</h2><dl class="dl-horizontal"></dl>';
    HTMLdescriptionItem = '<dt>%date%</dt><dd>%event%</dd>';
    addToPage($('#timeline'), HTMLdescriptionList, tributeOwnership);
    for (year in quotes.speakers[number].timeline) {
        var formattedDescription = HTMLdescriptionItem.replace(/%date%/g, quotes.speakers[number].timeline[year].date).replace(/%event%/g, quotes.speakers[number].timeline[year].event);
        $('.dl-horizontal:last').append(formattedDescription);
    }
    var tributeWiki = makeSnakeCase(tributePerson);
    var HTMLreadMore = '<p class="text-center lead">Read more about %person% life on <a href="https://en.wikipedia.org/wiki/%url%">Wikipedia</a>.';
    var formattedReadMore = HTMLreadMore.replace(/%person%/g, tributeOwnership).replace(/%url%/g, tributeWiki);
    $('#quoteBox').append(formattedReadMore);
    $('#quoteBox').append(HTMLhelpButton);
}
function tributeSelectSetUp() {
	var HTMLtributeDrop = HTMLquoteTagsDrop.replace(/quoteTags/g, 'tributeSelect').replace(/Tag/g, 'Speaker');
    $('#speakerButton').append(HTMLtributeDrop);
    var tributeSelectArray = [];
    for (speaker in quotes.speakers) {
    	tributeSelectArray.push(quotes.speakers[speaker].speaker);
    }
    tributeSelectArray = tributeSelectArray.sort();
    for (person in tributeSelectArray) {
    	addToPage($('.tributeSelect:last'), HTMLquoteTagsEach, tributeSelectArray[person]);
    }
}
function celsiusConvert(temperature) {
	temperature = parseInt((temperature - 32) / 1.8);
	return temperature;
}
function locationDescription(gotPosition) {
	var formattedGeoString = geoString.replace(/%latitude%/g, gotPosition.latitude).replace(/%longitude%/g, gotPosition.longitude).replace(/%geoAPI%/g, geoAPI);
	$.getJSON(formattedGeoString, function(locData) {// Call the Google Maps API to get a more descriptive form of the location for the user to see
		$('#currentLocation').html(locData.results[0].formatted_address);//Insert the user's location into the page
	});
}
function currentWeather(gotPosition) {
	var formattedWeatherString = weatherStr.replace(/%weatherKey%/g, weatherKey).replace(/%latitude%/g, gotPosition.latitude).replace(/%longitude%/g, gotPosition.longitude);
	$.getJSON(formattedWeatherString, function(weatherData) {
		$('#weatherTemp').html(parseInt(weatherData.currently.temperature));
		$('#feelsLikeTemp').html(parseInt(weatherData.currently.apparentTemperature));
		$('#weatherDescrip').html(weatherData.currently.summary);
		var formattedImage;
		switch(weatherData.currently.icon) {
			case 'clear-day':
				formattedImage = HTMLquoteImage.replace(/%imgurl%/g, './images/clearday.jpg');
				$('#weatherImage').html(formattedImage);
				break;
			case 'clear-night':
				formattedImage = HTMLquoteImage.replace(/%imgurl%/g, './images/clearnight.jpg');
				$('#weatherImage').html(formattedImage);
				break;
			case 'rain':
				formattedImage = HTMLquoteImage.replace(/%imgurl%/g, './images/rain.jpg');
				$('#weatherImage').html(formattedImage);
				break;
			case 'snow':
				formattedImage = HTMLquoteImage.replace(/%imgurl%/g, './images/snow.jpg');
				$('#weatherImage').html(formattedImage);
				break;
			case 'sleet':
				formattedImage = HTMLquoteImage.replace(/%imgurl%/g, './images/sleet.jpg');
				$('#weatherImage').html(formattedImage);
				break;
			case 'wind':
				formattedImage = HTMLquoteImage.replace(/%imgurl%/g, './images/wind.jpg');
				$('#weatherImage').html(formattedImage);
				break;
			case 'fog':
				formattedImage = HTMLquoteImage.replace(/%imgurl%/g, './images/fog.jpg');
				$('#weatherImage').html(formattedImage);
				break;
			case 'cloudy':
				formattedImage = HTMLquoteImage.replace(/%imgurl%/g, './images/cloudy.jpg');
				$('#weatherImage').html(formattedImage);
				break;
			case 'partly-cloudy-day':
				formattedImage = HTMLquoteImage.replace(/%imgurl%/g, './images/partlycloudyday.jpg');
				$('#weatherImage').html(formattedImage);
				break;
			case 'partly-cloudy-night':
				formattedImage = HTMLquoteImage.replace(/%imgurl%/g, './images/partlycloudynight.jpg');
				$('#weatherImage').html(formattedImage);
				break;
		};
		var fahrenheit = true;
		$('#convertBtn').click(function(event) {
			if (fahrenheit === true) {// If already fahrenheit
				$('#weatherTemp').html(celsiusConvert(weatherData.currently.temperature));// Convert current temperature to celsius
				$('#feelsLikeTemp').html(celsiusConvert(weatherData.currently.apparentTemperature));// Convert "feels like" temperature to celsius
				$('#degreeSym1').html('&#8451');// Change degree symbol to C
				$('#degreeSym2').html('&#8451');
				fahrenheit = false;
			} else if (fahrenheit === false) {
				$('#weatherTemp').html(parseInt(weatherData.currently.temperature));// Trim the temperature number of decimals
				$('#feelsLikeTemp').html(parseInt(weatherData.currently.apparentTemperature));// Trim the "feels like" number of decimals
				$('#degreeSym1').html('&#8457');// Change degree symbol to F
				$('#degreeSym2').html('&#8457');
				fahrenheit = true;
			}
		});
	});
}
function weatherApp() {
    if (!navigator.geolocation) {// If browser doesn't support navigator.geolocation,
        $('#locating').html(HTMLweatherNavigatorError);// Throw an error for the user
        return;
    }
    function success(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        $('#locating').html('');// Clear locating section
        var location = { 'latitude' : latitude, 'longitude' : longitude };// Store user's lat & lon to use in currentWeather function
        locationDescription(location);// Get a desciptive location to display
        currentWeather(location);// Get the current weather from Dark Sky API
    }
    function error() {
        $('#locating').html(HTMLweatherPositionError);// If can't get position, throw an error for the user
    }
    $('#locating').html(HTMLlocatingMessage);// Show something while locating so user knows it's working
    navigator.geolocation.getCurrentPosition(success, error);
}