var app = angular.module("momoAI", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "../views/main.html",
    })
    .when("/about", {
        templateUrl : "../views/about.html",
    })
    .when("/input", {
        controller : 'inputCtrl',
        templateUrl : "../views/input.html",
    })
});

app.controller('inputCtrl',inputCtrl);
