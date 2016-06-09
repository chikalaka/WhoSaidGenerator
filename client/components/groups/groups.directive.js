'use strict';
/*
angular.module('whoSaidApp')
  .directive('groups', function () {
    return {
      templateUrl: 'components/groups/groups.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {},
        controller: 'GroupsController'
    };
  });*/

angular.module('whoSaidApp')
  .directive('groups', () => ({
    templateUrl: 'components/groups/groups.html',
    restrict: 'E',
    controller: 'GroupsController',
    controllerAs: 'groupsCtrl'
  }));
