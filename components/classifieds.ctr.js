(() => {
  'use strict'

  angular
    .module('moviePosterDeals')
    .controller('classifiedsCtrl', ($scope, classifiedsFactory, $mdSidenav) => {
      classifiedsFactory.getClassifieds()
      .then(foundData => {
        $scope.classifieds = foundData.data
      });

      $scope.openSidebar = () => {
        $mdSidenav('left').open();
      };

      $scope.closeSidebar = () => {
        $mdSidenav('left').close();
      };

      $scope.saveClassified = classified => {
        if (classified.movie_title && classified.price && classified.description && classified.image){
          $scope.classifieds.push(classified);
          $scope.classified = {};
          $scope.closeSidebar();
        }
      };
    });

})();
