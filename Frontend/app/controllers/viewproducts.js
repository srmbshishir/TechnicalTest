app.controller("viewproducts", function ($scope, $http, ajax, $rootScope, $location) {
    if ($rootScope.view == true) {
        console.log("ashis");
        ajax.get("https://localhost:44336/api/products", success, error);
        function success(response) {
            console.log("S")
            $scope.products = response.data;
            console.log($scope.users);
        }
        function error(error) {
            console.log("E");
        }
    }
    else {
        alert("Please turn on view action");
        $location.path("/User");
    }

    $scope.delete = function (id) {
        if ($rootScope.delete == true) {
            if (confirm('Are you sure your want to delete?')) {
                //do stuff

                console.log("ashsi");
                ajax.delete("https://localhost:44336/api/products/" + id,
                    function (response) {
                        console.log(response);
                        // alert("deleted");
                    },
                    function (err) {
                        console.log(err);
                        alert("deleted");
                        ajax.get("https://localhost:44336/api/products", success, error);
                        function success(response) {
                            $scope.products = response.data;
                        }
                        function error(error) {

                        }

                    }
                );
            }
        }
        else {
            alert("Please turn on delete action");
            $location.path("/User");
        }
    }
});