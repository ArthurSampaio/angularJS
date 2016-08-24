angular.module("answerQuestionary", []);

angular.module("answerQuestionary").factory("formService", function(){
	var formService = {};

	formService.getAnswers = function(){
	
		var answers = ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5"];
		return answers;
		
	}

	
	formService.getQuestions = function(){
		
		var questions = ["Os pré-requisitos assumidos pela disciplina foram adequados?",
		             "O programa da disciplina esteve de acordo com a ementa da mesma?",
		             "A metodologia usada pelo professor (recursos didáticos, atividades dentro e " +
		             "fora de sala de aula) teve qual impacto no aprendizado?",
		             "A bibliografia apresentada teve qual impacto no seu aprendizado?",
		             "Qual é o nível de domínio do assunto pelo professor?",
		             "O método de avaliação foi apropriado para o conteúdo da disciplina?",
		             "Na sua opinião, quanto do material ministrado na disciplina você aprendeu bem?",
		             "Como você avalia a pontualidade do professor?",
		             "Como você avalia a assiduidade do professor?",
		             "Para as aulas que o professor faltou (no caso, faltas não previstas no cronograma da disciplina), " +
		             "houve reposição em outros horários?",
		             "Como o professor equilibrou teoria/prática na disciplina (em disciplinas de laboratório, considere como 'teoria' " +
		             "a orientação do professor para os exercícios)?",
		             "A comunicação da turma com o professor tem qual nível de qualidade?",
		             "O professor demonstra preocupação com o aprendizado dos alunos?",
		             "Como você avalia a infra-estrutura da sala de aula (ou laboratório)?",
		             "Quais os tipos de problema mais sérios que você detectou durante esta disciplina " +
		             "(checkboxes, podendo escolher mais de um)? (Recursos didáticos (quadro, datashow, etc.))"
		            ];
		return questions;
	}	
	

	
	return formService;
});

angular.module("answerQuestionary").controller("formCtrl", 
	function($scope, formService, $anchorScroll){
	var begin = 0;
	var end = 5;
	$scope.tab = 1;
	$scope.buttonNext = "Próximo";
	$scope.buttonPrior = "Anterior";

	var inicio = function(){
		$scope.questions = formService.getQuestions();
		$scope.answers = formService.getAnswers();
		$scope.form = {};
		$scope.form.questions = $scope.questions.slice(begin, end);
	};

	inicio();

	$scope.getQuestions = function(id){
		var questionsForm = [];
		if(id == '1'){
			begin = 0;
			end = 5;
			$scope.buttonNext = "Próximo";
		}else if(id == '2'){
			begin = 5;
			end = 10;
			$scope.buttonNext = "Próximo";
		}else{
			begin = 10;
			end = 15;
			id = '3';
			$scope.buttonNext = "Fim";
		}

		console.log(id)
		$scope.tab = id;
		questionsForm = $scope.answers.slice(begin, end);
		$scope.form.questions = questionsForm;	
		console.log($scope.form.questions);	
		$anchorScroll();

	};



});