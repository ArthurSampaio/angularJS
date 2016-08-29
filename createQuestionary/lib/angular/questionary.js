angular.module("questionary", []);

angular.module("questionary").factory("formService", function () {
	formService = {};

	formService.getQuestions = function(){
		var questions = [{message:"Os pré-requisitos assumidos pela disciplina foram adequados?"},
						 {message:"O programa da disciplina esteve de acordo com a ementa da mesma?"}
						];
		return questions;
	}

	formService.getType = function(){
		var types = [{name: "Múltipla Escolha", category:"checkbox"},
					 {name: "Escolha Única", category: "radio"},
					 {name: "Apenas Texto", category: "text"}
					];
		return types;			
	}

	return formService;

});


angular.module("questionary").controller("formCtrl",
	function($scope, formService){
		
		var begin = function(){
			$scope.questions = formService.getQuestions();
			$scope.types = formService.getType();
		};
	
		$scope.addQuestion = function(question){
			$scope.questions.push(angular.copy(question)); //Adiciona no fim do array			
			delete $scope.question
		};


		$scope.deleteQuestion = function(questions){
				$scope.questions = questions.filter(function(question){
					if (!question.selected) return question;
			})	
		};


		$scope.isQuestionSelected = function (questions){
				return questions.some(function (question){
					return question.selected;
			});
		};
	
	begin();

});