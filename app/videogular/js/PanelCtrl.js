/**
 * Created by tedyuen on 01/03/2017.
 */
videoApp.controller('PanelCtrl',['$scope','$location','$filter',function ($scope,$location,$filter) {
  $scope.praised = false;
  $scope.switchPraised = function () {
    $scope.praised = !$scope.praised;
  }
  $scope.collected = false;
  $scope.switchCollected = function () {
    $scope.collected = !$scope.collected;
  }

  $scope.goUrl = function (data) {
    var url = $filter('limitTo')($location.absUrl(),$location.absUrl().length-2,0);
    console.log(data.index);
    $location.path(data.index);
    $location.replace();
  }

}]);
