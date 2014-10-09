/**
 * @file Sets the Wallet Controller JUnit tests.
 * @author Chelsea Sanders 
 */
(function() {
  'use strict';

  describe('myApp.wallet controller', function() {
    beforeEach(module('myApp.wallet'));

    var scope, vm, entries;

    beforeEach(inject(function($rootScope, $controller) {   
      // Create an instance of the rootscope
      scope = $rootScope.$new();
      
      // Mock local storage
      entries = '[{"id":1,"amountin":30,"amountout":"","balance":30,"date":"' 
        + '2014-10-01T14:52:30.593Z"}]';
      localStorage.setItem('entries', entries);
      
      // Create an instance of the Wallet controller
      vm = $controller('Wallet', {$scope: scope});   
    }));


    it('should automatically load local storage', function() {
      // Assert
      expect(vm.entries).toEqual(JSON.parse(entries));
    });

    it('should allow user to add money to wallet', function() {
        // Arrange
        var amount = 20;
      
        // Act
        vm.submit(amount);
        
        // Assert
        expect(vm.balanceUnavailable).toBeFalsy();
    });
    
    it('should allow user remove money from wallet', function() {
        // Arrange
        var amount = -20;
      
        // Act
        vm.submit(amount);
        
        // Assert
        expect(vm.balanceUnavailable).toBeFalsy();
    });

    it('should ensure amount is valid if balance is available', function() {
      // Arrange
      var validAmount = '20';

      // Act
      var actual = vm.balanceAvailable(validAmount);
      
      // Assert
      expect(actual).toBeTruthy();
    });
    
    it('should ensure amount is invalid if balance is unavailable', function() {
      // Arrange
      var invalidAmount = '-200';

      // Act
      var actual = vm.balanceAvailable(invalidAmount);
      
      // Assert
      expect(actual).toBeFalsy();
    });

    it('should save input to scope', function() {
      // Arrange
      var amount = 45;
      
      // Act
      vm.save(amount);
      
      // Assert
      expect(vm.entries[vm.entries.length - 1]).toEqual({
        id: 1,
        amountin: 45,
        amountout: '',
        balance: 75,
        date: new Date()
      });
    });
    
    it('should save input to local storage', function() {
      // Arrange
      var amount = 45;
      
      // Act
      vm.save(amount);
      
      // Assert
      expect(vm.entries[vm.entries.length - 1].balance).toEqual(75);
    });
  });
})();