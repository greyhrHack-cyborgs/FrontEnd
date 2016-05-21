'use strict';

// Declare app level module which depends on views, and components
var greyTHRBizanApp = angular.module('greyTHRBizanApp', [
    'ionic',
    'greyTHRBizanAppContorllers'
])

.run(["$ionicPlatform","$rootScope","$state","$ionicSideMenuDelegate",function($ionicPlatform,$rootScope,$state,$ionicSideMenuDelegate ) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
      
    $rootScope.pageSelectorBottons={
        "dashboardpage":true
    }
    
    $rootScope.setPageSelection=function(selectedPage){
        $rootScope.pageSelectorBottons.dashboardpage=false;
                
        $rootScope.pageSelectorBottons[selectedPage]=true;
        console.info('Page selection objet -> '+ JSON.stringify($rootScope.pageSelectorBottons));
        
        $state.go('greyTHRBizanApp.'+selectedPage,{});
    }
    
     $rootScope.toggleLeftSideMenu = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
    
    $rootScope.toggleRightSideMenu=function() {
        $ionicSideMenuDelegate.toggleRight();
    };
  });
}]);

// configure our routes
greyTHRBizanApp.

config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
    
    $stateProvider
    .state('greyTHRBizanApp', {
        url: '/greyTHRBizanApp',
        abstract: true,
        templateUrl: 'templates/menu.html',
        //controller: 'AppCtrl',
    })
    .state('greyTHRBizanApp.dashboardpage',{
        url : "/dashboardpage",
         views: {
              'menuContent': {
                templateUrl: 'templates/dashboard.html',
                controller: 'dashboardLandingCtrl'
              }
            }
    })
    .state('greyTHRBizanApp.configurepage',{
        url : "/configurepage",
         views: {
              'menuContent': {
                templateUrl: 'templates/configurepage.html',
                controller: 'configureCtrl'
              }
            }
    })

    $urlRouterProvider.otherwise('/greyTHRBizanApp/dashboardpage');
}]);
