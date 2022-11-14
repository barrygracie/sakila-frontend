import React, { useState } from 'react';

export default function Quiz() {
	const questions = [
		{
			questionText: 'What does HTML Stand for?',
			answerOptions: [
				{ answerText: 'Hyper Teenage Mutant Lizards', isCorrect: false },
				{ answerText: 'Hyper Text Messaging Language', isCorrect: false },
				{ answerText: 'Hyper Text Markup Language', isCorrect: true },
				{ answerText: 'Hyper Text Madeup Language', isCorrect: false },
			],
		},
		{
			questionText: 'What is the correct tag for an image?',
			answerOptions: [
				{ answerText: '<a>', isCorrect: false },
				{ answerText: '<img>', isCorrect: true },
				{ answerText: '<p>', isCorrect: false },
				{ answerText: '<image>', isCorrect: false },
			],
		},
		{
			questionText: 'What is the correct tag for a hyperlink?',
			answerOptions: [
				{ answerText: '<hlnk>', isCorrect: false },
				{ answerText: '<a>', isCorrect: true },
				{ answerText: '<p>', isCorrect: false },
				{ answerText: '<hl>', isCorrect: false },
			],
		},
		{
			questionText: 'What must all HTML documents start with?',
			answerOptions: [
				{ answerText: 'Document Type Declaration', isCorrect: true },
				{ answerText: 'An Image of the author', isCorrect: false },
				{ answerText: 'A tag of your choosing', isCorrect: false },
				{ answerText: 'A body', isCorrect: false },
			],
		},
		
		{
			questionText: 'What does a markup language do?',
			answerOptions: [
				{ answerText: 'Automatically makes web pages', isCorrect: false },
				{ answerText: 'Tells web developers how to hack sites', isCorrect: false },
				{ answerText: 'Makes 3D Games', isCorrect: false },
				{ answerText: 'Formats the overall view of a page and the data it contains', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app' data-testid="q1">
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}