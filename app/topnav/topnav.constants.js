/**
 * @file Sets the Top Navigation Constants.
 * @author Chelsea Sanders 
 */
(function() {
  'use strict';

  angular
    .module('myApp.topnav')
    .constant('menuItems', {icon: 'Wallet App', home: 'Home', reset: 'Reset',
      viewSource: 'View Source'});
})();