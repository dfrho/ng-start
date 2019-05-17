angular
  .module('moviePosterDeals', ["ngMaterial"])
  .config( $mdThemingProvider => {
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('orange');
  })
  .directive('helloWorld', () => {
    return {
      template: '<h1>{{ message }}</h1>'
    }
  });
