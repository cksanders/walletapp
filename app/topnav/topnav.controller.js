/**
 * @file Sets the Top Navigation Controller.
 * @author Chelsea Sanders 
 */
(function() {
  'use strict';

  angular
    .module('myApp.topnav')
    .controller('TopNav', TopNav);

  TopNav.$inject = ['menuItems'];

  function TopNav(menuItems) {
    var vm = this;
    vm.menuItems = menuItems;
    vm.reset = reset;

    function reset() {
      localStorage.clear();
      location.reload();
    }
  }
})();