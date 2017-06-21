(function (){
'use strict';
var x = 'hello';
angular.module('myFirstApp', [])

.controller('myFirstController', function ($scope) {
  $scope.name = "rrlero";
  $scope.sayHello = function () {
    return "Hello"
  }
});


})();
