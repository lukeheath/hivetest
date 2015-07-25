/**
 * Module dependencies
 */

var dependencies = [
  'ui.router',
  'ngTouch',
  'ngAnimate',
  'ngMaterial',
  'cloudsdk',
  'lodash'
];

/**
 * hivetest
 *
 * @class        {angular.module}
 * @module       hivetest
 * @type         {Function}
 * @description  An angular module for a web UI.
 */

angular.module('hivetest', dependencies)

// Config angular material design
.config(function($mdThemingProvider, $locationProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-orange')
    .accentPalette('blue-grey')
    .warnPalette('red')
    .backgroundPalette('grey');
});