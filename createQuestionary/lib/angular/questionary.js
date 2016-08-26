angular.module("questionary", []);

angular.module("questionary").factory("formService", function () {
	formService = {};

	formService.getQuestions = function(){
		var questions = ["Lamento Dizer que deu certo", "Quenhé que manja do rolé?"];
		return questions;
	}

	return formService;

});


angular.module("questionary").controller("formCtrl",
	function($scope, formService){
		
		var begin = function(){
			$scope.questions = formService.getQuestions();
			$scope.ab = "A SOCIENDAND SENRA DENRONTADA PENLA VINTORIA DON MAKENGUMI";
		};
	

	
	begin();

});