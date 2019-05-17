(() => {
  'use strict'

  angular
    .module('Movie Poster Deals')
    .controller('classifiedsCtrl', ($scope, $http) => {
      $scope.classifieds = $http.get('data/classifieds.json')
      .then(foundData => {
        $scope.classifieds = foundData.data
      });
    });

})();
