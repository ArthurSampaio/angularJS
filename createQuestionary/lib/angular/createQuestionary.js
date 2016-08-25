angular.module("createQuestionary", []);

angular.module("createQuestionary").factory("formCreat", function() {
	var formCreat = {};


	formCreat.getQuestion = function(){

		var questions = ["Os pré-requisitos assumidos pela disciplina foram adequados?",
			"Segunda Pergunta"];
		return questions;
	}

	return formCreat;

});


angular.module("createQuestionary").controller("formCreatCtrl",
 function($scope, formCreat){

	var inicio = function(){
		$scope.questions = formCreat.getQuestion();
	};	

	inicio();

});