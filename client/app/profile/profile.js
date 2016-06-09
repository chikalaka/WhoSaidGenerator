'use strict';

angular.module('whoSaidApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileController',
        authenticate: true
      });
  });
