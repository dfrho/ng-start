(() => {
  'use strict';

  angular
    .module('moviePosterDeals')
    .factory('classifiedsFactory', $http => {

      const getClassifieds = () => {
        return $http.get('data/classifieds.json');
      }

      return {
        getClassifieds
      }

    });
})();
