'use strict';

angular.module('whoSaidApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('howtoplay', {
        url: '/howtoplay',
        templateUrl: 'app/howtoplay/howtoplay.html',
        controller: 'HtpController',
        authenticate: true
      });
  });
