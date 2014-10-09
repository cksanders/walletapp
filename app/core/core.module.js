/**
 * @file Sets the Core Module.
 * @author Chelsea Sanders 
 */
(function() {
  'use strict';

  angular.module('myApp.core', [
    'ngRoute',
    'myApp.version',
    'ngTouch'
  ]);
})();