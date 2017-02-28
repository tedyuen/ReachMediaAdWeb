/**
 * Created by tedyuen on 2017/2/28.
 */
global.$ = global.jQuery = require('jquery');

require('bootstrap');

require('angular');
require('angular-cookies');
require('angular-ui-router');

var rmApp = angular.module("myApp",['ui.router','ngCookies']);

/**
 * Created by tedyuen on 2017/2/3.
 */
rmApp.config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.when('','/step1').otherwise('/step1');
  $stateProvider
    .state('step1',{
      url:'/step1',
      templateUrl:'template/movie/step1.html',
      controller:'step1Controller'
    })
    .state('step2',{
      url:'/step2',
      templateUrl:'template/movie/step2.html',
      controller:'step2Controller'
    })
    .state('step3',{
      url:'/step3',
      templateUrl:'template/movie/step3.html',
      controller:'step3Controller'
    })













}]);

/**
 * Created by tedyuen on 2017/2/28.
 */
rmApp.controller('step1Controller',['$scope','$state',function ($scope,$state) {

  $scope.dates = [];

  $scope.timelines = [
    {starttime:'13:20',endtime:'15:07散场',language:'英语/3D',position:'6楼3号厅',price:'¥50'},
    {starttime:'13:20',endtime:'15:07散场',language:'英语/3D',position:'6楼3号厅',price:'¥50'},
    {starttime:'13:20',endtime:'15:07散场',language:'英语/3D',position:'6楼3号厅',price:'¥50'},
    {starttime:'13:20',endtime:'15:07散场',language:'英语/3D',position:'6楼3号厅',price:'¥50'},
    {starttime:'13:20',endtime:'15:07散场',language:'英语/3D',position:'6楼3号厅',price:'¥50'},
    {starttime:'13:20',endtime:'15:07散场',language:'英语/3D',position:'6楼3号厅',price:'¥50'},
  ];

  $scope.switch = function (date) {
    for(var index in $scope.dates){
      var temp = $scope.dates[index];
      if(temp.name==date.name){
        temp.now = true;
      }else{
        temp.now =false;
      }
    }
  }

  $scope.goSecondStep = function () {
    $state.go('step2');
  }

  var getNow = function () {
    var nowDate = new Date();
    $scope.dates.push({now:true,time:nowDate.getTime(),name:'今天'});
    $scope.dates.push({now:false,time:nowDate.getTime()+24*60*60*1000,name:'明天'});
    $scope.dates.push({now:false,time:nowDate.getTime()+24*60*60*1000*2,name:'后天'});
  }

  getNow();



}]);

/**
 * Created by tedyuen on 2017/2/28.
 */
rmApp.controller('step2Controller',['$scope','$state',function ($scope,$state) {

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

/**
 * Created by tedyuen on 2017/2/28.
 */
rmApp.controller('step3Controller',['$scope','$state',function ($scope,$state) {
  $scope.step = "step3";


}]);
