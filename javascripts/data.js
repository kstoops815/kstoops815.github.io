"use strict";

let dom = require("./dom");
let firebaseApi = require("./firebaseApi");

// const showBlogs = (blogs) => {
// 	let blogsArray = [];
// 	console.log("in show blogs");
// 	firebaseApi.getBlogs()
// 	.then((results) => {
// 		Object.keys(results).forEach((blog) => {
// 			blogsArray.push(result);
// 			});
// 		});
// 		console.log("in show blogs", blogs);
// 		dom.blogDomString(blogs);
// 	}).catch((error) => {
// 		console.log("error in showBlogs", error);
// 	});
// };

// const showBlogs = (blogs) => {
// 	let blogsArray = [];
// 	firebaseApi.getBlogs()
// 	.then((results) => {
// 		Object.keys(blogs).forEach((blog) => {
// 			blogsArray.push(blogs[blog]);
// 		});
// 		dom.blogDomString(blogsArray);
// 	}).catch((error) => {
// 		console.log("error in showBlogs", error);
// 	});
// };

// const showProjects = (projects) => {
// 	firebaseApi.getProjects()
// 	.then((results) => {
// 		console.log("in show projects", firebaseApi.getProjects());
// 		dom.projectDomString(projects);
// 	}).catch((error) => {
// 			console.log("error in showProjects", error);
// 	});
// };

// function putMyBlogsInDom(){
// 	let blogsData = JSON.parse(this.responseText);
// 	//console.log("blog posts", blogsData.blogs);
// 	allBlogs = blogsData.blogs;
// 	blogDomString(blogsData.blogs);
// }

// const ifLoadFails = () => {
// 	console.log("it's broken");

// const showBlogs = (blogs) => {
// 	firebaseApi.getBlogs().then(
// 		dom.printBlogsToPage(blogs);
// 	).catch((error) => {
// 		console.log("error in showBlogs", error);
// 	});
// };

// const showProjects = (projects) => {
// 	firebaseApi.getProjects().then(
// 		dom.printProjectsToDom(projects);
// 	).catch((error) => {
// 		console.log("error in showProjects", error);
// 	})
// }

// }

// const myBlogs = new XMLHttpRequest();
// myBlogs.addEventListener("load", putMyBlogsInDom);
// myBlogs.addEventListener("error", ifLoadFails);
// myBlogs.open("GET", "blogPosts.json");
// myBlogs.send();

// let blogs = [];

// $.get("../db/blogPosts.json").done((data) => {
// 	blogs = data.blogs;
// 	console.log("in get", blogs);
// 	dom.blogDomString(blogs);
// }).fail((error) => {
// 	console.log(error);
// });



