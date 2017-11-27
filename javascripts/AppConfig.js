"use strict";

app.config(function($routeProvider){
	.when("/about_me", {
		templateUrl: "partials/about_me.html",
		controller: "AboutCtrl"
	})
	.when("/blog", {
		templateUrl: "partials/blog.html",
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