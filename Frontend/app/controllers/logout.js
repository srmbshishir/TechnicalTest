app.controller("logout", function ($scope, ajax, $rootScope, $location) {
    if (localStorage.getItem("user")) {
        localStorage.removeItem("user");
    }

    $rootScope.isUserLoggedIn = false;
    $rootScope.PageType = "home";

    $rootScope.Id = "";
    $rootScope.UserType = "";
    $rootScope.UserName = "";
    $rootScope.UserEmail = "";

    $location.path("/");
});