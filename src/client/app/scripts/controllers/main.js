'use strict';

angular.module('b10g.controllers', [])
  .controller('MainCtrl',['$scope' ,function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
