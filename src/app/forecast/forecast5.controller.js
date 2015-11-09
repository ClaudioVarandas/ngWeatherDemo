'use strict';

angular.module('goo')
.controller('Forecast5Controller', function (WeatherService, $scope) {

	WeatherService.getForecast5ByCityName('Barreiro').then(function(forecast){
		console.log(forecast);
			$scope.forecast = forecast;
			$scope.days = [];

			$scope.getDateLong = function(date){
				return moment(date).locale('pt-pt').format("LLLL");
			}

			$scope.getDays = function(){


				angular.forEach(forecast.list , function(value, key) {

					console.log(new Date(value.dt * 1000).getDate());


				});

			}


	});

	WeatherService.getCurrentWeatherByCityName('Barreiro')
		.then(function(response){

		$scope.weather = response.data;

		$scope.getMainIconClass = function(){

			if(getDateNowUnixTs() > $scope.weather.sys.sunrise && getDateNowUnixTs() < $scope.weather.sys.sunset){
				return 'owf-' + $scope.weather.weather[0].id + '-d';
			}else{
				return 'owf-' + $scope.weather.weather[0].id + '-n';
			}
		}

		$scope.getWindDegClass = function(){

			var arrayDegrees = [0,15,30,45,60,75,90,105,120,135,150,165,180,195,210,225,240,255,270,285,300,315,330,345];

			var n = $scope.weather.wind.deg;


			var smallestDiff = Math.abs(n - arrayDegrees[0]);
			var closest = 0; //index of the current closest number

			for (var i = 1; i < arrayDegrees.length; i++) {
				var currentDiff = Math.abs(n - arrayDegrees[i]);
				if (currentDiff < smallestDiff) {
					smallestDiff = currentDiff;
					closest = i;
				}
			}

			return 'wi-wind-default _' + arrayDegrees[closest] + '-deg';

		}

	});

	function getDateNowUnixTs(){
		return Math.floor(Date.now() / 1000);
	}

});
