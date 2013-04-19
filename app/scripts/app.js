'use strict';

angular.module('tatooineApp', ['ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/meds', {
        templateUrl: 'views/meds.html',
        controller: 'MedsCtrl'
      })
      .when('/notes', {
        templateUrl: 'views/notes.html',
        controller: 'NotesCtrl'
      })
      .when('/nums', {
        templateUrl: 'views/nums.html',
        controller: 'NumsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
