angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $window, $http, $location, Links, Auth) {
  // Your code here
  $scope.link = {};

  $scope.message;

  $scope.addLink = function(link) {
    console.log('link', link, 'links', $scope.link);
    Links.addOne({url: link});
  };

  // $scope.toLinks = function() {
  //   $scope.$location.path('/links.html');
  // };

  $scope.focus = function() {
    // if input form is empty
    console.log('scopeurl', $scope.url)
    if ($scope.url === '') {
      // generate message "URL required"
      $scope.message = 'URL required';
    }
    // } else { // if input from not empty
    //   // check if the input is the wrong format
    //   if () {
    //     $scope.message = "invalid URL";
    //   }
    // }
  };

  $scope.logout = function() {
    Auth.signout();
  };

});
