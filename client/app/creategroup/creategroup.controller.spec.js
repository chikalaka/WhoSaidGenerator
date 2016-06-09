'use strict';

describe('Component: CreategroupComponent', function () {

  // load the controller's module
  beforeEach(module('whoSaidApp'));

  var CreategroupComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CreategroupComponent = $componentController('CreategroupComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
