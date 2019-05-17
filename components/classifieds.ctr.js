(() => {
  'use strict'

  angular
    .module('Movie Poster Deals')
    .controller('classifiedsCtrl', ($scope, $http, classifiedsFactory) => {
      classifiedsFactory.getClassifieds()
      .then(foundData => {
        $scope.classifieds = foundData.data
      });
    });

})();
