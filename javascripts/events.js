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
	printSelectedBlog(e);
	$("#entireBlog").removeClass("hidden");
	});

let selectedBlogCard;

const blogBox = (e) => {
	let target = $(e.target);
	if(target.hasClass("child")){
		//console.log("click event if", e);
		selectedBlogCard = target.parent();
		//console.log("click event if", selectedBlogCard);
	} else if(target.parents().hasClass("cards")){
		//console.log("first else if", e);
		selectedBlogCard = target.parent().parent();
	}
	console.log("above return", selectedBlogCard);
	return(selectedBlogCard);


	//console.log("in blogBox function", selectedBlogCard);
};

const printSelectedBlog = () => {
	let article = selectedBlogCard.html();
	console.log("article", article);
 	$("#entireBlog").html(article);
};

module.exports = {};