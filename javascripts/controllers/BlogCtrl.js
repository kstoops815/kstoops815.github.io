"use strict";

app.controller("BlogCtrl", function($scope, BlogsService) {



		const showBlogs = () => {
			BlogsService.getBlogs().then((results) => {
        $scope.blogs = results;
        console.log("results in ctrl", $scope.blogs);
			}).catch((error) => {
				console.log("error in showBlogs", error);
			});
		};

		showBlogs();


$scope.printSelectedBlog = (blog) => {
	$scope.highlightedBlog = blog;
	console.log("article", blog);
};

});