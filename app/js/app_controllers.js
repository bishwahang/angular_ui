(function(){
  'use strict'

  angular.module('app_controllers', ['app_services'])
  .controller('TableController',TableController)
  .controller('ChartController',ChartController);

  TableController.$inject = ['$scope', 'DataService'];

  function TableController($scope, DataService){
    DataService.getData(function(data){
      angular.forEach(data,function(value,key){
        value.start_date = new Date(value.start_date);
        value.end_date   = new Date(value.start_date);
      });
      $scope.table_data = data;
    },function(){})

    $scope.dateOptions = {
      changeYear: true,
      changeMonth: true,
      yearRange: '1900:-0',
      dateFormat: 'M d, y'
    };
    $scope.resetDate = function(){
      $scope.start_date = null;
      $scope.end_date   = null;
    }
  }

  ChartController.$inject = ['$scope', 'DataService'];
  function ChartController($scope, DataService){
    DataService.getData(function(data){
      $scope.chart_data = data
    },function(){})
  }

})();
