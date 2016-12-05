(function() {
  'use strict';

  angular
    .module('discoverModule')
    .directive('xtResults', xtResults);

  function xtResults() {
    return {
      templateUrl: 'discover/discover/results.html',
      restrict: 'E',
      controller: 'DiscoverController',
      bindToController: true,
      controllerAs: 'vm',
      // scope: {}
    }
  }

})();
