(function(){
  'use strict'

  angular.module('app_controllers', [])
    .controller('TableController',TableController)
    .controller('ChartController',ChartController);

  TableController.$inject = ['$scope'];
  function TableController($scope){
    console.log("Table Controller");
    $scope.name = "Bishwa"
  }

  ChartController.$inject = ['$scope'];
  function ChartController($scope){
    console.log("Chart Controller");
    $scope.name = "Bishwa"
  }

})();
