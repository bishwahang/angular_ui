/* App Module */
(function(){
  'use strict'
  var app = angular.module('app',[
    'ui.router',
    'ui.date',
    'chart.js',
    'app_controllers'
  ]).config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");

    $stateProvider.state("/",{
      url: "/",
      views:{
        "table":{
          templateUrl: 'views/table.html',
          controller: 'TableController'
        },
        "chart":{
          templateUrl: 'views/chart.html',
          controller: 'ChartController'
        }
      }
    });
  })
}
)()

