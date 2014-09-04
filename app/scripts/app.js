'use strict';

/**
 * @ngdoc overview
 * @name webPosAnjsApp
 * @description
 * # webPosAnjsApp
 *
 * Main module of the application.
 */
angular
  .module('webPosAnjsApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/product', {
        templateUrl: 'views/product.html',
        controller: 'productCtrl'
      })
        .when('/shopping_cart', {
            templateUrl: 'views/shopping_cart.html',
            controller: 'shopping_cartCtrl'
        })
        .when('/payment', {
            templateUrl: 'views/payment.html',
            controller: 'paymentCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
