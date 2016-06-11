'use strict';

angular.module('whoSaidApp')
    .config(function ($stateProvider) {
    $stateProvider
        .state('welcome', {
        url: '/',
        templateUrl: 'app/welcome/welcome.html',
        controller: 'WelcomeController'
    });
});
