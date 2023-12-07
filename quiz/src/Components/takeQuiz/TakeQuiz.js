import { useContext, useState } from 'react';
import { QuizContext } from '../../Helpers/Contexts';
import './TakeQuiz.css';
import { QuizBank } from '../../Helpers/QuizBank';

function TakeQuiz() {
	const { mode, setMode, questions, setQuestions, questionNum, setQuestionNum, score, setScore } =
		useContext(QuizContext);

	const [selected, setSelected] = useState('');

	const handleNext = () => {
		if (selected === '') return;

		setQuestionNum(questionNum + 1);
		if (selected === questions[questionNum].answer) {
			setScore(score + 1);
		}
		setSelected('');
		document.querySelectorAll('.option').forEach((optionEle) => {
			optionEle.classList.remove('option-selected');
		});

		document.querySelector('.next').classList.add('disable-btn');
	};

	const handleFinish = () => {
		if (selected === '') return;

		if (selected === questions[questionNum].answer) {
			setScore(score + 1);
		}
		setMode('endTakeQuiz');
	};

	const handleSelectOption = (option) => {
		setSelected(option);
		document.querySelectorAll('.option').forEach((optionEle) => {
			optionEle.classList.remove('option-selected');
		});
		document.querySelector(`.option${option}`).classList.add('option-selected');

		if (questionNum !== questions.length - 1) {
			document.querySelector('.next').classList.remove('disable-btn');
		} else {
			document.querySelector('.finish').classList.remove('disable-btn');
		}
	};

	return (
		<div className="container">
			<div className="question">Question: {questions[questionNum].question}</div>
			<div
				className="option optionA"
				onClick={() => {
					handleSelectOption('A');
				}}
			>
				{questions[questionNum].optionA}
			</div>
			<div
				className="option optionB"
				onClick={() => {
					handleSelectOption('B');
				}}
			>
				{questions[questionNum].optionB}
			</div>
			<div
				className="option optionC"
				onClick={() => {
					handleSelectOption('C');
				}}
			>
				{questions[questionNum].optionC}
			</div>
			<div
				className="option optionD"
				onClick={() => {
					handleSelectOption('D');
				}}
			>
				{questions[questionNum].optionD}
			</div>
			<div>
				{questionNum !== questions.length - 1 && (
					<button className="next disable-btn" onClick={handleNext}>
						Next
					</button>
				)}
				{questionNum === questions.length - 1 && (
					<button className="finish disable-btn" onClick={handleFinish}>
						Finish
					</button>
				)}
			</div>
		</div>
	);
}

export default TakeQuiz;
