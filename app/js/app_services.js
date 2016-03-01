(function(){
  'use strict'

  angular.module('app_services', [])
    .factory('DataService', DataService);

  DataService.$inject = ['$http'];
  function DataService($http){
    var getData = function(success,error){
      $http.get('data/data.json').success(function(data) {
        success(data)
      });
    }
    return {getData: getData}
    // var temp_data = []
    // $http.get('data/data.json').success(function(data) {
    //   angular.forEach(data, function(key, value))
    // });
    // console.log("data_service",data_service)
    // return data_service
  }
})();
