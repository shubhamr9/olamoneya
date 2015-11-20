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
    
$http({
  method: 'GET',
  url: '/olarequest'
}).then(function successCallback(response) {
        $http.post('../olarequest').success(function (response) {
            console.log("hola"+response);
        });

  }, function errorCallback(response) {
console.log(response);
  });

}]);
