import React, { useContext } from 'react';
import './Welcome.css';
import { QuizContext } from '../Helpers/Contexts';

function Welcome() {
	const { setMode } = useContext(QuizContext);

	return (
		<div className="container">
			<div className="welcome-title">Welcome to Quiz App</div>
			<div>
				<button
					onClick={() => {
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
