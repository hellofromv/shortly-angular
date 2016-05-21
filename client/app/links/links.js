angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $window, $location, Links, Auth) {
  // Your code here
  $scope.data = {
    links: []
  };

  $scope.checkToken = function() {
    if ($window.localStorage.getItem('com.shortly') === null) {
      $location.path('app/auth/signin.html');
      $scope.apply();
    }
  };

  $scope.getAll = function() {
    Links.getAll()
      .then(function(response) {
        $scope.data.links = response;
      });
  };

  $scope.logout = function() {
    Auth.signout();
  };

  $scope.checkToken();
  $scope.getAll();

});