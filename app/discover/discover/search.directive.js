(function() {
  'use strict';

  angular
    .module('discoverModule')
    .directive('xtSearch', xtSearch);

  function xtSearch() {
    return {
      templateUrl: 'discover/discover/search.html',
      restrict: 'E',
      controller: 'DiscoverController',
      bindToController: true,
      controllerAs: 'vm',
      // scope: {}
    }
  }

})();
