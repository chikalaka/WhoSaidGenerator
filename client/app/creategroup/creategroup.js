'use strict';

angular.module('whoSaidApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('creategroup', {
        url: '/creategroup',
        templateUrl: 'app/creategroup/creategroup.html',
        controller: 'CreateGroupController',
        authenticate: true
      });
  });
