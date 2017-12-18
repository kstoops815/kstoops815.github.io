"use strict";

app.controller("BlogCtrl", function($scope, BlogsService) {

	const showBlogs = () => {
		BlogsService.getBlogs().then((results) => {
			$scope.blogs = results;
		}).catch((error) => {
			console.log("error in showBlogs", error);
		});
	};

	showBlogs();

	$scope.printSelectedBlog = (blog) => {
		$scope.highlightedBlog = blog;
	};

});