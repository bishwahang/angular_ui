(function(){
  'use strict'

  angular.module('app_services', [])
    .factory('DataService', DataService);

  DataService.$inject = ['$http'];
  function DataService($http){
    var appService = {"name": "Hang"}

  }
})();
