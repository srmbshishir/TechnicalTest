app.controller("useredit", function ($scope, $http, ajax, $routeParams) {
    ajax.get("https://localhost:44336/api/users/" + $routeParams.id, success, error);
    function success(response) {
        $scope.user = response.data;
        console.log($scope.users);
        console.log("ashsi");
    }
    function error(error) {

    }

    $scope.edit = function (user) {
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
                alert("edited");
            },
            function (err) {
                console.log(err);
            });
    };




});