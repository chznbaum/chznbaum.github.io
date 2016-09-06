/*
HTML strings
*/

var HTMLnavbarNav = '<div class="container-fluid><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mynavbar"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="%url%">%title%</a></div><div class="collapse navbar-collapse" id="mynavbar"><ul class="nav navbar-nav navbar-right" id="navbar-items"></ul></div></div>';
var HTMLanchorItem = '<li><a href="%url%">%title%</a></li>';
var HTMLportfolioNav = '<li role="presentation" class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" data-target="#" href="#portfolio" role="button" aria-haspopup="true" aria-expanded="false">%title%<span class="caret"></span></a><ul class="dropdown-menu" id="portfolio-items"></ul></li>';

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderHeadline = '<span class="headline-text">%data%</span><hr>';
var HTMLfooter = '<hr><p class="text-center"><a href="%url%">%name%</a> &#169 2016. All Rights Reserved. <a href="%privurl%">Privacy Policy</a></p>'

var HTMLcontactGeneric = '<li class="contact-item">%contact% %data%</li>';
var HTMLContactBlurb = '<p class="lead">%data%</p>';
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

var HTMLbioPic = '<img src="%data%" class="biopic img-responsive">';
var HTMLwelcomeMsg = '<p class="welcome-message">%data%</p>';
var HTMLblurb = '<p class="lead">%data%</p>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills"></ul>';
var HTMLskills = '<li class="skills-item">%data%</li>';

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

var HTMLquoteStart = '<div class="row"><h1 class="text-center">Random Quote Generator</h1></div><div class="row"><p class="lead text-center">Click below to enjoy a different quote for endless motivation.</p><div id="image"></div></div><div class="row"><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12"><blockquote class="blockquote" id="quoteBlock"></blockquote></div></div>';
var HTMLquoteButtons = '<div class="row"><div class="col-md-6 col-md-offset-3 col-xs-12"><button class="btn btn-primary btn-block" id = "btnNewQuote">Generate New Quote</button></div></div><div class="row"><div class="col-md-3 col-md-offset-3 col-xs-12"><button class="btn btn-info btn-block" id="btnTweetQuote"><i class="fa fa-twitter"></i>Tweet this Quote</button></div><div class="col-md-3 col-xs-12"><button class="btn btn-primary btn-block" id = "btnPreviousQuote">Show Previous Quotes</button></div></div>';
var HTMLquoteImage = '<img src="%imgurl%" class="quotePic img-responsive img-circle center-block" />'
var HTMLquoteItem = '<p>"%quote%"</p><footer>%citation%</footer>';
var CSSquoteImage = '"url(\'%imgurl%\')"';
var HTMLpreviousQuotes = '<div class="row"><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12"><h3>You previously generated:</h3></div><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12"><blockquote class="previousQuotes"></blockquote></div></div>';
var HTMLerrorNoQuotes = '<p class="warning">Sorry, there are no quotes to display here. How about generating a quote?</p>'
var HTMLquoteTagsDrop = '<div class="row"><div class="col-md-4 col-md-offset-3 col-sm-8 col-xs-6"><div class="dropdown"><select id="quoteTags" class="quoteTags form-control"></select></div></div><div class="col-md-2 col-sm-4 col-xs-6"><button id="btnTagClick" type="button" class="btn btn-default btn-block">Choose Tag</button></div></div></div>';
var HTMLquoteTagsEach = '<option value="%data%">%data%</option>'
var HTMLquoteResults = '<div class="row"><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12"><h3>Quotes tagged %data%:</h3></div><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12"><blockquote class="blockquote" id="resultsBlock"></blockquote></div></div>'

var HTMLsearchBox = '<div class="row"><div class="col-md-4 col-md-offset-3 col-sm-8 col-xs-6"><input type="search" class="form-control" placeholder="Search" id="inputSearch" aria-label="Search" /></div><div class="col-md-2 col-sm-4 col-xs-6"><button class="btn btn-default btn-block" id="resultsBtn">%data%</button></div></div>';
var HTMLsearchResults = '<div class="row"><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12"><h3>Quotes containing your search term, %data%:</h3></div><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12"><blockquote class="blockquote" id="resultsBlock"></blockquote></div></div>'

