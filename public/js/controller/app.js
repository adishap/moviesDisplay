window.moviesApp = angular.module('moviesApp', ['ngRoute']);

moviesApp.controller("actorsController", function($scope, $http) {
    $scope.actors = [];
    $http({
            method: 'GET',
            url: 'http://api.cinemalytics.in/v2/analytics/MaleActorsByHighestRating'
        })
        .success(function(data) {
            $scope.actors = $scope.actors.concat(data);
        });
    $http({
            method: 'GET',
            url: 'http://api.cinemalytics.in/v2/analytics/FemaleActorsByHighestRating'
        })
        .success(function(data) {
            $scope.actors = $scope.actors.concat(data);
        });


    $scope.currActor = null;
    $scope.getActorById = function(id) {
        var actors = $scope.actors;
        for (var i = 0; i < actors.length; i++) {
            var actor = $scope.actors[i];
            if (actor.Id == id) {
                $scope.currActor = actor;
            }
        }
    };
    // A simple back function, that will help us navigate between views
    $scope.back = function() {
        window.history.back();
    };
    $scope.getCount = function(n) {
        return new Array(parseInt(n));
    };
});
moviesApp.controller("actorDetailsController", function($scope, $routeParams) {
    $scope.getActorById($routeParams.id);
});