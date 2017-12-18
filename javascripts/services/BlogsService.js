"use strict";

app.service("BlogsService", function($http, $q, FIREBASE_CONFIG) {
	const getBlogs = () => {
		let blogs = [];
		return $q((resolve, reject) => {
		  $http.get(`${FIREBASE_CONFIG.databaseURL}/blogs.json`)
		  .then((results) => {
				let fbBlogs = results.data;
		    Object.keys(fbBlogs).forEach((key) => {
		    	fbBlogs[key].id = key;
		    	blogs.push(fbBlogs[key]);
				});
		    resolve(blogs);
		    }).catch((error) => {
		   	reject(error);
		    });
		});
		};
	
	const postBlog = (blog) => {
		return $http.post(`${FIREBASE_CONFIG.databaseURL}/blogs.json`, JSON.stringify(blog));
	};

	const getSingleBlog = (blogId) => {
		return $http.get(`${FIREBASE_CONFIG.databaseURL}/blogs/${blogId}.json`);
	};

	return {getBlogs, getSingleBlog, postBlog};

});
