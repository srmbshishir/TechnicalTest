app.controller("viewusers", function ($scope, $http, ajax, $rootScope, $location) {
    if ($rootScope.adminView == true) {
        console.log("ashis");
        ajax.get("https://localhost:44336/api/users", success, error);
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


    $scope.delete = function (id) {
        if ($rootScope.adminDelete == true) {
            if (confirm('Are you sure your want to delete?')) {
                //do stuff

                console.log("ashsi");
                ajax.delete("https://localhost:44336/api/users/" + id,
                    function (response) {
                        console.log(response);
                        // alert("deleted");
                    },
                    function (err) {
                        console.log(err);
                        alert("deleted");
                        ajax.get("https://localhost:44336/api/users", success, error);
                        function success(response) {
                            $scope.users = response.data;
                        }
                        function error(error) {

                        }

                    }
                );
            }
        }
        else {
            alert("Please turn on delete action");
            $location.path("/Admin");
        }
    }
});