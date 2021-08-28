app.controller("productedit", function ($scope, $http, ajax, $routeParams, $rootScope, $location) {
    if ($rootScope.edit == true) {
        ajax.get("https://localhost:44336/api/products/" + $routeParams.id, success, error);
        function success(response) {
            $scope.product = response.data;
            console.log($scope.products);
            console.log("ashsi");
        }
        function error(error) {

        }
    }
    else {
        alert("Please turn on edit action button");
        $location.path("/User");
    }

    $scope.edit = function (product) {
        if ($rootScope.update == true) {
            console.log("ashshi");
            console.log(product);
            var d = {
                name: product.name,
                category: product.category,
                price: product.price,
            };
            console.log(d);

            ajax.put("https://localhost:44336/api/products/" + $routeParams.id, d,
                function (response) {
                    console.log(response);
                    alert("updated");
                },
                function (err) {
                    console.log(err);
                }
            );
        }
        else {
            alert("Please turn on update action button");
            $location.path("/User");
        }
    };




});