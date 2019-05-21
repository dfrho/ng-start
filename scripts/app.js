angular
  .module('moviePosterDeals', ['ngMaterial', 'ui.router'])
  .config( ($mdThemingProvider, $stateProvider) => {
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('orange');

    $stateProvider
      .state('stateone', {
        url:'/stateone',
        template: '<h1>State One</h1>'
      });
  });

