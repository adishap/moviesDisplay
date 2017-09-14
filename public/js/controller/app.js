window.moviesApp = angular.module('moviesApp', ['ngRoute'])
    .constant('constants', {
        baseURL: 'http://api.cinemalytics.in/v2/',
        authToken: '9ADE42B2C8DE0A103296C9E6B4200904'
    });

moviesApp.controller("actorsController", function($scope, constants, $http) {
    $scope.actors = [];
    $http({
            method: 'GET',
            url: constants.baseURL + 'analytics/MaleActorsByHighestRating'
        })
        .success(function(data) {
            $scope.actors = $scope.actors.concat(data);
        });
    $http({
            method: 'GET',
            url: constants.baseURL + 'analytics/FemaleActorsByHighestRating'
        })
        .success(function(data) {
            $scope.actors = $scope.actors.concat(data);
        });

    // A simple back function, that will help us navigate between views
    $scope.back = function() {
        window.history.back();
    };
    $scope.getCount = function(n) {
        return new Array(parseInt(n));
    };
});
moviesApp.controller("actorDetailsController", function($scope, $http, constants, $routeParams) {
    var id = $routeParams.id;
    var authToken = constants.authToken;

    $http({
            method: 'GET',
            url: constants.baseURL + 'actor/' + id + '/movies/?auth_token=' + authToken
        })
        .success(function(data) {
            $scope.movies = data;
        });
});
moviesApp.controller("movieDetailsController", function($scope, $http, constants, $routeParams) {
    var id = $routeParams.id;
    var authToken = constants.authToken;

    $http({
            method: 'GET',
            url: constants.baseURL + 'movie/id/' + id + '/?auth_token=' + authToken
        })
        .success(function(data) {
            $scope.movie = data;
        });
});