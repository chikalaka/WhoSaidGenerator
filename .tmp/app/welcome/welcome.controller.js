'use strict';

angular.module('whoSaidApp').controller('WelcomeController', function ($scope, $http, Auth) {
    $scope.header = 'Welcome';
    $scope.isAdmin = Auth.isAdmin;
    $scope.currentUser = Auth.getCurrentUser;
});
//# sourceMappingURL=welcome.controller.js.map
