'use strict';

angular.module('whoSaidApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        template: '<welcome></welcome>'
      });
  });
