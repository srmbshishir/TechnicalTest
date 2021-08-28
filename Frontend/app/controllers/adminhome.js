app.controller("adminhome", function ($scope, ajax, $rootScope) {
    $rootScope.PageType = "admin";
    $scope.add = function () {
        console.log("ahsi");
        $rootScope.adminAdd = !$rootScope.adminAdd;
        console.log($rootScope.adminAdd);
        // if ($rootScope.adminAdd == true) {
        //     $scope.statusAdd = "on";
        // }
        // else {
        //     $scope.statusAdd = "off";
        // }
    };
    $scope.edit = function () {
        console.log("ahsi");
        $rootScope.adminEdit = !$rootScope.adminEdit;
        console.log($rootScope.adminEdit);
        // if ($rootScope.adminEdit == true) {
        //     $scope.statusEdit = "on";
        // }
        // else {
        //     $scope.statusEdit = "off";
        // }
    };
    $scope.update = function () {
        console.log("ahsi");
        $rootScope.adminUpdate = !$rootScope.adminUpdate;
        console.log($rootScope.adminUpdate);
        // if ($rootScope.adminUpdate == true) {
        //     $scope.statusUpdate = "on";
        // }
        // else {
        //     $scope.statusUpdate = "off";
        // }
    };
    $scope.delete = function () {
        console.log("ahsi");
        $rootScope.adminDelete = !$rootScope.adminDelete;
        console.log($rootScope.adminDelete);
        // if ($rootScope.adminDelete == true) {
        //     $scope.statusDelete = "on";
        // }
        // else {
        //     $scope.statusDelete = "off";
        // }
    };
    $scope.view = function () {
        console.log("ahsi");
        $rootScope.adminView = !$rootScope.adminView;
        console.log($rootScope.adminView);
        // if ($rootScope.adminView == true) {
        //     $scope.statusView = "on";
        // }
        // else {
        //     $scope.statusView = "off";
        // }
    };
})