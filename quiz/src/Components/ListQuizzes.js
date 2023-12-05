import React, { useContext } from 'react';
import Table from './Table';
import { QuizContext } from '../Helpers/Contexts';
import { QuizBank } from '../Helpers/QuizBank';

function ListQuizzes() {
	const { setMode, setQuestions, setQuestionNum, setScore } = useContext(QuizContext);

	const columns = [
		{ Header: 'Quiz #', accessor: 'quiz_num' },
		{ Header: 'Quiz Name', accessor: 'quiz_name' },
		{ Header: 'Created Date', accessor: 'created_date' },
		{
			Header: ' ',
			Cell: ({ row }) => (
				<button
					className="table-btn"
					onClick={() => {
						startQuiz(row.original);
					}}
				>
					Start Quiz
				</button>
			),
		},
	];

	const startQuiz = (row) => {
		setQuestions(row.questions);
		setMode('takeQuiz');
		setQuestionNum(0);
		setScore(0);
	};

	const createQuiz = () => {
		setMode('createQuiz');
	};

	const goBackToWelcome = () => {
		setMode('welcome');
	};

	return (
		<div className="container">
			{QuizBank.length === 0 && (
				<div>
					<div>There is no quiz yet.</div>
					<button onClick={createQuiz}>Create a Quiz</button>
					<button onClick={goBackToWelcome}>Back</button>
				</div>
			)}

			{QuizBank.length !== 0 && <Table data={QuizBank} columns={columns} />}
		</div>
	);
}

export default ListQuizzes;
