"use strict";

const blogDomString = (myThoughts) => {
	let domString = "";
	for(let i = 0; i < myThoughts.length; i++) {
		domString+=		`<article class="cards col-md-3">`;
		domString+=			`<div id="blogHeading_${i}" class="title child">`;
		domString+=				`<h4 class="blogHeader">${myThoughts[i].title}</h4>`;
		domString+=				`<span>${myThoughts[i].date}</span>`;
		domString+=				`<p>${myThoughts[i].content}</p>`;				
		domString+=			`</div>`;
		domString+=			`</article>`;
	}

	//console.log("I am on the blog page.", domString);
	writeToDom(domString);
};

const writeToDom = (entries) => {
	//document.getElementById("blogHolder").innerHTML = entries;
	$("#blogHolder").html(entries);
};

const projectDomString = (projects) => {
	let projectString = "";
	for(let i = 0; i < projects.length; i++){
	projectString += `<div id="project_${i}">`;
	projectString +=	  `<h5 id="title_${i}>${projects[i].name}</h5>`;
	projectString +=	  `<div class="screenshot">`;
	projectString +=	  	 `<img class="projectImg" src=${projects[i].screenshot}>`;
	projectString +=	   	 `<p>${projects[i].description}</p>`;
	projectString +=		   `<p>You can view the code for this project at ${projects[i].github}</p>`;
	projectString +=  	`</div>`;
	projectString += `</div>`;
	}	
	printProjectsToDom(projectString);
};

const printProjectsToDom = (projectz) => {
	$("#projects").html(projectz);
};



module.exports = {blogDomString, projectDomString};
