(function () {
'use strict';

angular.module('Assignment', [])

.controller('AssignmentController', function ($scope) {
                           $scope.item = '';
                             $scope.totalDishes=0;

$scope.sayHello = function (string) {

var itemCount = $scope.item.length;

  if (itemCount == "0") {
    $scope.message="Please enter data first"
  } else if (itemCount <= "3") {
    $scope.message="Enjoy!!"
  } else {
    $scope.message="It's too much!!"
  }
  };
});

})();
