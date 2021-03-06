'use strict';

describe('Directive: groups', function () {

  // load the directive's module and view
  beforeEach(module('whoSaidApp'));
  beforeEach(module('components/groups/groups.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<groups></groups>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the groups directive');
  }));
});
