moviesApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'tmpl/home.html'
        }).when('/actor/:id', {
            templateUrl: 'tmpl/actor.html',
            controller: 'actorDetailsController'
        }).otherwise({
            redirectTo: '/'
        });
});