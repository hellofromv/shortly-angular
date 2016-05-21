angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {
    links: []
  };

  $scope.getAll = function() {
    Links.getAll()
      .then(function(response) {
        $scope.data.links = response;
      });
  };

  $scope.getAll();

});