'use strict';

/**
 * @ngdoc function
 * @name angularHomeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularHomeApp
 */
angular.module('angularHomeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
