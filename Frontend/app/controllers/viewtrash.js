app.controller("viewtrash", function ($scope, $http, ajax, $rootScope) {
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

    $scope.Search = function () {
        console.log("ashsi");
        ajax.get("https://localhost:44384/api/Package/Search/" + $scope.search + "/" + $rootScope.UserId,
            function success(response) {
                $scope.products = response.data;
            },
            function (err) {
                console.log(err);
            }
        );
    }

    $scope.ShowAll = function () {
        ajax.get("https://localhost:44384/api/Package/GetAll/" + $rootScope.UserId, success, error);
        function success(response) {
            $scope.products = response.data;
        }
        function error(error) {

        }
    }
});