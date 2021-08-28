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
        .when("/AddProduct", {
            templateUrl: "views/pages/addproduct.html",
            controller: 'addproduct'
        })
        .when("/ViewProducts", {
            templateUrl: "views/pages/viewproducts.html",
            controller: 'viewproducts'
        })
        .when("/product/edit/:id", {
            templateUrl: "views/pages/productedit.html",
            controller: 'productedit'
        })
        .when("/ProductTrash", {
            templateUrl: "views/pages/ProductTrash.html",
            controller: 'ProductTrash'
        })
        .otherwise({
            redirectTo: "/"
        });


}]);

app.controller("myController", function ($rootScope) {
    $rootScope.add = false;
    $rootScope.edit = false;
    $rootScope.update = false;
    $rootScope.delete = false;
    $rootScope.view = false;

    $rootScope.adminAdd = false;
    $rootScope.adminEdit = false;
    $rootScope.adminUpdate = false;
    $rootScope.adminDelete = false;
    $rootScope.adminView = false;

    $rootScope.UserId = "";
    $rootScope.UserType = "";
    $rootScope.UserName = "";
    $rootScope.UserEmail = "";
    $rootScope.PageType = "home";

})