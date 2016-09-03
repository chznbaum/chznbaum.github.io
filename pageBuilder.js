/*
HTML strings
*/

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderHeadline = '<span class="headline-text">%data%</span><hr>';

var HTMLcontactGeneric = '<li class="contact-item">%contact% %data%</li>';
var HTMLmobile = '<li class="contact-item">mobile %data%</li>';
var HTMLemail = '<li class="contact-item">email %data%</li>';
var HTMLlinkedin = '<li class="contact-item">linkedin %data% </li>'
var HTMLtwitter = '<li class="contact-item">twitter %data%</li>';
var HTMLgithub = '<li class="contact-item">github %data%</li>';
var HTMLblog = '<li class="contact-item">blog %data%</li>';
var HTMLlocation = '<li class="contact-item">location %data%</li>';

var HTMLbioPic = '<img src="%data%" class="biopic img-responsive">';
var HTMLwelcomeMsg = '<p class="welcome-message">%data%</p>';
var HTMLblurb = '<p class="lead">%data%</p>'

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

var projects = {
	"projects" : [
	{
		"title" : "Tribute Page",
		"dates" : "July 2016",
 		"description" : "A tribute page in honor of Jane Addams, an influential author, suffragette, and social work pioneer, created in HTML and CSS.",
 		"url" : "./tribute_page/index.html",
 		"images" : ["./images/tributepage.jpg"]
 	},
 	{
 		"title" : "Personal Portfolio",
 		"dates" : "July 2016",
 		"description" : "A personal portfolio page highlighting recent projects, created with HTML, CSS and client-side JavaScript.",
 		"url" : "./index.html",
 		"images" : ["./images/portfolio01.png", "images/portfolio02.png", "images/portfolio03.png", "images/portfolio04.png"]
 	},
 	{
 		"title" : "Random Quote Generator",
 		"dates" : "July 2016",
 		"description" : "A generator that provides random inspirational quotes to the user, created with HTML, CSS and client-side JavaScript.",
 		"url" : "./random_quote_generator/index.html",
 		"images" : ["./images/RandomQuote01.PNG", "images/RandomQuote02.PNG", "images/RandomQuote03.PNG", "images/RandomQuote04.PNG"]
 	},
 	{
 		"title" : "Local Weather App",
 		"dates" : "July 2016",
 		"description" : "A web app that displays the weather at the user's location, and adjusts the graphical display accordingly, created with HTML, CSS, client-side JavaScript and APIs.",
 		"url" : "./local_weather_app/index.html",
 		"images" : ["./images/localweatherapp.jpg"]
 	},
 	{
 		"title" : "Wikipedia Viewer",
 		"dates" : "July 2016",
 		"description" : "A web tool that allows the user to search for and view relevant Wikipedia entries or view a random Wikipedia entry, created with HTML, CSS, client-side JavaScript and APIs.",
 		"url" : "./wikipedia_viewer/index.html",
 		"images" : ["./images/wikiviewer.jpg"]
 	},
 	{
 		"title" : "Twitch TV JSON API",
 		"dates" : "August 2016",
 		"description" : "A web tool which allows the user to check if various Twitch live-streamers are broadcasting and to view their content, created with HTML, CSS, client-side JavaScript and APIs.",
 		"url" : "./twitch_tv_json_api/index.html",
 		"images" : ["./images/twitchtvjsonapi.JPG"]
 	},
 	{
 		"title" : "Free Food Game",
 		"dates" : "August 2016",
 		"description" : "A simple falling objects game made with Scratch. Using the left and right keys to control the protagonist, catch as many fruit as you can without being hit by the school's musical instruments.",
 		"url" : "https://scratch.mit.edu/projects/119382473/",
 		"images" : ["./images/fallingfood.png"]
 	},
 	{
 		"title" : "Personal Resume",
 		"dates" : "August 2016",
 		"description" : "",
 		"url" : "./resume/index.html",
 		"images" : ["./images/resume02.png"]
 	}
 	]
}
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
}
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
 		"location" : "Midlothian, VA"
 	},
 	"skills" : [
 	"HTML",
 	"CSS",
 	"JavaScript",
 	"Ruby",
 	"jQuery"
 	]
}
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
}
function addToPage(section, helper, data) {
 	if (data != "") {
 		var formatted = helper.replace("%data%", data);
 		$(section).append(formatted);
 	}
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
 		addToPage("#contact", HTMLmobile, bio.contacts.mobile);
 		addToPage("#contact", HTMLemail, bio.contacts.email);
 		addToPage("#contact", HTMLlinkedin, bio.contacts.linkedin);
 		addToPage("#contact", HTMLtwitter, bio.contacts.twitter);
 		addToPage("#contact", HTMLgithub, bio.contacts.github);
 		addToPage("#contact", HTMLlocation, bio.contacts.location);
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
bio.display();
//work.display();
projects.display();
//education.display();