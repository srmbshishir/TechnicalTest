app.controller("productedit", function ($scope, $http, ajax, $routeParams) {
    ajax.get("https://localhost:44336/api/products/" + $routeParams.id, success, error);
    function success(response) {
        $scope.product = response.data;
        console.log($scope.products);
        console.log("ashsi");
    }
    function error(error) {

    }

    $scope.edit = function (product) {
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
                alert("edited");
            },
            function (err) {
                console.log(err);
            });
    };




});