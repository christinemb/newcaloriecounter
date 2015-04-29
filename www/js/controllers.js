angular.module('newCalorieCounter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  

   
})

.controller('foodsCtrl', function($scope, $stateParams) {

$scope.dishesId = $stateParams.dishesId;
});
