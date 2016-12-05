(function() {
  var app = angular.module('mainModule', [
    'ui.router',
    'homeModule',
    'layoutModule',
    'activityModule',
    'authModule',
    // 'registerModule',
    'discoverModule',

  ])
  .config(configFunction)


 configFunction.$inject = ['$urlRouterProvider'];

 function configFunction($urlRouterProvider) {
   $urlRouterProvider.otherwise('/');
 }

})();
