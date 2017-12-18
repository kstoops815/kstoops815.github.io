"use strict";

app.controller("ProjectsCtrl", function($scope, ProjectsService) {

		const showProjects = () => {
			ProjectsService.getProjects().then((results) => {
        $scope.projects = results;
			}).catch((error) => {
				console.log("error in showProjects", error);
			});
		};

    showProjects();
    
  });