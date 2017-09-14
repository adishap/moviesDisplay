moviesApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'tmpl/actorList.html'
        }).when('/actor/:id', {
            templateUrl: 'tmpl/movieList.html',
            controller: 'movieListController'
        }).when('/movie/:id', {
            templateUrl: 'tmpl/movie.html',
            controller: 'movieDetailsController'
        }).otherwise({
            redirectTo: '/'
        });
});