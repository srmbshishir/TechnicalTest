var app = angular.module("myApp", ["ngRoute"]);
app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "views/pages/demopage.html"
        })
        .when("/userhome", {
            templateUrl: "views/pages/userhome.html",
            controller: 'userhome'
        })
        .otherwise({
            redirectTo: "/"
        });


}]);

app.controller("myController", function ($rootScope) {
    $rootScope.toggle = false;
})