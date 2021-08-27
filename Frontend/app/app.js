var app = angular.module("myApp", ["ngRoute"]);
app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "views/pages/mainhome.html",
            controller: 'mainhome'
        })
        .when("/userhome", {
            templateUrl: "views/pages/userhome.html",
            controller: 'userhome'
        })
        .when("/register", {
            templateUrl: "views/pages/register.html",
            controller: 'register'
        })
        .when("/login", {
            templateUrl: "views/pages/login.html",
            controller: 'login'
        })
        .when("/logout", {
            templateUrl: "views/pages/logout.html",
            controller: 'logout'
        })
        .when("/Admin", {
            templateUrl: "views/pages/adminhome.html",
            controller: 'adminhome'
        })
        .when("/AddUser", {
            templateUrl: "views/pages/adduser.html",
            controller: 'adduser'
        })
        .when("/ViewUsers", {
            templateUrl: "views/pages/viewusers.html",
            controller: 'viewusers'
        })
        .when("/ViewTrash", {
            templateUrl: "views/pages/viewtrash.html",
            controller: 'viewtrash'
        })
        .when("/user/edit/:id", {
            templateUrl: "views/pages/useredit.html",
            controller: 'useredit'
        })
        .when("/User", {
            templateUrl: "views/pages/userhome.html",
            controller: 'userhome'
        })
        .when("/ViewProducts", {
            templateUrl: "views/pages/viewproducts.html",
            controller: 'viewproducts'
        })
        .otherwise({
            redirectTo: "/"
        });


}]);

app.controller("myController", function ($rootScope) {
    $rootScope.toggle = false;
    $rootScope.UserId = "";
    $rootScope.UserType = "";
    $rootScope.UserName = "";
    $rootScope.UserEmail = "";
    $rootScope.PageType = "home";

})