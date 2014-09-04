/**
 * Created by zk on 14-9-4.
 */
angular.module('webPosAnjsApp')
    .controller('productCtrl', function ($scope,$location) {
        $scope.products = new Product().list();
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
        $scope.add_to_shopping_cart = function(name){
            add_num(name);
            $scope.num +=1;
        };
    });
