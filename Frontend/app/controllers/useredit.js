app.controller("useredit", function ($scope, $http, ajax, $routeParams, $location, $rootScope) {
    if ($rootScope.adminEdit == true) {
        ajax.get("https://localhost:44336/api/users/" + $routeParams.id, success, error);
        function success(response) {
            $scope.user = response.data;
            console.log($scope.users);
            console.log("ashsi");
        }
        function error(error) {

        }
    }
    else {
        alert("Please turn on edit action button");
        $location.path("/Admin");
    }



    $scope.edit = function (user) {
        if ($rootScope.adminUpdate == true) {
            console.log("ashshi");
            console.log(user);
            var d = {
                name: user.name,
                email: user.email,
                dept: user.dept,
                salary: user.salary,
            };
            console.log(d);

            ajax.put("https://localhost:44336/api/users/" + $routeParams.id, d,
                function (response) {
                    console.log(response);
                    alert("updated");
                },
                function (err) {
                    console.log(err);
                });
        }
        else {
            alert("Please turn on update action button");
            $location.path("/Admin");
        }

    };
});