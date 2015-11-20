//inject angular file upload directives and services.
var app = angular.module('fileUpload', ['ngFileUpload']);
var id = 'hasdh';
app.controller('MyCtrl', ['$scope', 'Upload', '$timeout','$http',  function ($scope, Upload, $timeout, $http) {
    console.log("Csadad");


    $scope.addData = function() {





        console.log("whore1");
<<<<<<< HEAD
        $http.post('../olarequest').success(function (response) {
=======
        $http.get('../olarequest').success(function (response) {
>>>>>>> origin/master
            console.log(response);
        });


    }

}]);/**
 * Created by NI9E_MACHINE on 20-Nov-15.
 */
