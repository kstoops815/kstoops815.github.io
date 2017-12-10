"use strict";

app.config(function($routeProvider){
	$routeProvider
	.when("/about_me", {
		templateUrl: "partials/about_me.html",
		controller: "AboutCtrl"
	})
	.when("/blogs", {
		templateUrl: "partials/blogs.html",
		controller: "BlogCtrl"
	})
	.when("/professional_history", {
		templateUrl: "partials/professional_history.html",
		controller: "ProfessionalCtrl"
	})
	.when("/projects", {
		templateUrl: "partials/projects.html",
		controller: "ProjectsCtrl"
	})
	.otherwise("/about_me");
});