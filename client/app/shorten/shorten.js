angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(link) {
    Links.addOne(link);
  };

  // $scope.toLinks = function() {
  //   $scope.$location.path('/links.html');
  // };

});
