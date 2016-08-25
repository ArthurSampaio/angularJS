angular.module("questionary", []);

angular.module("questionary").factory("formService", function () {
	formService = {};

	formService.getQuestions = function(){
		var questions = ["Primeira Questão", "Segunda Questão"];
		return questions;
	}

});


angular.module("questionary").controller("formCtrl",
	function($scope, formService){
		$scope.questions = formService.getQuestions();
	

	$scope.a = ['ajuheaeh', 'auehuaeh'];

	begin();

});