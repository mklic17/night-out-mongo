(function() {
  'use strict';

  angular
    .module('activityModule')
    .directive('xtForm', xtForm)

    function xtForm() {
        return {
          templateUrl: 'activity/directive/form.html',
          restrict: 'E',
          controller: ActivityFormController,
          controllerAs: 'vm',
          // bindToController: true,
          // scope: {
          //   tasks: '=',
          // }
        }
    }

    ActivityFormController.$inject = ['activityFactory']

    function ActivityFormController(activityFactory) {

      var vm = this;
      vm.addSubmission = addSubmission;
      vm.newTask = new activityFactory.Task();

      ///////////////////////////

      function addSubmission() {
        console.log("addSubmission ActivityFormController");

      //   vm.tasks.$add(vm.newTask);
      //   vm.newTask = new activityFactory.Task();
      //   $state.go('activity');
      //
      console.log(vm.newTask);
      }
    }
})();
