app.controller("register", function ($scope, ajax, $rootScope) {
    $scope.depts = ["User", "Admin"];

    $scope.createUser = function (user) {

        console.log(user);
        if (user.password != user.confirmpassword) {
            $scope.passError = "Passwords Does not Match";
        }
        else {
            ajax.post("https://localhost:44336/api/users", user,
                function (response) {
                    console.log(response);
                    alert("Congratulations!Welcome to Singularity Limited")
                    $location.path("/login");
                },
                function (err) {
                    console.log(err);
                });
        }
    };
})