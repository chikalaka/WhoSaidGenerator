'use strict';

angular.module('whoSaidApp')

    .controller('ProfileController', function ($scope, $http, Auth) {
    $scope.header = 'Profile';
    $scope.isAdmin = Auth.isAdmin;
    $scope.user = Auth.getCurrentUser;

    
});