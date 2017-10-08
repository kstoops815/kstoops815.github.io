"use strict";

const dom = require("./dom");
const blogs = require("./blogs");

// document.getElementById("blogHolder").addEventListener("click", function(e){
// 	console.log("click event", e);
// 	blogBox(e);
// 	printSelectedBlog();
// 	$("#entireBlog").removeClass("hidden");
// 	});

$("#blogHolder").click((e) => {
	blogBox(e);
	printSelectedBlog();
	$("#entireBlog").removeClass("hidden");
	});

let selectedBlogCard;

const blogBox = (e) => {
	if(e.target.classList.contains("child")){
		selectedBlogCard = e.target.parentNode;
	} else if(e.target.parentNode.parentNode.classList.contains("cards")){
		selectedBlogCard = e.target.parentNode.parentNode;
	} else if(e.target.classList.contains("cards")){
		selectedBlogCard = e.target;
	}
	return(selectedBlogCard);
	//console.log("in blogBox function", selectedBlogCard);
};

const printSelectedBlog = () => {
	let article = selectedBlogCard.childNodes[0].innerHTML;
	let wholeBlog = document.getElementById("entireBlog");
	wholeBlog.innerHTML = article;
	
	console.log("in printedSelectedBlog", article);
};
