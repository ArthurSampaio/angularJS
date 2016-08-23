angular.module("answerQuestionary", []);

angular.module("answerQuestionary").factory("formService", function(){
	var formService = {};

	$formService.getAnswers = function(){
	
	var answers = ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4", "Resposta 5"];
	return answers;
	
	}

	$formService.getQuestions = function(){
		
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

