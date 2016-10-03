var app=angular.module('myApp',['ngRoute','pictureDetail', 'gallery']);
app.controller('Folders',['$scope',"$http",function($scope,$http){
    $scope.folders = "Folders";
}]);
app.controller('Contacts',['$scope',function($scope){
    $scope.contacts = "Contacts";
}]);
