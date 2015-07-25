/**
 * ResetCtrl
 *
 * @type {angular.controller}
 * @module  hivetest
 * @description  The UI controller for resetting forgotten passwords
 *
 *               ## Primary responsibilities:
 *               Reset user passwords if they have an authToken
 *
 */

angular.module('hivetest')
.controller('ResetCtrl', [
        '$scope', '$rootScope', '$state', '$stateParams', '$timeout', 'uiMe', 'uiList', 'uiErrorBus',
function($scope, $rootScope, $state, $stateParams, $timeout, uiMe , uiList, uiErrorBus) {

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
  // When the application is initially rendered
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

  // Get the auth token
  var authToken = $stateParams.authToken;

  $rootScope.appReady.then(function onReady(){
    
    // If user is logged in, 
    // send to profile
    if(uiMe.id){
      $state.go('profile');
    };

    // If not auth token, 
    // go home
    if(!authToken){
      $state.go('home');
    }
    
  });

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
  // DOM Events
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

  $scope.intent = angular.extend($scope.intent||{}, {

    // Reset password using auth token
    resetPassword: function(){
      uiMe.syncing.form = true;
      uiMe.resetPassword($scope.user.password, authToken)
      .then(function onSuccess(){

        uiMe.authenticate(authToken)
        .then(function onAuth(){
          uiMe.fetch()
          .then(function onFetched(){
            $state.go('profile');
          });
        })
        .catch(function onError(err){
          uiErrorBus.$handleError(err);
        })

      })
      .finally(function eitherWay(){
        uiMe.syncing.form = false;
        $scope.status = "If " + $scope.email + " is a valid user, a password recovery email has been sent.";
        $scope.email = "";

        $scope.reminderDone = true;

      });

    }

  });

}]);
