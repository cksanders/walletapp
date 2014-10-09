/**
 * @file Sets the myApp Routes.
 * @author Chelsea Sanders 
 */
(function() {
  'use strict';

  angular
    .module('myApp')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
          .when('/', {redirectTo: '/wallet'})
          .otherwise({redirectTo: '/wallet'});
      }]);
})();