(function() {
  'use strict';

  angular
    .module('discoverModule')
    .controller('DiscoverController', DiscoverController);

    DiscoverController.$inject = ['discoverFactory'];
    function DiscoverController(discoverFactory) {
      var vm = this;

      vm.submitFunction = submitFunction;
      vm.SearchCont = new discoverFactory.SearchCont();

      ////////////////////////////////////

      function submitFunction() {
        var getTask = discoverFactory.getTasks(vm.SearchCont);

      }

    }
})();
