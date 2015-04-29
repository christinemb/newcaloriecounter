angular.module('newCalorieCounter.controllers', [])

.controller('AppCtrl', function($scope) {
 $scope.categories = ['Meat', 'Vegetable', 'Fruit', 'Snacks'];
  

   
})

.controller('foodsCtrl', function($scope, $stateParams) {
categories = ['Meat', 'Vegetable', 'Fruit', 'Fish&Poultry' , 'Drinks'];
    
    foodlists = [
    [
     "back bacon",
      "beef fillet",
      "pork sausage",
      "pork chop",
       "pork fillet",
      "roast beef",
      "roast lamb",
      "sirlion steak",
       "streaky bacon"
    ],
    [
      "asparagus",
      "broccoli",
      "onion",
      "cabbage",
      "carrot",
      "courgette",
      "greenbeans",
      "parsnip",
      "red pepper",
       "tomato",
    ],
    [
      "apple",
      "banana",
      "blueberries",
      "kiwi",
     "orange",
      "peach",
      "pear",
      "pinepple",
     "strawberry",

   ],
   [
     "muffin",
      "sweets",
      "chocolate",
     "lollipop",
      "popcorn",
      "crisps",
      "toffee",
     "cake",
        ],
    [
       
    
     
 
 ];
     
     

 $scope.category = categories[$stateParams.foodsId];
    $scope.foods = foods[$stateParams.foodlistsId];
 });
 
$scope.dishesId = $stateParams.dishesId;
});
