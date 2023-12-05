import React, { useContext } from 'react';
import './Welcome.css';
import { QuizContext } from '../Helpers/Contexts';

function Welcome() {
	const { modeState, setModeState } = useContext(QuizContext);

	return (
		<div className="welcome-container">
			<div className="welcome-title">Welcome to Quiz App</div>
			<div>
				<button
					onClick={() => {
						setModeState('createQuiz');
					}}
				>
					Create a Quiz
				</button>
				<button
					onClick={() => {
						setModeState('takeQuiz');
					}}
				>
					Take a Quiz
				</button>
			</div>
		</div>
	);
}

export default Welcome;
