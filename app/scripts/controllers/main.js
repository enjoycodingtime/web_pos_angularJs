'use strict';

angular.module('webPosAnjsApp')
  .controller('MainCtrl', function ($scope,$location) {
     $scope.num = shopping_cart_num();
    $scope.product = function(){
    	 $location.path('/product');
    };
    $scope.shopping_cart = function(){
        $location.path('/shopping_cart');
    };
    $scope.main = function(){
        $location.path('/');
     };
  });
