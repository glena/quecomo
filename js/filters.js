angular.module('queComo')
.filter('transformBoolean', function () {
	return function(input) {
		return input?'Si':'No';
	}
});