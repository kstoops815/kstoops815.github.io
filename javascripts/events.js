"use strict";

const dom = require("./dom");
const blogs = require("./blogs");

$("#blogHolder").click((e) => {
	blogBox(e);
	printSelectedBlog(e);
	$("#entireBlog").removeClass("hidden");
	});

let selectedBlogCard;

const blogBox = (e) => {
	let target = $(e.target);
	if(target.hasClass("child")){
		selectedBlogCard = target.parent();
	} else if(target.parents().hasClass("cards")){
		selectedBlogCard = target.parent().parent();
	}
};

const printSelectedBlog = () => {
	let article = selectedBlogCard.html();
	console.log("article", article);
 	$("#entireBlog").html(article);
};

module.exports = {};