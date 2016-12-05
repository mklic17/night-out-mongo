(function() {
  'use strict';

  angular
    .module('discoverModule')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];
  function configFunction($stateProvider) {

    $stateProvider
      .state('discover', {
        url: '/discover',
        templateUrl: 'discover/discover.html',
        controller: 'DiscoverController',
        controllerAs: 'vm',
      });


  }

})();
