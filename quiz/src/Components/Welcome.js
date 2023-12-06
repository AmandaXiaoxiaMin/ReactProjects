import React, { useContext } from 'react';
import './Welcome.css';
import { QuizContext } from '../Helpers/Contexts';

function Welcome() {
	const { setMode, setNewQuiz, setQuestions } = useContext(QuizContext);

	function resetQuiz() {
		setNewQuiz({
			quiz_num: -1,
			quiz_name: '',
			created_date: '',
			questions: [],
		});

		setQuestions([]);
	}

	return (
		<div className="container">
			<div className="welcome-title">Welcome to Quiz App</div>
			<div>
				<button
					onClick={() => {
						resetQuiz();
						setMode('createQuiz');
					}}
				>
					Create a Quiz
				</button>
				<button
					onClick={() => {
						setMode('listQuizzes');
					}}
				>
					Take a Quiz
				</button>
			</div>
		</div>
	);
}

export default Welcome;
