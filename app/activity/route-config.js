(function() {
  'use strict';

  angular
    .module('activityModule')
    .config(configFunction);

  configFunction.$inject = ['$stateProvider'];
  function configFunction($stateProvider) {
    $stateProvider

      .state('activity', {
        url: '/activity',
        templateUrl: 'activity/activity.html',
        controller: 'ActivityController',
        controllerAs: 'vm',
        bindToController: true,
        resolve: {
          user: loggedIn
        }
      })
      .state('form', {
        url: '/form',
        templateUrl: 'activity/directive/form.html', // refactor this to be a different file
        controller: 'ActivityController',
        controllerAs: 'vm',
        bindToController: true,
        resolve: {
          user: loggedIn
        }

  });
}

loggedIn.$inject = ['authFactory'];
function loggedIn(authFactory) {
  return authFactory.isLoggedIn();
}
})();
