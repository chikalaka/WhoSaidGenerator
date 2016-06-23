'use strict';

angular.module('whoSaidApp').directive('header', function () {
  return {
    templateUrl: 'components/header/header.html',
    restrict: 'E',
    link: function link(scope, element) {
      element.addClass('header');
    }
  };
});
//# sourceMappingURL=header.directive.js.map
