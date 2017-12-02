"use strict";

app.service("PersonalSiteService", function($http, $q, FIREBASE_CONFIG) {
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
		    }).fail((error) => {
		   	reject(error);
		    });
		});
  	};

	const getProjects = () => {
		let projects = [];
	    return $q((resolve, reject) => {
	    	$http.get(`${FIREBASE_CONFIG.databaseURL}/projects.json`)
	      	.then((results) => {
	       	let fbProjects = results.data;
	       	Object.keys(fbProjects).forEach((key) => {
	       		fbProjects[key].id = key;
	       		projects.push(fbProjects[key]);
	       	});
	        resolve(projects);
	      	}).fail((error) => {
	        reject(error);
	      	});
	    });
	};
	
	const postBlog = (blog) => {
		return $http.post(`${FIREBASE_CONFIG.databaseURL}/blogs.json`, JSON.stringify(blog));
	};

	const postProject = (project) => {
		return $http.post(`${FIREBASE_CONFIG.databaseURL}/projects.json`, JSON.stringify(project));
	};

	const getSingleBlog = (blogId) => {
		return $http.get(`${FIREBASE_CONFIG.databaseURL}/blogs/${blogId}.json`);


	};









	return {getBlogs, getProjects, getSingleBlog, postBlog, postProject};

});
