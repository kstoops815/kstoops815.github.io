"use strict";

let dom = require("./dom");

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

let blogs = [];

$.get("../db/blogPosts.json").done((data) => {
	blogs = data.blogs;
	console.log("in get", blogs);
	dom.blogDomString(blogs);
}).fail((error) => {
	console.log(error);
});



module.exports = {};