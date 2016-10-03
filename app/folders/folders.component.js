app.controller('FolderListController', function FolderListController($scope, $http) {
    $scope.folders = [];
    var arr_folder = [1,2,3,4,5,6];
    _.forEach(arr_folder ,function (i) {
        $http.get("../folder/" + i + ".json").then(function(responce){
            $scope.folders.push(responce.data);
        });
    });

});
