var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController', ['$scope', function($scope) {
    $scope.greeting = 'Hola!';
}]);


var nameApp = angular.module('nameApp', []);

nameApp.controller('NameCtrl', function ($scope){
    $scope.names = ['Larry', 'Curly', 'Moe'];
    $scope.addName = function() {
      $scope.names.push($scope.enteredName);
      $scope.enteredName = '';
    };
    $scope.removeName = function(name) {
      var i = $scope.names.indexOf(name);
      $scope.names.splice(i, 1);
    };
});
