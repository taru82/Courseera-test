(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
                           $scope.name = "Taru";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();
