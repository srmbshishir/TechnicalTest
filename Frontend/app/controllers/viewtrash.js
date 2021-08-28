app.controller("viewtrash", function ($scope, $http, ajax, $rootScope, $location) {
    if ($rootScope.adminView == true) {
        console.log("ashis");
        ajax.get("https://localhost:44336/api/trash", success, error);
        function success(response) {
            console.log("S")
            $scope.users = response.data;
            console.log($scope.users);
        }
        function error(error) {
            console.log("E");
        }
    }
    else {
        alert("Please turn on view action");
        $location.path("/Admin");
    }


    $scope.recover = function (id) {
        if (confirm('Are you sure your want to recover?')) {
            //do stuff

            console.log("ashsi");
            ajax.put("https://localhost:44336/api/recover/" + id,
                function (response) {
                    console.log(response);
                },
                function (err) {
                    console.log(err);
                    alert("recovered");
                    ajax.get("https://localhost:44336/api/trash", success, error);
                    function success(response) {
                        $scope.users = response.data;
                    }
                    function error(error) {

                    }

                }
            );
        }
    }
});