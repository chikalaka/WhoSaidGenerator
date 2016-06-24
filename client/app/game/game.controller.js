'use strict';

angular.module('whoSaidApp')

    .controller('GameController', function ($scope, $http, Auth) {
    $scope.header = 'Who Said ?';
    $scope.isAdmin = Auth.isAdmin;
    $scope.currentUser = Auth.getCurrentUser();
    $scope.isCollapsed = 'false';
    $scope.currentGroups = Auth.getCurrentUser().groups;
    /*$scope.groupSelected;
    $scope.selectedWhoPost;
    $scope.selectedWhomPost;*/

    $http.get('/api/users/12345')
        .success(function(data) {
        $scope.users = data;
    })
        .error(function(err) {
        alert('Error! Something went wrong - get');
    })
    
    var len = $scope.currentGroups.length;

    function Create2DArray(rows) {
        var arr = [];

        for (var i=0;i<rows;i++) {
            arr[i] = [];
        }

        return arr;
    }

    $scope.selectedWho = Create2DArray(len);
    $scope.selectedWhom = Create2DArray(len);
    
    //post a new sentence
    
    $scope.postSentence = function(){
        console.log("hello");
        //create a new phrase object - get id
        $scope.newPhrase = new Object({
        author: Auth.getCurrentUser()._id,
        sentence: $scope.sentence,
        oneSaid: $scope.selectedWhoPostid,
        said:$scope.selectedWhomPostid
    });
        console.log($scope.newPhrase);
        
        /*
        $scope.newPhrase= {};
        $scope.newPhrase.author= Auth.getCurrentUser;
        $scope.newPhrase.sentence= $scope.sentence;
        //$scope.newPhrase.group=$scope.groupSelected;
        $scope.newPhrase.oneSaid=$scope.selectedWhoPostid;
        $scope.newPhrase.Said=$scope.selectedWhomPostid;
        /*
        //var parameter = JSON.stringify($scope.newGroup);
        //hello test
       /*
        $http.post('/api/groups:id', $scope.newPhrase)
            .success(function(createdPhrase){
*/
            // add phrase to current group
            $http.get('/api/groups/' + $scope.groupSelectedId)
            
                .success(function(data) {
                var group = data;
                //group.phrases.push($scope.newPhrase);
                console.log(group);
                
                $http.put('/api/groups/' + group._id, $scope.newPhrase)
                    .success(function(){
                    console.log("sucess put phrase")
                })
                    .error(function(err){
                    alert('Error! Something went wrong - put');
                });
            })
                .error(function(err) {
                alert('Error! Something went wrong - get users groups');
            })

                
                
                
                
                
                
                
                
            // add group to all users selected
            /*
            var len = $scope.newGroup.users.length;

            function myFunction(i){
                $http.get('/api/users/12345/' + $scope.newGroup.users[i])
                    .success(function(data) {

                    var groups = data;
                    groups.groups.push(createdGroup._id);

                    $http.put('/api/users/12345/' + $scope.newGroup.users[i], groups)
                        .success(function(){
                    })
                        .error(function(err){
                        alert('Error! Something went wrong - put');
                    });
                })
                    .error(function(err) {
                    alert('Error! Something went wrong - get users groups');
                })
            }

            for(var i=0;i<len;i++){

                myFunction(i);
            }
            */
/*
        })
            .error(function(err){
            alert('Error! Something went wrong - post');
        });
        */
    }
    //end of sentence

    //$scope.selectedUsersNames = [];
/*
    $scope.newPhrase = new Object({
        name: '',
        users: []
    });
    */
    
   // -------------//
    //save the chosen id in $scope.XXXXId
     $scope.onSelectGroup = function($item, $model, $label, $event){
        $event: {
            $scope.groupSelectedId = $item._id;
           
        }
    }
          $scope.onSelectWho = function($item, $model, $label, $event){
        $event: {
            $scope.selectedWhoPostid = $item._id;
           
        }
    }
          $scope.onSelectWhom = function($item, $model, $label, $event){
        $event: {
            $scope.selectedWhomPostid = $item._id;
           
        }
    }
   // -------------//
          
    $scope.guessedRight = function() {
    alert("tadaaaaa!!!!!\nYou guessed right!");

    $http.put('/api/users/addscore/' + Auth.getCurrentUser()._id, 250)
                    .success(function(){
                })
                    .error(function(err){
                    alert('Error! Something went wrong - put');
                });
    }
/*
        $scope.newScore = 250;
        console.log(Auth.getCurrentUser()._id);
         $http.put('/api/users/' + Auth.getCurrentUser()._id, $scope.newScore)
                    .success(function(){
                    console.log("sucess updated score")
                })
                    .error(function(err){
                    alert('Error! Something went wrong - put');
                });
        
        
        
    };
*/
          
          
    $scope.guess = function(parentIndex, index) {
        // the users guessed
        console.log($scope.selectedWho[parentIndex][index]);
        console.log($scope.selectedWhom[parentIndex][index]);
//need to be converted to get phrase from db: 
        var group = $scope.currentGroups[parentIndex];
        console.log(group);
        var arrlength = group.phrases.length;
        console.log(arrlength);
        var phrase = group.phrases[arrlength-index-1];
        //console.log($scope.currentGroups);
        console.log(phrase);

        //check if the user guessed right
        if (phrase.oneSaid == $scope.selectedWho[parentIndex][index]._id && phrase.said == $scope.selectedWhom[parentIndex][index]._id )
            {$scope.guessedRight();}
        else { alert ("wrong guess!!!")};
        
        index;
        //console.log(parentIndex);
        //console.log(index);
        
        
        //console.log($scope.selectedWho);
        //console.log($scope.selectedWhom);
        
        //reset the cell after a guess
        $scope.selectedWho[parentIndex][index] = "";
        $scope.selectedWhom[parentIndex][index] = "";
        
        //parentIndex - integer indicate which group the user chose in the array: $scope.currentGroups
        //index - phrase index in the group
        //$scope.currentGroups[parentIndex] (inside this array there are phrases)
        
        //Doron - here you need to add the code for:
        //popup
        //check if user guessed right
        //update his score if needed
        //and so on
    };

});