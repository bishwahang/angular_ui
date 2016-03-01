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
  }
})();
