'use strict';

angular.module('whoSaidApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contactus', {
        url: '/contactus',
        templateUrl: 'app/contactus/contactus.html',
        controller: 'ContactusController',
        authenticate: true
      })
  });