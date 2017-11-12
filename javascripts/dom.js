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
	console.log(entries);
	//document.getElementById("blogHolder").innerHTML = entries;
	$("#blogHolder").html(entries);
};



module.exports = {blogDomString};
