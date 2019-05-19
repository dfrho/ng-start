(() => {
  'use strict'

  angular
    .module('moviePosterDeals')
    .controller('classifiedsCtrl', ($scope, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) => {
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

      $scope.createClassified = classified => {
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

          showToast('Classified Saved!');
        }
      };

    $scope.editClassified = classified => {
      $scope.editing = true;
      $scope.openSidebar();
      $scope.classified = classified;
    };

    $scope.deleteClassified = (event, classified) => {
      const confirm = $mdDialog.confirm()
      .title(`Are you sure you want to delete ${classified.movie_title}?`)
      .ok(`yes`)
      .cancel(`no`)
      .targetEvent(event);
      $mdDialog.show(confirm)
      .then(() => {
        const foundIndex = $scope.classifieds.indexOf(classified);
        $scope.classifieds.splice(foundIndex, 1);
      },
      () => {
        showToast("Delete Canceled!");
      });
    }

    $scope.saveEdit = () => {
      $scope.editing = false;
      $scope.classified = {};
      $scope.closeSidebar();

      showToast("Classified Edit Saved!");

    }

    const showToast = message => {
      $mdToast.show(
        $mdToast.simple()
        .content(message)
        .position('top right')
        .hideDelay(3000)
      );
    }

    });
})();
