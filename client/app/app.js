'use strict';

angular.module('whoSaidApp', ['whoSaidApp.auth', 'whoSaidApp.admin', 'whoSaidApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'validation.match', 'ngAnimate'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
