moviesApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'tmpl/home.html'
        }).when('/actor/:id', {
            templateUrl: 'tmpl/actor.html',
            controller: 'actorDetailsController'
        }).when('/movie/:id', {
            templateUrl: 'tmpl/movie.html',
            controller: 'movieDetailsController'
        }).otherwise({
            redirectTo: '/'
        });
});