/**
 * Created by tedyuen on 2017/2/28.
 */
rmApp.controller('step2Controller',['$scope','$state',function ($scope,$state) {
  $scope.step = "step2";

  $scope.seats = [
  ];
  $scope.price = 0;

  var initSeat = function () {
    for(var i=0;i<100;i++){
      $scope.seats.push({id:i,type:0});
    }
  }

  $('.seat-frame').height($(document).height());

  $scope.doSeat = function (seat) {
    for(var index in $scope.seats){
      var temp = $scope.seats[index];
      if(seat.id==temp.id){
        switch (temp.type){
          case 0:
            temp.type = 1;
            $scope.price += 25;
            break;
          case 1:
            temp.type =0;
            $scope.price -= 25;
            break;
        }
        break;
      }
    }
  }

  $scope.goThirdStep = function () {
    if($scope.price>0){
      $state.go('step3');
    }
  }

  initSeat();

}]);
