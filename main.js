var blogs = [];

var blog1 = {
	title: "JavaScript, Anyone?",
	content: "Hello World! I have seen this so many times recently.  Why? To make sure my JavaScript file is successfully linked to my HTML file. This is the one of the first (but probably the single most important) lessons I have learned in my short tenure with NSS. If CSS and JS are not linked properly, then everything I have done with those languages is all for naught. 	So let me back up a bit. I am in the beginning stages of a year-long, part-time evening bootcamp to become a software developer.  I literally never thought those words ever come out of my brain.  Ever.  I thought that was above my brain level.  All that gibberish I would see when I would accidentally, somehow, launch the inspector inside a web browser, looked like hieroglyphics.  An unknown type of communication.  And previously, it was.  Now, with 3 weeks of the bootcamp and 3 weeks of the NSS JumpStart class in my rear view mirror, I understand it more than I ever thought possible. I am not so arrogant to say that I understand even a quarter of it, but being able to read and understand even the smallest fraction of any code is more than I can say about myself two months ago.  I am proud of that!  Specifically about JavaScript, this is what I have learned so far.  It can make life as a developer work more efficiently, but it comes with mucho frustration.  I am definitely going to have to take JS one chunk at a time.  We have recently focused on for loops.  Wow!  My first hurdle? Iteration. I had to figure out what in the world that word meant.  I can't say that I still fully understand it, but I now have a basic working knowledge of it.  It is a process that repeats until it is told to stop.  I may be right, and yet I may be wrong.  But that's what it means to me right now in this moment.  I also have learned that syntax will make or break your code. However, there are plenty of resources available to help you make sure your syntax is correct.  What really requires my focus is understanding how and why processes work, and when to implement them.  I feel like once I get that, like really get it, I will be cooking with gas!  Right now, I'm just trying to turn on the gas tank!",
	date: "July 26, 2017"
};

var blog2 = {
	title: "My Blog 2",
	content: "Progress families inspire expose the truth data granular the overcome injustice initiative. Agile strategy inspiring changemaker empower communities humanitarian policymaker, gender rights human-centered. Global; thought leader inclusion activate; LGBTQ+ and. Collaborative consumption, engaging radical global fairness replicable. We must stand up; to; silo; the resistance compassion collective impact improve the world uplift. Unprecedented challenge, data, human-centered; white paper, social enterprise academic social impact. Capacity building to her body her rights grit humanitarian collaborative consumption. Society resilient improve the world; social innovation collaborate compelling agile mass incarceration. Corporate social responsibility a targeted resist paradigm. Compelling, low-hanging fruit triple bottom line, academic emerging; citizen-centered big data green space justice. Humanitarian humanitarian, initiative disrupt, collaborate deep dive game-changer, justice movements. Unprecedented challenge philanthropy, strategy low-hanging fruit effective altruism corporate social responsibility resilient our work. Boots on the ground indicators citizen-centered; dynamic disrupt living a fully ethical life inspiring. Inspirational shared value think tank.",
	date: "July 22, 2017"
};


var blog3 = {
	title: "My Blog 3",
	content: "Progress families inspire expose the truth data granular the overcome injustice initiative. Agile strategy inspiring changemaker empower communities humanitarian policymaker, gender rights human-centered. Global; thought leader inclusion activate; LGBTQ+ and. Collaborative consumption, engaging radical global fairness replicable. We must stand up; to; silo; the resistance compassion collective impact improve the world uplift. Unprecedented challenge, data, human-centered; white paper, social enterprise academic social impact. Capacity building to her body her rights grit humanitarian collaborative consumption. Society resilient improve the world; social innovation collaborate compelling agile mass incarceration. Corporate social responsibility a targeted resist paradigm. Compelling, low-hanging fruit triple bottom line, academic emerging; citizen-centered big data green space justice. Humanitarian humanitarian, initiative disrupt, collaborate deep dive game-changer, justice movements. Unprecedented challenge philanthropy, strategy low-hanging fruit effective altruism corporate social responsibility resilient our work. Boots on the ground indicators citizen-centered; dynamic disrupt living a fully ethical life inspiring. Inspirational shared value think tank.",
	date: "July 22, 2017"
};


var blog4 = {
	title: "My Blog 4",
	content: "Progress families inspire expose the truth data granular the overcome injustice initiative. Agile strategy inspiring changemaker empower communities humanitarian policymaker, gender rights human-centered. Global; thought leader inclusion activate; LGBTQ+ and. Collaborative consumption, engaging radical global fairness replicable. We must stand up; to; silo; the resistance compassion collective impact improve the world uplift. Unprecedented challenge, data, human-centered; white paper, social enterprise academic social impact. Capacity building to her body her rights grit humanitarian collaborative consumption. Society resilient improve the world; social innovation collaborate compelling agile mass incarceration. Corporate social responsibility a targeted resist paradigm. Compelling, low-hanging fruit triple bottom line, academic emerging; citizen-centered big data green space justice. Humanitarian humanitarian, initiative disrupt, collaborate deep dive game-changer, justice movements. Unprecedented challenge philanthropy, strategy low-hanging fruit effective altruism corporate social responsibility resilient our work. Boots on the ground indicators citizen-centered; dynamic disrupt living a fully ethical life inspiring. Inspirational shared value think tank.",
	date: "July 22, 2017"
};


var blog5 = {
	title: "My Blog 5",
	content: "Progress families inspire expose the truth data granular the overcome injustice initiative. Agile strategy inspiring changemaker empower communities humanitarian policymaker, gender rights human-centered. Global; thought leader inclusion activate; LGBTQ+ and. Collaborative consumption, engaging radical global fairness replicable. We must stand up; to; silo; the resistance compassion collective impact improve the world uplift. Unprecedented challenge, data, human-centered; white paper, social enterprise academic social impact. Capacity building to her body her rights grit humanitarian collaborative consumption. Society resilient improve the world; social innovation collaborate compelling agile mass incarceration. Corporate social responsibility a targeted resist paradigm. Compelling, low-hanging fruit triple bottom line, academic emerging; citizen-centered big data green space justice. Humanitarian humanitarian, initiative disrupt, collaborate deep dive game-changer, justice movements. Unprecedented challenge philanthropy, strategy low-hanging fruit effective altruism corporate social responsibility resilient our work. Boots on the ground indicators citizen-centered; dynamic disrupt living a fully ethical life inspiring. Inspirational shared value think tank.",
	date: "July 22, 2017"
};

blogs.push(blog1);
blogs.push(blog2);
blogs.push(blog3);
blogs.push(blog4);
blogs.push(blog5);

console.log(blogs);

var blogHolder = document.getElementById("blog-holder");

for(var i = 0; i < blogs.length; i++) {

	var currentblog = blogs[i];

	var domString = "";

	domString+=		'<article class="cards">';
	domString+=		'<div class="title">';
	domString+=			'<h4>' + currentblog.title + '</h4>';
	domString+=			'<span>' + currentblog.date + '</span>';
	domString+=		'</div>';
	domString+=		'<section>';
	domString+=			'<p>' + currentblog.content + '</p>';				
	domString+=		'</section>';
	domString+=		'</article>';

	blogHolder.innerHTML += domString;
}


