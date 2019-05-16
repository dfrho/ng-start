(() => {
  'use strict'

  angular
    .module('ngStart')
    .controller('classifiedsCtrl', ($scope) => {

      $scope.name = {
        first: "David",
        last: "Rhodes"
      };
    });


})();
