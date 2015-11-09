"use strict";

var BASE_API_URL = 'http://api.openweathermap.org/data/2.5/';
var APIKEY = 'fd6c74622970e1efe4ec7fb65c432604';

var app = angular.module('goo');

app.factory('WeatherService', function($http,$q){

  var service = {};

  service.getForecast5ByCityName = function(query) {

    return $http.get(BASE_API_URL + 'forecast/city?q=' + query + '&units=metric&mode=json&lang=PT&APPID=' + APIKEY)
      .then(function(data){

        return data.data;

    }).catch(function(fail){
      var data = {};
      data.data = {};

      return data;

    });

  }

  service.getCurrentWeatherByCityName = function(query) {

    return $http.get(BASE_API_URL + 'weather?q=' + query + '&units=metric&mode=json&lang=PT&APPID=' + APIKEY)
      .then(function(data){
        return data;
    });

  }

  return service;

});
