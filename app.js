
'use strict';
var app = angular.module('tracker',[]);


app.factory('Dashboard', function () {

  return {
    get: function () { return 111; }
  };

});


app.controller('DashboardCtrl', function ($scope, Dashboard) {

  $scope.dashWidgets = Dashboard.get();

});
