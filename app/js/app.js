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
        var range_start = new Date(from);
        var range_end   = new Date(to);
        var result = [];
        angular.forEach(data, function(value, key){
          var first_date = new Date(value.start_date),
              last_date = new Date(value.end_date);
          if(first_date >= range_start && last_date <= range_end){
            result.push(value);
          }

        })
        return result;
      } else {
        return data;
      }
    };
  });
}
)()

