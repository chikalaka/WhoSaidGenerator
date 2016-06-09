'use strict';

angular.module('whoSaidApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('game', {
        url: '/game',
        templateUrl: 'app/game/game.html',
        controller: 'GameController',
        authenticate: true
      });
  });
