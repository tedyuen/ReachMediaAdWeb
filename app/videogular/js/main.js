/**
 * Created by tedyuen on 28/02/2017.
 */
'use strict';
var videoApp = angular.module('myApp',
  [
    "ngSanitize",
    "com.2fdevs.videogular"
  ]
)
  .controller('HomeCtrl',
    ['$sce','$rootScope','$scope','$location',function ($sce,$rootScope,$scope,$location){


      $rootScope.listData = [
        {index:'/0',imgUrl:'images/pengranxindong.png',videoUrl:'video/yyzhiru.mp4',title:'怦然心动',playTime:'1.8万'},
        {index:'/1',imgUrl:'images/pingan.png',videoUrl:'video/puxipingan.mp4',title:'平安',playTime:'3.8万'},
        {index:'/2',imgUrl:'images/saiou.png',videoUrl:'video/saiou.mp4',title:'雪弗莱-赛欧',playTime:'0.7万'},
        {index:'/3',imgUrl:'images/shihualuoshiqi.png',videoUrl:'video/shihualuoshiqi.mp4',title:'施华洛世奇',playTime:'2.1万'},
      ];

      $rootScope.current = $rootScope.listData[0];
      for(var index in $rootScope.listData){
        var temp = $rootScope.listData[index];
        if(temp.index==$location.url()){
          $rootScope.current = temp
          break;
        }
      }
      // #!/0

      this.config = {
        preload: "none",
        sources: [
          {src: $sce.trustAsResourceUrl($rootScope.current.videoUrl), type: "video/mp4"},
          // {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
          // {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
          // {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
        ],
        // tracks: [
        //   {
        //     src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
        //     kind: "subtitles",
        //     srclang: "en",
        //     label: "English",
        //     default: ""
        //   }
        // ],
        theme: {
          url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
        }
      };
    }]
  );
