
angular.module('webPosAnjsApp')
    .controller('paymentCtrl', function ($scope,$location) {
        $scope.num = shopping_cart_num();
        $scope.lists = bought_list();
        $scope.count = counted();
        $scope.cuts = cuted()-counted();
        $scope.cut = cut();
        $scope.time = new Time().get_time();
        $scope.product = function(){
            $location.path('/product');
        };
        $scope.shopping_cart = function(){
            $location.path('/shopping_cart');
        };
        $scope.main = function(){
            $location.path('/');
        };
        $scope.filters =function (number) {
            return parseInt(number);
        }
        $scope.confirm =function (number) {
            confirm();
              $location.path('/product');
        };

        $scope.check_cut =function(name){
            cuts= loadPromotions()[0].barcodes;
            if(_.indexOf(cuts,name) ==-1){
                return false;
            }
            else{
                return true;}
        };
        
    });
