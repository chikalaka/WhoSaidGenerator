'use strict';

angular.module('whoSaidApp')

    .controller('GameController', function ($scope, $http, Auth, $window) {
    $scope.header = 'Who Said ?';
    $scope.isAdmin = Auth.isAdmin;
    $scope.currentUser = Auth.getCurrentUser();
    $scope.isCollapsed = 'false';
    $scope.currentGroups = Auth.getCurrentUser().groups;
    

    $http.get('/api/users/12345')
        .success(function(data) {
        $scope.users = data;
    })
        .error(function(err) {
        alert('Error! Something went wrong - get');
    })
    console.log($scope.currentGroups);
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
        $scope.isCollapsed = 'false';
        
        console.log("hello");
        //create a new phrase object - get id
        $scope.newPhrase = new Object({
        author: Auth.getCurrentUser()._id,
        sentence: $scope.sentence,
        oneSaid: $scope.selectedWhoPostid,
        said:$scope.selectedWhomPostid
    });
        console.log($scope.newPhrase);
        
        
            // add phrase to current group
            $http.get('/api/groups/' + $scope.groupSelectedId)
            
                .success(function(data) {
                var group = data;
                //group.phrases.push($scope.newPhrase);
                console.log(group);
                
                $http.put('/api/groups/' + group._id, $scope.newPhrase)
                    .success(function(){
                    console.log("sucess put phrase");
                    //$location.path( "/game" );
                    $window.location.reload();

                })
                    .error(function(err){
                    //alert('Error! Something went wrong - put');
                });
            })
                .error(function(err) {
                alert('Error! Something went wrong - get users groups');
            })

            
  
            

    }
    
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
            {$scope.guessedRight(phrase, group, index);}
        else { alert ("wrong guess!!!")};
        
        $scope.selectedWho[parentIndex][index] = "";
        $scope.selectedWhom[parentIndex][index] = "";
        
        //parentIndex - integer indicate which group the user chose in the array: $scope.currentGroups
        //index - integer indicate which group the user chose in the array: $scope.currentGroups[parentIndex] (inside this array there are phrases)
        
        //Doron - here you need to add the code for:
        //popup
        //check if user guessed right
        //update his score if needed
        //and so on
    };
        $scope.guessedRight = function(phrase, group, index) {
        alert("tadaaaaa!!!!!\nYou guessed right!");
          //  var phraseToDelete = phrase;
           // console.log(phrase);
            console.log(index);
            
            /*    
            //change db and remove phrase
            $http.put('/api/groups/' + group._id, index)
                    .success(function(){
                    console.log("sucess put phrase- removed phrase");
                    $location.path( "/game" );

                })
                    .error(function(err){
                    alert('Error! Something went wrong - put');
                });
            /*
/*
        $http.put('/api/users/addscore/' + Auth.getCurrentUser()._id, "250")
                    .success(function(){
                })
                    .error(function(err){
                    alert("Error! Something went wrong - put add score 250");
                });
            */
    }


});