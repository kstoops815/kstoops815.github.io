(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const firebaseApi = require("./firebaseApi");

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax("../db/apiKeys.json").done((data) => {
      resolve(data);
      console.log("apikeys", data);
    }).fail((error) => {
      reject(error);
    });
  });
};

const retrieveKeys = () => {
  apiKeys().then((results) => {
    firebaseApi.setKey(results.firebaseApi.apiKey);
    firebase.initializeApp(results.firebaseApi.apiKey);
  });
};

module.exports = {
  retrieveKeys
};
},{"./firebaseApi":4}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";

const dom = require("./dom");
const firebaseApi = require("./firebaseApi");



const doThisWhenClick = () => {
	$("body").click((e) => {
		blogBox(e);
		printSelectedBlog(e);
	if($(e.target).parents().hasClass("cards") === false) {
			clearSelectedBlog();
		}
		});
};


let selectedBlogCard;

const blogBox = (e) => {
	let target = $(e.target);
	if(target.hasClass("child")){
		selectedBlogCard = target.parent();
	} else if(target.parents().hasClass("cards")){
		selectedBlogCard = target.parent().parent();
	}
	$("#entireBlog").removeClass("hidden");	
};

const printSelectedBlog = () => {
	let article = selectedBlogCard.html();
	console.log("article", article);
 	$("#entireBlog").html(article);
};

const clearSelectedBlog = (e) => {
	$("#entireBlog").addClass("hidden");	
};

// const eventsInitializer = () => {
// 	showBlogs();
// 	showProjects();
// 	doThisWhenClick();
// };

module.exports = { doThisWhenClick };
},{"./dom":2,"./firebaseApi":4}],4:[function(require,module,exports){
"use strict";

const dom = require("./dom");

let firebaseKey = "";

const setKey = (key) => {
  firebaseKey = key;
};

const getBlogs = () => {
  return new Promise((resolve, reject) => {
    $.ajax(`${firebaseKey.databaseURL}/blogs.json`)
    .then((data) => {
      dom.blogDomString(data);
      resolve(data);
      }).fail((error) => {
      	reject(error);
      });
    });
  };

  const getProjects = () => {
    return new Promise((resolve, reject) => {
      $.ajax(`${firebaseKey.databaseURL}/projects.json`)
      .then((data) => {
        console.log('projects', data);
        dom.projectDomString(data);
        resolve(data);
        
      }).fail((error) => {
        reject(error);
      });
    });
  };

  module.exports = {
    getBlogs, getProjects, setKey
  };

},{"./dom":2}],5:[function(require,module,exports){
"use strict";

const events = require("./events");
const apiKeys = require("./apiKeys");
const firebaseApi = require("./firebaseApi");

const main = () => {
  apiKeys.retrieveKeys()
    .then((results) => {
      firebaseApi.getBlogs();
      firebaseApi.getProjects();
      events.doThisWhenClick();
    });
   
};

main();


// dom.blogDomString(blogz);

// function putMyBlogsInDom(){
// 	let blogsData = JSON.parse(this.responseText);
// 	//console.log("blog posts", blogsData.blogs);
// 	allBlogs = blogsData.blogs;
// 	blogDomString(blogsData.blogs);
// }

// const ifLoadFails = () => {
// 	console.log("it's broken");
// }

// const myBlogs = new XMLHttpRequest();
// myBlogs.addEventListener("load", putMyBlogsInDom);
// myBlogs.addEventListener("error", ifLoadFails);
// myBlogs.open("GET", "blogPosts.json");
// myBlogs.send();

// const blogDomString = (myThoughts) => {
// 	let domString = "";
// 	for(let i = 0; i < myThoughts.length; i++) {
// 		domString+=		`<article class="cards col-md-3">`;
// 		domString+=			`<div id="blogHeading_${i}" class="title child">`;
// 		domString+=				`<h4>${myThoughts[i].title}</h4>`;
// 		domString+=				`<span>${myThoughts[i].date}</span>`;
// 		domString+=				`<p>${myThoughts[i].content}</p>`;				
// 		domString+=			`</div>`;
// 		domString+=			`</article>`;
// 	}

// 	//console.log("I am on the blog page.", domString);
// 	writeToDom(domString);
// };

// const writeToDom = (entries) => {
// 	document.getElementById("blogHolder").innerHTML = entries;
// };

//Whenever the user clicks on a specific blog post card, that blog should
//appear in a special div (that spans all 12 columns) above all of the blog
//posts and should show the full content of the blog. When the user clicks on
//another blog post, it should replace the content of this special div with
//the content of the new blog post the user selected.

// document.getElementById("blogHolder").addEventListener("click", function(e){
// 	console.log("click event", e);
// 	blogBox(e);
// 	printSelectedBlog();
// 	$("#entireBlog").removeClass("hidden");
// 	});

// let selectedBlogCard;

// const blogBox = (e) => {
// 	if(e.target.classList.contains("child")){
// 		selectedBlogCard = e.target.parentNode;
// 	} else if(e.target.parentNode.parentNode.classList.contains("cards")){
// 		selectedBlogCard = e.target.parentNode.parentNode;
// 	} else if(e.target.classList.contains("cards")){
// 		selectedBlogCard = e.target;
// 	}
// 	return(selectedBlogCard);
// 	//console.log("in blogBox function", selectedBlogCard);
// };

// const printSelectedBlog = () => {
// 	let article = selectedBlogCard.childNodes[0].innerHTML;
// 	let wholeBlog = document.getElementById("entireBlog");
// 	wholeBlog.innerHTML = article;
	
// 	console.log("in printedSelectedBlog", article);
// };

},{"./apiKeys":1,"./events":3,"./firebaseApi":4}]},{},[5]);
