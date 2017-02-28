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
