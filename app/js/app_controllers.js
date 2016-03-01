(function(){
  'use strict'

  angular.module('app_controllers', ['app_services'])
    .controller('TableController',TableController)
    .controller('ChartController',ChartController);

  TableController.$inject = ['$scope', 'DataService'];
  function TableController($scope, DataService){
    console.log("Table Controller");
    $scope.name = "Bishwa"
  }

  ChartController.$inject = ['$scope', 'DataService'];
  function ChartController($scope, DataService){
    console.log("Chart Controller");
    $scope.name = DataService.name
  }

})();
