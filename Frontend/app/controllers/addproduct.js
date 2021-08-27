app.controller("addproduct", function ($scope, ajax, $rootScope) {

    $scope.CreateProduct = function (product) {

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

    };
})