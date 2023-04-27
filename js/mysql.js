'use strict';

// Ein Array mit Objekten, jedes Objekt stellt eine Frage dar
var questions = [
	{
		question: "What is the capital of France?", // Die Frage
		choices: ["London", "Paris", "Berlin", "Madrid"], // Ein Array mit den Antwortmöglichkeiten
		answer: "Paris" // Die korrekte Antwort
	},
	{
		question: "What is the largest country in the world?",
		choices: ["Russia", "Canada", "China", "USA"],
		answer: "Russia"
	},
	{
		question: "What is the currency of Japan?",
		choices: ["Yuan", "Euro", "Yen", "Dollar"],
		answer: "Yen"
	}
];

// Eine Variable, um das Quiz-Container-Element zu speichern
var quizContainer = document.getElementById('mysql-spielfeld');

// Eine Funktion, um das Quiz zu erstellen und anzuzeigen
function createQuiz() {
	// Eine Variable, um das HTML für das Quiz zu speichern
	var quizHTML = '';

	// Eine Schleife durch jedes Objekt im questions-Array
	for (var i = 0; i < questions.length; i++) {
		// Die Frage und Antwortmöglichkeiten aus dem aktuellen Objekt extrahieren
		var question = questions[i].question;
		var choices = questions[i].choices;

		// Das HTML für die Frage und Antwortmöglichkeiten erstellen
		quizHTML += '<div class="question">' + question + '</div>';
		quizHTML += '<div class="choices">';
		for (var j = 0; j < choices.length; j++) {
			quizHTML += '<label>';
			quizHTML += '<input type="radio" name="q' + i + '" value="' + choices[j] + '">';
			quizHTML += choices[j];
			quizHTML += '</label>';
		}
		quizHTML += '</div>';
	}

	// Das HTML in das Quiz-Container-Element einfügen
	quizContainer.innerHTML = quizHTML;
}


