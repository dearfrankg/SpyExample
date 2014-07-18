/*global describe, it, expect, beforeEach, inject, spyOn */
'use strict';

describe('DashboardCtrl', function() {


  // Vars

  var
  rootScope,
  scope,
  ctrl,
  DashboardMock = {
    get: function () { return 222; }
  };

  // Setup beforeEach

  beforeEach(function () {

    module('tracker');

    module(function ($provide){
      $provide.value('Dashboard', DashboardMock);
    });

    inject(function ($injector) {
      rootScope = $injector.get('$rootScope');
      scope = rootScope.$new();
      ctrl = $injector.get('$controller')('DashboardCtrl', {
        $scope: scope
      });

    });

    scope.$digest();

  });


  describe('Initialization', function() {

    it('should be truthy', function() {
      expect(true).toBeTruthy();
    });


    it('should init dash widgets', function() {
      spyOn(DashboardMock, 'get');
      expect(DashboardMock.get).toHaveBeenCalled();
      expect(scope.dashWidgets).toEqual(222);
    });

  });




});