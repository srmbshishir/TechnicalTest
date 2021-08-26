app.controller("login", function ($scope, ajax, $rootScope, $location) {
    if ($rootScope.isUserLoggedIn) {
        $location.path("/");
        return;
    }
    $rootScope.PageType = "login";
    console.log($rootScope.PageType);
    $scope.login = function (user) {
        console.log(user);
        ajax.post(
            "https://localhost:44336/api/Login", user,
            function (response) {
                $scope.user = response.data;
                console.log($scope.user);
                if ($scope.user == null) {
                    alert("Invalid Email and Password");
                } else {
                    console.log("ok");
                    //set id value and type value
                    $rootScope.UserId = $scope.user.id;
                    $rootScope.UserType = $scope.user.dept;
                    $rootScope.UserName = $scope.user.name;
                    $rootScope.UserEmail = $scope.user.email;
                    localStorage.setItem("user", JSON.stringify($scope.user));
                    if ($rootScope.UserType.trim() === "Admin") {
                        $rootScope.isUserLoggedIn = true;
                        $location.path("/Admin");
                    }
                    else if ($scope.user.dept.trim() === "User") {
                        console.log("he");
                        $rootScope.isUserLoggedIn = true;
                        $location.path("/User");
                    }
                }
            },
            function (err) {
                alert(err);
            }
        );
    };
});