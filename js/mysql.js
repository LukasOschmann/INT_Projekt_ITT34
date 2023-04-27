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
