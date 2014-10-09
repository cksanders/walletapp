/**
 * @file Sets the Wallet Controller.
 * @author Chelsea Sanders 
 */
(function() {
  'use strict';

  angular
    .module('myApp.wallet')
    .controller('Wallet', Wallet);

  Wallet.$inject = ['pageTitle', 'pageIntro', 'warningTitle', 'warningMessage',
    'tableTitle', 'tableHeadings', 'dateFormat'];

  /**
   * @name Wallet
   * @desc Wallet application calculator
   * @param {String} pageTitle
   * @param {String} pageIntro
   * @param {String} warningTitle
   * @param {String} warningMessage
   * @param {String} tableTitle
   * @param {object} tableHeadings
   * @param {String} dateFormat
   */
  function Wallet(pageTitle, pageIntro, warningTitle, warningMessage, tableTitle,
    tableHeadings, dateFormat) {

    var vm = this;
    var uid = 1;
    vm.balance = 0;
    vm.entries = [];
    vm.select = {};
    vm.pageTitle = pageTitle;
    vm.pageIntro = pageIntro;
    vm.warningTitle = warningTitle;
    vm.warningMessage = warningMessage;
    vm.tableTitle = tableTitle;
    vm.tableHeadings = tableHeadings;
    vm.dateFormat = dateFormat;
    vm.loadLocalStorage = loadLocalStorage;
    vm.balanceAvailable = balanceAvailable;
    vm.save = save;

    loadLocalStorage();

    /**
     * @name loadLocalStorage
     */
    function loadLocalStorage() {
      if (localStorage.getItem('entries')) {
        vm.entries = JSON.parse(localStorage.getItem('entries'));
        vm.balance = vm.entries[vm.entries.length - 1].balance;
      }
    }

    /**
     * @name submit
     * @param {String} amt
     */
    vm.submit = function(amt) {
      vm.balanceUnavailable = false;
      var amt = parseFloat(amt);

      balanceAvailable(amt) ? save(amt) : vm.balanceUnavailable = true;
    };

    /**
     * @name balanceAvailable
     * @param {Number} amt
     * @returns {Boolean}
     */
    function balanceAvailable(amt) {
      return (parseFloat(vm.balance) + amt >= 0 && amt !== 0) ? true : false;
    }

    /**
     * @name save
     * @param {Number} amt
     */
    function save(amt) {
      vm.balance = parseFloat(vm.balance) + amt;

      vm.entries.push({
        id: uid++,
        amountin: (amt > 0) ? amt : '',
        amountout: (amt < 0) ? Math.abs(amt) : '',
        balance: vm.balance,
        date: new Date()
      });

      vm.select.amount = '';
      localStorage.setItem('entries', JSON.stringify(vm.entries));
    }
  }
})();