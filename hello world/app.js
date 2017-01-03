var helloWorld = angular.module('helloWorld',[]);

helloWorld.controller('homeController',['$scope', function($scope){
    $scope.name = "World";
}]);