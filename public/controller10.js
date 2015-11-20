//inject angular file upload directives and services.
var app = angular.module('fileUpload', ['ngFileUpload']);
var id = 'hasdh';
app.controller('MyCtrl', ['$scope', 'Upload', '$timeout','$http',  function ($scope, Upload, $timeout, $http) {
    console.log("Csadad");


    $scope.addData = function() {





        console.log("whore1");
        $http.get('../olarequest').success(function (response) {
            console.log(response);
        });


    }

}]);/**
 * Created by NI9E_MACHINE on 20-Nov-15.
 */
