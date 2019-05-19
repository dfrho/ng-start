(() => {
  'use strict'

  angular
    .module('moviePosterDeals')
    .controller('classifiedsCtrl', ($scope, classifiedsFactory, $mdSidenav, $mdToast) => {
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
          // TODO: add user auth, current user (remove this dummy data for UI step)
          const dummyCurrentUser = {
            name: 'David Rhodes',
            phone: '646-477-6360',
            email: 'rhodesdav@gmail.com'
          };
          classified.contact = dummyCurrentUser;

          $scope.classifieds.push(classified);
          $scope.classified = {};
          $scope.closeSidebar();

          $mdToast.show(
            $mdToast.simple()
            .content("Classified Saved!")
            .position('top right')
            .hideDelay(3000)
          );
        }
      };

    });
})();
