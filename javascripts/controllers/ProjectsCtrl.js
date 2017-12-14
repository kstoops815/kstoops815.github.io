"use strict";

app.controller("ProjectsCtrl", function($scope, ProjectsService) {

		const showProjects = () => {
			ProjectsService.getProjects().then((results) => {
        $scope.projects = results;
        console.log("results in ctrl", $scope.projects);
			}).catch((error) => {
				console.log("error in showProjects", error);
			});
		};

    showProjects();
    
  });