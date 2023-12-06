import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { QuizBank } from '../Helpers/QuizBank';

function EndCreateQuiz() {
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
			<div>Quiz Created.</div>
			{console.log(QuizBank)}
			<div>
				<button onClick={createAnotherQuiz}>Create Another Quiz</button>
				<button onClick={goBack}>Back</button>
			</div>
		</div>
	);
}

export default EndCreateQuiz;
