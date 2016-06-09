'use strict';
angular.module('whoSaidApp')

    .controller('GroupsController', function ($scope, $http, Auth) {
    
    $scope.currentUser = Auth.getCurrentUser;
    
    /*
    $http.get('/api/groups')
        .success(function(data) {
        $scope.groups = data;
    })
        .error(function(err) {
        alert('Error! Something went wrong');
    });
    */
    
    /*
    //only TEMPORARY
    $scope.groups = [
        {
            _id: 0,
            groupName: 'group name wow',
            items: [
                {
                    sentence: 'sentence number 1',
                    dateTime:"2012-5-19"
                },
                {
                    sentence: 'sentence number 2',
                    dateTime:"2013-5-8"
                },
                {
                    sentence: 'sentence number 3',
                    dateTime:"2017-5-15"
                },
                {
                    sentence: 'sentence number 4',
                    dateTime:"2016-5-3"
                }
            ]
        },
        {
            _id: 1,
            groupName: 'laliboo',
            items: [
                {
                    sentence: 'a jd jdj sk fjds kjdjddj jdjdj ',
                    dateTime:"2014-5-8"
                },
                {
                    sentence: 'b  ryry ry yrry yryr ry',
                    dateTime:"2019-5-9"
                },
                {
                    sentence: 'c ncn cnc ncn cnnc n cnc ',
                    dateTime:"2015-5-10"
                },
                {
                    sentence: 'd lp pl l pl pl pl pllpl p lp',
                    dateTime:"2021-5-15"
                }
            ]
        }
    ];
    */
    
});
