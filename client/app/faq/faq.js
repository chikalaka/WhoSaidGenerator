'use strict';

angular.module('whoSaidApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('faq', {
        url: '/faq',
        templateUrl: 'app/faq/faq.html',
        controller: 'FaqController',
        authenticate: true
      });
  });