var submitted = false;

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
 		"description" : "",
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
 	"I don't look like your average coder. And my resume doesn't read like someone who works with computers. My experiences in life have been incredibly diverse, and I've worked in industries ranging from food to veterinary medicine to insurance. I have two adventurous children, and I've made a point to listen to people from virtually every walk in life.",
 	"The unique worldview I've cultivated puts me in a excellent frame of mind to solve complex challenges and find common ground. With a passion for creating, a hunger for knowledge, and an unbreakable resiliency, you would be hard-pressed to find anyone else who brings to the table what I have or learns as quickly as I do."
 	],
 	"contacts" : {
 		"mobile" : "(757)617-6964",
 		"email" : "chznbaum@gmail.com",
 		"linkedin" : "chznbaum",
 		"github" : "chznbaum",
 		"twitter" : "@otherconsolelog",
 		"location" : "Midlothian, VA",
 		"contactBlurbs" : ["Feel free to contact me through this form or social media. I will get back to you within 48 hours, whether we're talking about a job or merely sharing our mutual love of Unbreakable Kimmy Schmidt."],
 		"contactFormItems" : [
 		{
 			"formItemID" : "entry.1048969626",
 			"label" : "First Name",
 			"placeholder" : "",
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
 	"HTML",
 	"CSS",
 	"JavaScript",
 	"Ruby",
 	"jQuery",
 	"git",
 	"GitHub",
 	"Linux command-line"
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
var quotes = {
	"speakers" : [
	{
		"speaker" : "Aristotle Onassis",
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
		]
	},
	{
		"speaker" : "Audrey Hepburn",
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
		]
	},
	{
		"speaker" : "Benjamin Franklin",
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
		]
	},
	{
		"speaker" : "Francis of Assisi",
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
		},
		]
	},
	{
		"speaker" : "Grace Hopper",
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
		]
	},
	{
		"speaker" : "Helen Keller",
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
		]
	},
	{
		"speaker" : "Jim Rohn",
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
		]
	},
	{
		"speaker" : "Jimmy Dean",
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
		]
	},
	{
		"speaker" : "Jane Addams",
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
		]
	},
	{
		"speaker" : "John Romero",
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
		]
	},
	{
		"speaker" : "Joseph Campbell",
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
		]
	},
	{
		"speaker" : "Maya Angelou",
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
		]
	},
	{
		"speaker" : "Norman Vincent Peale",
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
		]
	},
	{
		"speaker" : "Paul Gauguin",
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
		]
	},
	{
		"speaker" : "Siddhartha Gautama",
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
		]
	},
	{
		"speaker" : "Sophia Loren",
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
		]
	},
	{
		"speaker" : "Steve Jobs",
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
		]
	},
	{
		"speaker" : "Vince Lombardi",
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
		]
	},
	{
		"speaker" : "Walt Whitman",
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
		]
	},
	{
		"speaker" : "William Shakespeare",
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
 		addToPage("#contact", HTMLmobile, bio.contacts.mobile);
 		addToPage("#contact", HTMLemail, bio.contacts.email);
 		addToPage("#contact", HTMLlinkedin, bio.contacts.linkedin);
 		addToPage("#contact", HTMLtwitter, bio.contacts.twitter);
 		addToPage("#contact", HTMLgithub, bio.contacts.github);
 		addToPage("#contact", HTMLlocation, bio.contacts.location);
 		$("#contact").append(HTMLcontactFormStart);
 		for (item in bio.contacts.contactFormItems) {
 			formAddToPage("#form-item:last", HTMLformItem, bio.contacts.contactFormItems[item].formItemID, bio.contacts.contactFormItems[item].label, bio.contacts.contactFormItems[item].placeholder, bio.contacts.contactFormItems[item].inputType);
 		}
 		$("#form-item:last").append(HTMLsubmitReset);
 		$("#about").append(HTMLskillsStart);
 		for (skill in bio.skills) {
 			addToPage("#skills", HTMLskills, bio.skills[skill]);
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
function wikipediaSearch() {
	var searchQuery = $('#inputSearch').value;
	// Call Wikipedia API and get list of results for search query
	$.ajax({
		url: '//www.wikipedia.org/w/api.php',
		data: { action: 'query', list: 'search', srsearch: searchQuery, srprop: "snippet", srlimit: 15, format: 'json' },
		dataType: 'jsonp',
		success: function(xhr) {
			// Obtain array from JSON results
			var wikiArray = $.map(xhr, function(i) {
				return i;
			});
			// Populate description list with titles with links and snippets from the array
			for (i = 0; i < wikiArray.length; i++) {
				var wikiEncode = encodeURI(wikiArray[i].title);
				$('#resultsBox').append('<dt><a href=https://en.wikipedia.org/wiki/' + wikiEncode + 'target="_blank">' + wikiArray[i].title + '</a></dt><dd>' + wikiArray[i].snippet + "...</dd>");
			}
		}
	});
}