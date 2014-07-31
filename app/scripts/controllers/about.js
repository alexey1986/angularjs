'use strict';

/**
 * @ngdoc function
 * @name angularHomeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularHomeApp
 */
angular.module('angularHomeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
