describe("IndexTest", function() {
  var $scope;
  beforeEach(function() {
    angular.mock.module('smartchat');
    angular.mock.inject(function($injector) {
      $scope = $injector.get('$rootScope').$new();
    });
  });
  it("TesteInicial",
    angular.mock.inject(function($controller) {
      $controller('IndexController', {
        "$scope": $scope
      });
      expect($scope.test).toBe("test");
    }));
});
