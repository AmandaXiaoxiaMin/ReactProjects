import React, { useContext } from 'react';
import { QuizContext } from '../../Helpers/Contexts';

function EndTakeQuiz() {
	const { setMode, score, questions } = useContext(QuizContext);

	const takeAnotherQuiz = () => {
		setMode('listQuizzes');
	};

	const goBack = () => {
		setMode('welcome');
	};
	return (
		<div className="container">
			<div>
				{score} / {questions.length}
			</div>
			<div className="button-container">
				<button onClick={takeAnotherQuiz}>Take another Quiz</button>
				<button onClick={goBack}>Back</button>
			</div>
		</div>
	);
}

export default EndTakeQuiz;
