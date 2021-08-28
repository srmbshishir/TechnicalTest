app.controller("userhome", function ($scope, ajax, $rootScope) {
    $rootScope.PageType = "user";
    $scope.addproduct = function () {
        console.log("ahsi");
        $rootScope.add = !$rootScope.add;
        // console.log($rootScope.add);
        // if ($rootScope.add == true) {
        //     $scope.statusAdd = "on";
        // }
        // else {
        //     $scope.statusAdd = "off";
        // }
    };
    $scope.editproduct = function () {
        console.log("ahsi");
        $rootScope.edit = !$rootScope.edit;
        // console.log($rootScope.edit);
        // if ($rootScope.edit == true) {
        //     $scope.statusEdit = "on";
        // }
        // else {
        //     $scope.statusEdit = "off";
        // }
    };
    $scope.updateproduct = function () {
        console.log("ahsi");
        $rootScope.update = !$rootScope.update;
        // console.log($rootScope.update);
        // if ($rootScope.update == true) {
        //     $scope.statusUpdate = "on";
        // }
        // else {
        //     $scope.statusUpdate = "off";
        // }
    };
    $scope.deleteproduct = function () {
        console.log("ahsi");
        $rootScope.delete = !$rootScope.delete;
        // console.log($rootScope.delete);
        // if ($rootScope.delete == true) {
        //     $scope.statusDelete = "on";
        // }
        // else {
        //     $scope.statusDelete = "off";
        // }
    };
    $scope.viewproduct = function () {
        console.log("ahsi");
        $rootScope.view = !$rootScope.view;
        // console.log($rootScope.view);
        // if ($rootScope.view == true) {
        //     $scope.statusView = "on";
        // }
        // else {
        //     $scope.statusView = "off";
        // }
    };
})
