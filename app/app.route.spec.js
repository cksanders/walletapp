/**
 * @file Sets the myApp Routes JUnit tests.
 * @author Chelsea Sanders 
 */
(function() {
  'use strict';

  describe('myApp routes', function() {
    beforeEach(module('myApp'));

    it('should map routes not defined to /wallet', function() {
      inject(function($route) {
        expect($route.routes[null].redirectTo).toEqual('/wallet')
      });
    });

  });
})();