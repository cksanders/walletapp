/**
 * @file Sets the Wallet Routes JUnit tests.
 * @author Chelsea Sanders 
 */
(function() {
  'use strict';

  describe('myApp.wallet routes', function() {
    beforeEach(module('myApp.wallet'));

    it('should map route to controller', function() {
      inject(function($route) {
        expect($route.routes['/wallet'].controller).toBe('Wallet');
      });
    });

    it('should map route to template', function() {
      inject(function($route) {
        expect($route.routes['/wallet'].templateUrl).
          toEqual('wallet/wallet.html');
      });
    });
  });
})();