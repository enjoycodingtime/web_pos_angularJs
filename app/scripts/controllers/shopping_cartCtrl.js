angular.module('webPosAnjsApp')
    .controller('shopping_cartCtrl', function ($scope,$location) {
        $scope.num = shopping_cart_num();
        $scope.lists = bought_list();
        $scope.count = counted();
        if(!check_num()){
            alert('sorry!购物车没有商品,请疯狂的购物吧');
            $location.path('/product');
        };
        $scope.product = function(){
            $location.path('/product');
        };
        $scope.add_num = function(name){
            add(name);
            $scope.num = shopping_cart_num();
        $scope.lists = bought_list();
        $scope.count = counted();
        };
        $scope.lower_num = function(name){
            lower(name);
            $scope.num = shopping_cart_num();
        $scope.lists = bought_list();
        $scope.count = counted();
        if(!check_num()){
             $location.path('/product'); 
        }
        };
        $scope.shopping_cart = function(){
            $location.path('/shopping_cart');
        };
        $scope.main = function(){
            $location.path('/');
        };
        $scope.pay = function(){
            $location.path('/payment');
        };
        $scope.check_cut =function(name){
            cuts= loadPromotions()[0].barcodes;
            if(_.indexOf(cuts,name) ==-1){
                return false;
            }
            else{
                return true;}
        };
        $scope.filters =function (number) {
            return parseInt(number);
        }
    });
