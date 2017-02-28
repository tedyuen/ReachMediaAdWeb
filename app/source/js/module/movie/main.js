/**
 * Created by tedyuen on 2017/2/28.
 */
global.$ = global.jQuery = require('jquery');

require('bootstrap');

require('angular');
require('angular-cookies');
require('angular-ui-router');

var rmApp = angular.module("myApp",['ui.router','ngCookies']);
