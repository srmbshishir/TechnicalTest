app.controller("adduser", function ($scope, ajax, $rootScope, $location) {
    $scope.depts = ["User", "Admin"];

    $scope.createUser = function (user) {
        if ($rootScope.adminAdd == true) {
            console.log(user);
            if (user.password != user.confirmpassword) {
                $scope.passError = "Passwords Does not Match";
            }
            else {
                ajax.post("https://localhost:44336/api/users", user,
                    function (response) {
                        console.log(response);
                        alert("User added!")
                    },
                    function (err) {
                        console.log(err);
                    });
            }
        }
        else {
            alert("Turn on add action");
            $location.path("/Admin");
        }


    };
})