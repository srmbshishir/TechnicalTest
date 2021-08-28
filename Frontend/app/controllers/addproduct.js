app.controller("addproduct", function ($scope, ajax, $rootScope, $location) {

    $scope.CreateProduct = function (product) {

        if ($rootScope.add == true) {
            console.log(product);

            ajax.post("https://localhost:44336/api/products", product,
                function (response) {
                    console.log(response);
                    alert("Product added!")
                },
                function (err) {
                    console.log(err);
                    alert("Error");
                });


        }
        else {
            alert("Turn on add action");
            $location.path("/User");
        }
    };
})