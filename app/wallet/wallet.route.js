/**
 * @file Sets the Wallet Routes.
 * @author Chelsea Sanders 
 */
(function() {
  'use strict';

  angular
    .module('myApp.wallet')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/wallet', {
          templateUrl: 'wallet/wallet.html',
          controller: 'Wallet',
          controllerAs: 'vm'
        });
      }]);
})();