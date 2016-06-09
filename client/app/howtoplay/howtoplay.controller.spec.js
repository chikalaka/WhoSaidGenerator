'use strict';

describe('Component: HowtoplayComponent', function () {

  // load the controller's module
  beforeEach(module('whoSaidApp'));

  var HowtoplayComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    HowtoplayComponent = $componentController('HowtoplayComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
