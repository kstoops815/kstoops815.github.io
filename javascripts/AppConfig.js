"use strict";

app.config(function($routeProvider){
	$routeProvider
	.when("/about_me", {
		templateUrl: "partials/about_me.html"
	})
	.when("/blogs", {
		templateUrl: "partials/blogs.html",
		controller: "BlogCtrl"
	})
	.when("/professional_history", {
		templateUrl: "partials/professional_history.html",
	})
	.when("/projects", {
		templateUrl: "partials/projects.html",
		controller: "ProjectsCtrl"
	})
	.otherwise("/about_me");
});