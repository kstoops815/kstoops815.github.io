"use strict";

const dom = require("./dom");
const blogs = require("./blogs");

$("body").click((e) => {
	blogBox(e);
	printSelectedBlog(e);
if($(e.target).parents().hasClass("cards") === false) {
		clearSelectedBlog();
	}
	});

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

module.exports = {};