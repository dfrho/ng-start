(() => {
  'use strict';

  angular
    .module('ngStart')
    .factory('classifiedsFactory', $http => {

      const getClassifieds = () => {
        return $http.get('data/classifieds.json');
      }

      return {
        getClassifieds
      }

    });
})();
