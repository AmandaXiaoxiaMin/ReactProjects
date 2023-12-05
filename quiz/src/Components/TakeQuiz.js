import { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import './TakeQuiz.css';
import { QuizBank } from '../Helpers/QuizBank';
import Table from './Table';

function TakeQuiz() {
	const { modeState, setModeState } = useContext(QuizContext);

	const columns = [
		{ Header: 'Quiz #', accessor: 'quiz_num' },
		{ Header: 'Quiz Name', accessor: 'quiz_name' },
		{ Header: 'Created Date', accessor: 'created_date' },
		{
			Header: ' ',
			Cell: ({ row }) => (
				<button className="table-btn" onClick={() => startQuiz(row.original)}>
					Start Quiz
				</button>
			),
		},
	];

	const startQuiz = (row) => {};

	return (
		<div className="take-quiz-container">
			{QuizBank.length === 0 && (
				<div>
					<div>There is no quiz yet.</div>
					<button>Create a Quiz</button>
					<button>Back</button>
				</div>
			)}

			{QuizBank.length !== 0 && <Table data={QuizBank} columns={columns} />}
		</div>
	);
}

export default TakeQuiz;
