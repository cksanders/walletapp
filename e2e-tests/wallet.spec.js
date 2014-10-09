/**
 * @file Sets the wallet.html Selenium Service tests.
 * @author Chelsea Sanders 
 * @see https://github.com/angular/protractor/blob/master/docs/toc.md
 */
(function() {
  'use strict';

  describe('wallet', function() {
    beforeEach(function() {
      browser.get('index.html#/wallet');
    });

    it('should render wallet when user navigates to /wallet', function() {
      // Assert
      expect(element.all(by.css('[ng-view] .jumbotron h1')).first().getText()).
        toMatch(/The Wallet Application!/);
    });

    it('should allow user to put money into the wallet', function() {
      // Arrange & Act
      element(by.model('vm.select.amount')).sendKeys('20');
      element(by.css('.btn.btn-primary')).click();

      // Assert
      expect(element.all(by.css('[ng-view] tr:nth-last-child(2) td:nth-last-child(2)')).getText()).
        toMatch(/20/);
    });

    it('should allow user to take existing money out of the wallet', function() {
      // Arrange & Act
      element(by.model('vm.select.amount')).sendKeys('20');
      element(by.css('.btn.btn-primary')).click();
      element(by.model('vm.select.amount')).sendKeys('20');
      element(by.css('.btn.btn-danger')).click();

      // Assert
      expect(element.all(by.css('[ng-view] tr:nth-last-child(2) td:nth-child(3)')).getText()).
        toMatch(/20/);
    });
  });
})();