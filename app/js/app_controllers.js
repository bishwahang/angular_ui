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
    var getChartData = function(data, success){
      var counter = data.length
      var result = {}
      angular.forEach(data,function(value, key){
        counter -= 1
        if (result[value.status] == null || result[value.status] == 'undefined'){
          result[value.status] = 1
        }else{
          result[value.status] += 1
        }
        if(counter == 0){
          success(result)
        }
      })
    }
    DataService.getData(function(data){
      getChartData(data, function(res){
        var array_keys = new Array();
        var array_values = new Array();
        for (var key in res) {
            array_keys.push(key);
            array_values.push(res[key]);
        }
        $scope.data   = [array_values];
        $scope.labels = array_keys;
        $scope.series = ["Status"];
      });
    },function(){})
  }

})();
