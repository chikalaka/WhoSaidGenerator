'use strict';

angular.module('whoSaidApp').controller('HtpController', function ($scope, $http, Auth) {
  $scope.header = 'How To Play ?';
  $scope.isAdmin = Auth.isAdmin;

  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [{ id: 0, image: 'assets/images/download.jpg',
    p1: '1. Create groups containing your circle of friends.',
    p2: '2. Post a sentence that you used to hear your friends say to one another.',
    p3: '3. Don\'t forget to post \"Who Said\" to \"Whom\" !'
  }, { id: 1, image: 'assets/images/download (1).jpg',
    p1: 'heart? maybe add directly to picture',
    p2: '4. Get extra points for posting a sentence.',
    p3: '5. Wait for your friends to start guessig.'
  }, { id: 2, image: 'assets/images/download (2).jpg',
    p1: 'glass?',
    p2: '6. Go throught your wall and try guessing your friends posts to score more points.',
    p3: 'button'
  }];
});
//# sourceMappingURL=howtoplay.controller.js.map
