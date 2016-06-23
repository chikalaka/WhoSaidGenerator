'use strict';

angular.module('whoSaidApp').controller('CreateGroupController', function ($scope, $http, Auth /*, User*/) {
    $scope.header = 'Create Group';
    $scope.isAdmin = Auth.isAdmin;

    $http.get('/api/users/12345').success(function (data) {
        $scope.users = data;

        for (var i = 0; i < $scope.users.length; i++) {
            if ($scope.users[i]._id == Auth.getCurrentUser()._id) {
                $scope.users.splice(i, 1);
            }
        }
    }).error(function (err) {
        alert('Error! Something went wrong - get');
    });

    $scope.selected = "";

    $scope.getfocus = function () {
        document.getElementById("searchUser").focus();
    };

    $scope.postNewGroup = function () {

        //var parameter = JSON.stringify($scope.newGroup);

        $http.post('/api/groups', $scope.newGroup).success(function (createdGroup) {

            // add group to current user
            $http.get('/api/users/12345/' + Auth.getCurrentUser()._id).success(function (data) {

                var groups = data;
                groups.groups.push(createdGroup._id);

                $http.put('/api/users/12345/' + Auth.getCurrentUser()._id, groups).success(function () {}).error(function (err) {
                    alert('Error! Something went wrong - put');
                });
            }).error(function (err) {
                alert('Error! Something went wrong - get users groups');
            });

            // add group to all users selected
            var len = $scope.newGroup.users.length;

            function myFunction(i) {
                $http.get('/api/users/12345/' + $scope.newGroup.users[i]).success(function (data) {

                    var groups = data;
                    groups.groups.push(createdGroup._id);

                    $http.put('/api/users/12345/' + $scope.newGroup.users[i], groups).success(function () {}).error(function (err) {
                        alert('Error! Something went wrong - put');
                    });
                }).error(function (err) {
                    alert('Error! Something went wrong - get users groups');
                });
            }

            for (var i = 0; i < len; i++) {

                myFunction(i);
            }
        }).error(function (err) {
            alert('Error! Something went wrong - post');
        });
    };

    $scope.selectedUsersNames = [];

    $scope.newGroup = new Object({
        name: '',
        users: []
    });

    // to add current user
    $scope.newGroup.users.push(Auth.getCurrentUser()._id);

    $scope.onSelectPart = function ($item, $model, $label, $event) {
        $event: {
            $scope.selectedUsersNames.push($label);
            $scope.newGroup.users.push($item._id);

            $scope.selected = "";

            for (var i = 0; i < $scope.users.length; i++) {
                if ($scope.users[i]._id == $item._id) {
                    $scope.users.splice(i, 1);
                }
            }
        }
    };
});
//# sourceMappingURL=creategroup.controller.js.map
