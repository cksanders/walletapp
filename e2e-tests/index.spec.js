/**
 * @file Sets the index.html Selenium Service tests.
 * @author Chelsea Sanders 
 * @see https://github.com/angular/protractor/blob/master/docs/toc.md
 */
(function() {
  'use strict';

  describe('my app', function() {
    browser.get('index.html');

    it('should automatically redirect to /wallet when location hash/fragment is empty', function() {
      // Assert
      expect(browser.getLocationAbsUrl()).toMatch("/wallet");
    });
  });
})();