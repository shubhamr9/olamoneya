//inject angular file upload directives and services.
var app = angular.module('fileUpload', ['ngFileUpload']);
var id = 'hasdh';
app.controller('MyCtrl', ['$scope', 'Upload', '$timeout','$http',  function ($scope, Upload, $timeout, $http) {
    console.log("Csadad");


    $scope.addData = function() {




        console.log($scope.merchant);
        console.log("whore");
        $http.post('../billgenerator', $scope.merchant).success(function (response) {
            console.log(response);
        });


    }

}]);