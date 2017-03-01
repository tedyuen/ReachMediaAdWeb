/**
 * Created by tedyuen on 01/03/2017.
 */
videoApp.controller('PanelCtrl',['$scope','$location',function ($scope,$location) {
  $scope.praised = false;
  $scope.switchPraised = function () {
    $scope.praised = !$scope.praised;
  }
  $scope.collected = false;
  $scope.switchCollected = function () {
    $scope.collected = !$scope.collected;
  }

  $scope.goUrl = function (data) {
    console.log($location.absUrl());
    console.log($location.absUrl()+"#!"+data.index);
    // window.href.location = $location.absUrl()+"#!"+data.index;
    // $location.path(data.indexUrl);
  }

}]);
