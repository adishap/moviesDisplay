moviesApp.factory('tokenFactory', function ($resource) {
    return $resource('/authToken');
});