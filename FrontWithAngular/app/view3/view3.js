angular.module("myApp.view3", ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/view3', {
	    templateUrl: 'view3/view3.html',
	    controller: 'View3Ctrl'
	  });
	}])


	.factory("formService", function () {
		formService = {};

		formService.getQuestions = function(){
			var questions = [{message:"Os pré-requisitos assumidos pela disciplina foram adequados?"},
							 {message:"O programa da disciplina esteve de acordo com a ementa da mesma?"}
							];
			return questions;
		}

		formService.getType = function(){
			var types = [{name: "Múltipla Escolha"},
					 	{name: "Escolha Única"},
					 	{name: "Apenas Texto"}
						];
			return types;	
		}

		return formService;

	})

	.controller('View3Ctrl',['$scope',function($scope, formService){


			var begin =  function(){

				$scope.questions =  [{message:"Os pré-requisitos assumidos pela disciplina foram adequados?"},
							 {message:"O programa da disciplina esteve de acordo com a ementa da mesma?"}
							];
				$scope.types = [{name: "Múltipla Escolha"},
					 	{name: "Escolha Única"},
					 	{name: "Apenas Texto"}
						];
			}



			$scope.addQuestion = function(question){

				$scope.questions.push(angular.copy(question)); //Adiciona no fim do array			
				delete $scope.question;
			}


			$scope.isQuestionSelected = function (questions){
					return questions.some(function (question){
						return question.selected;
				});
			}


			$scope.deleteQuestion = function(questions){
					$scope.questions = questions.filter(function(question){
						if (!question.selected) return question;
				})	
			}


			begin();


	}])


