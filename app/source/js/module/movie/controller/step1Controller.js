/**
 * Created by tedyuen on 2017/2/28.
 */
rmApp.controller('step1Controller',['$scope','$state',function ($scope,$state) {

  $scope.dates = [];

  $scope.timelines = [
    {starttime:'11:10',endtime:'12:57散场',language:'英语/3D',position:'6楼3号厅',price:'¥25'},
    {starttime:'13:20',endtime:'15:07散场',language:'英语/3D',position:'6楼3号厅',price:'¥25'},
    {starttime:'15:20',endtime:'17:07散场',language:'英语/3D',position:'6楼2号厅',price:'¥25'},
    {starttime:'16:60',endtime:'18:47散场',language:'英语/3D',position:'6楼4号厅',price:'¥25'},
    {starttime:'19:00',endtime:'20:50散场',language:'英语/3D',position:'6楼1号厅',price:'¥25'},
    {starttime:'21:20',endtime:'23:07散场',language:'英语/3D',position:'6楼3号厅',price:'¥25'},
    {starttime:'22:00',endtime:'00:50散场',language:'英语/3D',position:'6楼4号厅',price:'¥25'},
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
