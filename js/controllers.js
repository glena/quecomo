
angular.module('queComo')

.controller('SugerirCtrl', ['$scope', function ($scope) {

	$scope.tipoSugerencia = 'balanceada';

	function sugerenciasFilter(isMain, isPreviousLight)
	{
		var filter = null;
		switch($scope.tipoSugerencia)
		{
			case 'balanceada': 
				filter = function(e){
					return (isMain === e.main) && (isPreviousLight || e.light);
				} 
				break;
			case 'light':  
				filter = function(e){
					return (isMain === e.main) && e.light;	
				} 
				break;
			case 'heavy':  
				filter = function(e){
					return (isMain === e.main) && !e.light;
				} 
				break;
			case 'todo': 
				filter = function(e){
					return (isMain === e.main);
				} 
				break;
		}
		return filter;
	}
    
    $scope.findMeAMeal = function(){

		var selected = _.shuffle(
			meals.filter( sugerenciasFilter(true) )
		)[0];

		$scope.suggested = selected.name;

		if (selected.allowSideDish)
		{
			var sideSelected = _.shuffle(
				meals.filter( sugerenciasFilter(false, selected.light) )
			)[0];

			$scope.suggested += ' con ';
			$scope.suggested += sideSelected.name;
		}

    };

    $scope.findMeAMeal();


}])

.controller('ShowDataCtrl', ['$scope', function ($scope) {

	$scope.data = meals;

}]);



