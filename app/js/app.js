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
      if ( from && to ) {
        var result = [];
        from = new Date(from);
        to = new Date(to);

        angular.forEach(data, function(value, key){
          if( new Date(value.start_date) >= from &&
              new Date(value.end_date) <= to
            ){
            result.push(value);
          }
        })
        return result;
      }
      return data;
    };
  });
}
)()
