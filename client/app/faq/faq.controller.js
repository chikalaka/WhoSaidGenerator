'use strict';

angular.module('whoSaidApp')

    .controller('FaqController', function ($scope, $http, Auth) {
    $scope.header = 'FAQ header';
    $scope.isAdmin = Auth.isAdmin;

    $scope.oneAtATime = false;

    $scope.groups = [
        {
            title: '1. How do i find my friends?',
            content: 'You can find you friends in the Group tab by entering their e-mail address or by searching them by their username.'
        },
        {
            title: '2. How can i score more points in the game?',
            content: 'You can score more points by participating more and guessing correctly the Who Said to Who contest that takes place in each group that you\'re added to. Also each time you post a Who Said sentence you get extra points.'
        }
    ];

});