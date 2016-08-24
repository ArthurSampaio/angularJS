angular.module("createQuestionary", []);

angular.module("createQuestionary").factory("formCreat", function() {
	var formCreat = {};


	formCreat.getQuestion = function(){

		var questions =["Os pré-requisitos assumidos pela disciplina foram adequados?", "Segunda Pergunta"];

	}

	return formCreat;

});


angular.module("createQuestionary").controller("formCreatCtrl", function($scope, formCreat, $anchorScroll){

	var inicio = function(){
		$scope.questions = formCreat.getQuestion();
	}

	inicio();


	console.log($scope.questions);                                                                                                                    

	$anchorScroll();
});