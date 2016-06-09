'use strict';
(function(){

class WelcomeComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('whoSaidApp')
  .component('welcome', {
    templateUrl: 'app/welcome/welcome.html',
    controller: WelcomeComponent
  });

})();
