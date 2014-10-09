/**
 * @file Sets the Wallet Constants.
 * @author Chelsea Sanders 
 */
(function() {
  'use strict';

  angular
    .module('myApp.wallet')
    .constant('pageTitle', 'The Wallet Application!')
    .constant('pageIntro', 'A simple wallet application which allows you to add and '
      + 'remove amounts to and from your wallet. Once an amount is entered into '
      + 'the wallet, it should be listed along with the date it was added. Once '
      + 'an amount is removed from the wallet it should be listed along with the '
      + 'date it was removed.')
    .constant('warningTitle', 'Warning!')
    .constant('warningMessage', 'Amount is either invalid, else you have insufficient funds.')
    .constant('tableTitle', 'Wallet Activity')
    .constant('tableHeadings', {id: '#', date: 'Date', moneyOut: 'Money Out',
      moneyIn: 'Money In', balance: 'Balance'})
    .constant('dateFormat', 'dd MMMM yyyy h:mm:ss a');
})();