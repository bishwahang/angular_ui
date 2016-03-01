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
  app.filter("daterange", function() {
    return function(data, from, to) {
      if ( from != null && to != null ) {
        var filter_start = new Date(from);
        var filter_end = new Date(to);
        var result = [];
        for (var i=0; i < data.length; i++){
          var item_start = new Date(data[i].start_date),
            item_end = new Date(data[i].end_date);
          if (item_start >= filter_start && item_end <= filter_end)  {
            result.push(data[i]);
          }
        }
        return result;
      } else {
        return data;
      }
    };
  });
}
)()

