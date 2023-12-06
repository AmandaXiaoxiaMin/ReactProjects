import React, { useContext, useState } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import './CreateQuestion.css';
import { QuizBank } from '../Helpers/QuizBank';

function CreateQuestion() {
	const { setMode, newQuiz, setNewQuiz } = useContext(QuizContext);

	const [newQuestion, setNewQuestion] = useState({
		question: '',
		optionA: '',
		optionB: '',
		optionC: '',
		optionD: '',
		answer: 'A',
	});

	const [alert, setAlert] = useState('');

	const handleOnchange = (e) => {
		setNewQuestion({
			...newQuestion,
			[e.target.name]: e.target.value,
		});
	};

	const createAnotherQuestion = () => {
		if (
			newQuestion.question === '' ||
			newQuestion.optionA === '' ||
			newQuestion.optionB === '' ||
			newQuestion.optionC === '' ||
			newQuestion.optionD === ''
		) {
			setAlert(`** Please enter all fields.`);
			return;
		} else {
			setAlert('');
			let questions = newQuiz.questions;
			questions.push(newQuestion);
			setNewQuiz({
				...newQuiz,
				questions: questions,
			});

			reset();
		}
	};

	function reset() {
		setNewQuestion({
			question: '',
			optionA: '',
			optionB: '',
			optionC: '',
			optionD: '',
			answer: 'A',
		});
	}

	function getCurrentDate() {
		const today = new Date();
		const year = today.getFullYear();
		const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-indexed
		const day = today.getDate().toString().padStart(2, '0');

		const formattedDate = `${year}-${month}-${day}`;
		console.log(formattedDate);
		return formattedDate;
	}

	const finishCreatingQuiz = () => {
		if (
			newQuestion.question === '' ||
			newQuestion.optionA === '' ||
			newQuestion.optionB === '' ||
			newQuestion.optionC === '' ||
			newQuestion.optionD === ''
		) {
			setAlert(`** Please enter all fields.`);
			return;
		} else {
			setAlert('');
			let questions = newQuiz.questions;
			questions.push(newQuestion);
			const quiz_num = QuizBank.length + 1;
			const date = getCurrentDate();
			setNewQuiz({
				...newQuiz,
				quiz_num: quiz_num,
				created_date: date,
				questions: questions,
			});

			reset();
			setMode('previewQuiz');
		}
	};

	return (
		<div className="container">
			<div className="quiz-name">{newQuiz.quiz_name}</div>
			<div className="options-container">
				<div>Question:</div>
				<input name="question" onChange={handleOnchange} type="text" value={newQuestion.question} />
				<div>Options:</div>
				<div>
					<label>A:</label>
					<input
						className="option-input"
						name="optionA"
						onChange={handleOnchange}
						type="text"
						value={newQuestion.optionA}
					></input>
				</div>
				<div>
					<label>B:</label>
					<input
						className="option-input"
						name="optionB"
						onChange={handleOnchange}
						type="text"
						value={newQuestion.optionB}
					></input>
				</div>
				<div>
					<label>C:</label>
					<input
						className="option-input"
						name="optionC"
						onChange={handleOnchange}
						type="text"
						value={newQuestion.optionC}
					></input>
				</div>
				<div>
					<label>D:</label>
					<input
						className="option-input"
						name="optionD"
						onChange={handleOnchange}
						type="text"
						value={newQuestion.optionD}
					></input>
				</div>
				<div>
					<label>Answer:</label>
					<select
						className="answer"
						name="answer"
						value={newQuestion.answer}
						onChange={handleOnchange}
					>
						<option value="A">A</option>
						<option value="B">B</option>
						<option value="C">C</option>
						<option value="D">D</option>
					</select>
				</div>
			</div>
			<div>
				<button onClick={createAnotherQuestion}>Next Question</button>
				<button onClick={finishCreatingQuiz}>Finish</button>
			</div>
			{alert !== '' && <div className="alert">{alert}</div>}
		</div>
	);
}

export default CreateQuestion;
