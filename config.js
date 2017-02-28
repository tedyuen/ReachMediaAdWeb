/**
 * Created by tedyuen on 2017/2/7.
 */
/* gulp命令会由gulpfile.js运行，所以src和build文件夹路径如下（根目录下） */
var src = './app/source';
var dest = './app/out';

module.exports = {
  less: {
    all: src + "/less/**/*.less", //所有less
    src: src + "/less/*.less",      //需要编译的less
    dest: dest + "/css",          //输出目录
    rev: dest + "/rev/css",
    settings: {                      //编译less过程需要的配置，可以为空

    }
  },
  sass: {
    all: src + "/sass/**/*.scss",
    src: src + "/sass/*.scss",
    dest: src + "/sass/css",
    del: src +"/sass/css/*.*"
  },
  css: {
    arr: [
      './app/source/css/node/bootstrap.min.css',
      // './app/source/css/node/jquery.toast.min.css',
      // './app/source/css/node/metisMenu.min.css',
      // './app/source/css/node/sweetalert.css',
      // './app/source/css/pixel/animate.css',
      // './app/source/css/pixel/style.css',
      // './app/source/css/pixel/spinners.css',
      // // './app/source/css/pixel/colors/default.css',
      // './app/source/css/pixel/colors/purple.css',
      // './app/source/css/node/bootstrap-datepicker.min.css',
      // './app/source/css/node/dropify.min.css',
      // './app/source/css/node/morris.css',
      './app/source/sass/css/*.css'
    ],
    all: [],
    src: src + "/css",
    dest: dest + "/css",
    rev: dest + "/rev/css",
    del: dest +"/css/all-*.min.css",

  },
  images: {
    src: src + "/img/**/*",
    dest: dest + "/img"
  },
  js: {
    src: src + "/js/**/*",
    dest: dest + "/js",
    rev: dest + "/rev/js",
    del: dest +"/js/all-*.min.js",
    arr: [
      './app/source/js/module/movie/main.js',
      './app/source/js/module/movie/route.js',
      './app/source/js/module/movie/controller/**/*.js',
      // './app/source/js/module/custom.js',
      // './app/source/js/module/waves.js',
      // './app/source/js/module/app/*.js',
      // './app/source/js/module/test/mock*.js',
      // './app/source/js/module/filter/*.js',
      // './app/source/js/module/service/*.js',
      // './app/source/js/module/controller/crm/*.js',
      // './app/source/js/module/controller/crm/*/*.js',
      // './app/source/js/module/controller/invoicing/*.js',
      // './app/source/js/module/controller/*.js',
      // './app/source/js/module/directive/*.js',
      // './app/source/js/module/directive/**/*.js',
      // './app/source/js/module/log.js',
    ]
  },
  clean:{
    src: dest
  },
  rev:{
    css:dest+"/css/all.min.css",
    js: dest+"/js/all.min.js",
    revJson: dest + "/rev/**/*.json",
    src: dest+"/template/movie_tickets.html",
    dest: dest+"/"
  }
}
