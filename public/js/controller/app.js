window.moviesApp = angular.module('moviesApp', ['ngRoute', 'ngResource'])
    .constant('constants', {
        baseURL: 'http://api.cinemalytics.in/v2/'
    });

// actors list controller
moviesApp.controller("actorsController", function($scope, constants, $http) {
    // actors array
    $scope.actors = [];
    // get top 10 male actors
    $http({
            method: 'GET',
            url: constants.baseURL + 'analytics/MaleActorsByHighestRating'
        })
        .success(function(data) {
            // concat actors list
            $scope.actors = $scope.actors.concat(data);
        });

    // get top 10 female actors
    $http({
            method: 'GET',
            url: constants.baseURL + 'analytics/FemaleActorsByHighestRating'
        })
        .success(function(data) {
            // concat female actors list
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

// movie list page
moviesApp.controller("movieListController", function($scope, $http, constants, tokenFactory, $routeParams) {
    var id = $routeParams.id;
    var authToken = tokenFactory.query(); 
    // get the movie list for actor id
    $http({
            method: 'GET',
            url: constants.baseURL + 'actor/' + id + '/movies/?auth_token=' + authToken
        })
        .success(function(data) {
            $scope.movies = data;
        });
});

// movie details controller
moviesApp.controller("movieDetailsController", function($scope, $http, constants, tokenFactory, $routeParams) {
    var id = $routeParams.id;
    var authToken = tokenFactory.query();

    $http({
            method: 'GET',
            url: constants.baseURL + 'movie/id/' + id + '/?auth_token=' + authToken
        })
        .success(function(data) {
            $scope.movie = data;
        });
});