'use strict';

angular.module('whoSaidApp')

    .controller('WelcomeController', function ($scope, $http, Auth) {
    $scope.header = 'welcome header';
    $scope.isAdmin = Auth.isAdmin;
    $scope.currentUser = Auth.getCurrentUser;

   

});