var blogs = [];

var blog1 = {
	title: "My Blog 1",
	content: "Progress families inspire expose the truth data granular the overcome injustice initiative. Agile strategy inspiring changemaker empower communities humanitarian policymaker, gender rights human-centered. Global; thought leader inclusion activate; LGBTQ+ and. Collaborative consumption, engaging radical global fairness replicable. We must stand up; to; silo; the resistance compassion collective impact improve the world uplift. Unprecedented challenge, data, human-centered; white paper, social enterprise academic social impact. Capacity building to her body her rights grit humanitarian collaborative consumption. Society resilient improve the world; social innovation collaborate compelling agile mass incarceration. Corporate social responsibility a targeted resist paradigm. Compelling, low-hanging fruit triple bottom line, academic emerging; citizen-centered big data green space justice. Humanitarian humanitarian, initiative disrupt, collaborate deep dive game-changer, justice movements. Unprecedented challenge philanthropy, strategy low-hanging fruit effective altruism corporate social responsibility resilient our work. Boots on the ground indicators citizen-centered; dynamic disrupt living a fully ethical life inspiring. Inspirational shared value think tank.",
	date: "July 22, 2017"
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


