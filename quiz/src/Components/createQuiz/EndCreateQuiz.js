import React, { useContext } from 'react';
import { QuizContext } from '../../Helpers/Contexts';
import { QuizBank } from '../../Helpers/QuizBank';

function EndCreateQuiz() {
	const { setMode, newQuiz, setNewQuiz, setQuestions } = useContext(QuizContext);

	function resetQuiz() {
		setNewQuiz({
			quiz_num: -1,
			quiz_name: '',
			created_date: '',
			questions: [],
		});

		setQuestions([]);
	}

	const createAnotherQuiz = () => {
		resetQuiz();
		setMode('createQuiz');
	};

	const goBack = () => {
		setMode('welcome');
	};

	function resetQuiz() {
		setNewQuiz({
			quiz_num: -1,
			quiz_name: '',
			created_date: '',
			questions: [],
		});
	}

	return (
		<div className="container">
			<div>
				<label>Quiz created:</label>
				{newQuiz.quiz_name}
			</div>
			<div className="button-container">
				<button onClick={createAnotherQuiz}>Create Another Quiz</button>
				<button onClick={goBack}>Back</button>
			</div>
		</div>
	);
}

export default EndCreateQuiz;
