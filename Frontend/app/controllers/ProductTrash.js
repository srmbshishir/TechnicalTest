app.controller("ProductTrash", function ($scope, $http, ajax, $rootScope) {
    console.log("ashis");
    ajax.get("https://localhost:44336/api/producttrash", success, error);
    function success(response) {
        console.log("S")
        $scope.products = response.data;
        console.log($scope.products);
    }
    function error(error) {
        console.log("E");
    }

    $scope.recover = function (id) {
        if (confirm('Are you sure your want to recover?')) {
            //do stuff

            console.log("ashsi");
            ajax.put("https://localhost:44336/api/productrecover/" + id,
                function (response) {
                    console.log(response);
                },
                function (err) {
                    console.log(err);
                    alert("recovered");
                    ajax.get("https://localhost:44336/api/producttrash", success, error);
                    function success(response) {
                        $scope.products = response.data;
                    }
                    function error(error) {

                    }

                }
            );
        }
    }
});