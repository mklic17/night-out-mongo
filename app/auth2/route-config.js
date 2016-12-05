(function() {
  'use strict';

  angular.module('authModule')
    .config(configFunction);

    configFunction.$inject=['$stateProvider'];
    function configFunction($stateProvider) {
        $stateProvider
          .state('register', {
            url: '/register',
            templateUrl: 'auth2/register.html',
            controller: 'AuthController',
            controllerAs: 'vm',
            bindToController: true,
            resolve: {

            }
          })
          .state('login', {
            url: '/login',
            templateUrl: 'auth2/login.html',
            controller: 'AuthController',
            controllerAs: 'vm',
            bindToController: true,
          });

    }

})();
