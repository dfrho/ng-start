angular
  .module('ngStart', ["ngMaterial"])
  .config( $mdThemingProvider => {
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('orange');
  })
  .directive('helloWorld', () => {
    return {
      template: '<h1>Hello, world!</h1>'
    }
  });
