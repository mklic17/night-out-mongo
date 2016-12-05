(function() {
  'use strict';

  angular
    .module('activityModule')
    .directive('xtTable', xtTable)

    function xtTable() {
        return {
          templateUrl: 'activity/directive/table.html',
          restrict: 'E',
          controller: ActivityTableController,
          controllerAs: 'vm',
          bindToController: true,
          scope: {
            tasks: '='
          },
        };
    }

    ActivityTableController.$inject= ['activityFactory'];
    function ActivityTableController(activityFactory) {

      var vm = this;
      vm.addOne = addOne;
      vm.getTime = getTime;
      vm.subtractOne = subtractOne;
      // vm.remove = remove;

      ///////////////////////

      function addOne(task) {
        // activityFactory.update(task, 1).then(function(res) {
        //   vm.task = res.data.task;
        // })
        activityFactory.calculation(task, 1);
      }

      function getTime(oldTime){
        var newTime = Math.floor(Date.now() / 1000);
        var time = newTime - oldTime;

        if (time < 3600){
          return `Posted ${Math.ceil(time / 60)} minute(s) ago`;
        }
        else if (time < 86400){
          return `Posted ${Math.ceil(time / 3600)} hour(s) ago`;
        }
        else if (time < 604800){
          return `Posted ${Math.ceil(time / 86400)} day(s) ago`;
        }
        else {
          return `Posted ${Math.ceil(time / 604800)} week(s) ago`;
        }
      }

      function subtractOne(task) {
        activityFactory.calculation(task, -1)

      }

      // function remove(task) {
      //   vm.tasks.$remove(task);
      // }

    }

})();
